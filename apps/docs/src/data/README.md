# Documentation Versioning

This directory contains the infrastructure for versioned documentation.

## Current Implementation

The version dropdown in the navbar fetches release information from the GitHub API at build time and displays all available versions. **Version-specific deployments are now enabled** - each release is deployed to its own subdirectory.

## Files

- `versions.data.ts` - VitePress data loader that fetches releases from GitHub API
- `../components/VersionDropdown.vue` - UI component for the version dropdown in the navbar

## How It Works

1. **Build Time**: The `versions.data.ts` file runs during the VitePress build process and fetches the list of releases from GitHub
2. **Filtering**: Only releases tagged as `bootstrapvuenext-v*` are included (excludes Nuxt package releases)
3. **Display**: Versions are shown with "latest" at the top (marked as "Current") followed by released versions in descending order
4. **Graceful Fallback**: If GitHub API is unavailable, it falls back to showing only "latest"
5. **Version Detection**: The component detects the current version from the URL path
6. **Version Switching**: Clicking on a version navigates to the version-specific documentation

## Deployment Structure

Documentation is deployed with the following structure:

```
/bootstrap-vue-next/
  index.html          # Redirects to /bootstrap-vue-next/latest/
  /latest/            # Current main branch docs
  /v0.43.1/           # Docs for v0.43.1 release
  /v0.43.0/           # Docs for v0.43.0 release
  /v0.42.0/           # Docs for v0.42.0 release
```

## CI/CD Workflows

### Release Workflow (`release-main.yaml`)

When a release is created via Release Please:
1. Builds versioned documentation for the release tag
2. Builds latest documentation from main branch
3. Creates root redirect to `/latest/`
4. Deploys all to GitHub Pages

### Manual Release Workflow (`docs-deploy.yaml`)

When a release is manually created:
1. Builds versioned documentation for the release tag
2. Checks out main branch and builds latest documentation
3. Creates root redirect to `/latest/`
4. Deploys all to GitHub Pages

## VitePress Configuration

The VitePress config (`config.mts`) reads the `VITE_DOCS_VERSION` environment variable to set the correct base path:

```typescript
const docsVersion = process.env.VITE_DOCS_VERSION || 'latest'
const baseUrl = `/bootstrap-vue-next/${docsVersion}/`
```

This ensures all internal links work correctly for each version.

## Version Dropdown Component

The `VersionDropdown.vue` component:
- Detects the current version from the URL path
- Generates version-specific URLs for all available versions
- Marks the current version with a "Current" badge
- Allows users to switch between versions seamlessly

## Testing

### Local Development

Test the version dropdown UI in development:
```bash
pnpm --filter docs run dev
```

The dropdown will show "latest" when GitHub API is unavailable (expected in local development).

### Test Version-Specific Builds

To test building for a specific version:

```bash
# Build for a specific version
VITE_DOCS_VERSION=v0.43.1 pnpm --filter docs run build

# Build for latest
VITE_DOCS_VERSION=latest pnpm --filter docs run build
```

## Version Limits

To manage storage and maintain relevance:
- Keep the last 10-15 minor versions
- Keep all patch versions for the current minor version
- Older versions can be removed from deployment (but remain in git history)
- Add a note in very old versions pointing to newer documentation

## Troubleshooting

### Version not detected correctly

If the version detection fails, check:
1. URL path format is correct: `/bootstrap-vue-next/{version}/`
2. Version matches the pattern: `v\d+\.\d+\.\d+` or `latest`

### Version dropdown shows only "latest"

This indicates the GitHub API fetch failed during build:
1. Check GitHub API rate limits
2. Verify network connectivity during build
3. Check console for error messages from `versions.data.ts`
