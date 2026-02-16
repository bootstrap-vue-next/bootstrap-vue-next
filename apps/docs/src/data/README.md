# Documentation Versioning

This directory contains the infrastructure for versioned documentation.

## Current Implementation

The version dropdown in the navbar fetches release information from the GitHub API at build time and displays all available versions. Currently, all versions point to the same documentation (the latest build).

## Files

- `versions.data.ts` - VitePress data loader that fetches releases from GitHub API
- `../components/VersionDropdown.vue` - UI component for the version dropdown in the navbar

## How It Works

1. **Build Time**: The `versions.data.ts` file runs during the VitePress build process and fetches the list of releases from GitHub
2. **Filtering**: Only releases tagged as `bootstrapvuenext-v*` are included (excludes Nuxt package releases)
3. **Display**: Versions are shown with "latest" at the top (marked as "Current") followed by released versions in descending order
4. **Graceful Fallback**: If GitHub API is unavailable, it falls back to showing only "latest"

## Future: Multi-Version Deployment

To enable full version switching (deploying documentation for each version), you'll need to:

### 1. Update GitHub Actions Workflow

Modify `.github/workflows/docs-deploy.yaml` to:
- Build documentation for each release tag
- Deploy to version-specific subdirectories (e.g., `/v0.43.1/`, `/v0.42.0/`, `/latest/`)
- Update the default redirect to point to the latest stable release

Example structure:
```
/bootstrap-vue-next/
  /latest/          # Current main branch docs
  /v0.43.1/         # Docs for v0.43.1 release
  /v0.43.0/         # Docs for v0.43.0 release
  /v0.42.0/         # Docs for v0.42.0 release
```

### 2. Update VersionDropdown Component

Uncomment the TODO section in `VersionDropdown.vue` to enable actual version-specific URLs:

```typescript
const getVersionUrl = (version: string): string => {
  const baseUrl = site.value.base || '/'
  
  if (version === 'latest') {
    return `${baseUrl}latest/`
  }
  return `${baseUrl}${version}/`
}
```

### 3. Detect Current Version

Add logic to detect which version the user is currently viewing:

```typescript
const currentVersion = computed(() => {
  // Parse from URL path
  const match = window.location.pathname.match(/\/(v\d+\.\d+\.\d+|latest)\//)
  return match ? match[1] : 'latest'
})
```

### 4. Version-Specific Builds

For each release:
1. Checkout the specific git tag
2. Build the documentation
3. Deploy to the version-specific path

### 5. Consider Version Limits

To avoid unlimited growth:
- Keep only the last N major versions
- Keep all minor versions for the current major version
- Add a note in old versions pointing to newer documentation

## Testing

Test the version dropdown UI in development:
```bash
pnpm --filter docs run dev
```

The dropdown will show "latest" when GitHub API is unavailable (expected in local development).

To test with mock data, you can temporarily modify `versions.data.ts` to return hardcoded version data.
