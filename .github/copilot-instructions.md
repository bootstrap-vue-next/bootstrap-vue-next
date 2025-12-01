# BootstrapVueNext Development Instructions

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Required Setup

- Install Node.js 20.x or 22.x (engine requires >=22.0.0 but 20.x works with warnings)
- Install pnpm globally: `npm install -g pnpm@10.13.1` (ONLY pnpm is allowed as package manager) Use the version specified in the packageManager field of the package.json file
- Clone repository and open the **root** directory (not subdirectories like packages/bootstrap-vue-next)

### Bootstrap, Build, and Test the Repository

1. `pnpm install --ignore-scripts --frozen-lockfile` -- takes 2 seconds. Use `--ignore-scripts` to avoid docs build network issues.
2. `pnpm --filter bootstrap-vue-next run build` -- takes 27 seconds. NEVER CANCEL. Set timeout to 60+ minutes.
3. `pnpm --filter bootstrap-vue-next run test:unit:ci` -- takes 40 seconds. NEVER CANCEL. Set timeout to 60+ minutes.
4. `pnpm --filter bootstrap-vue-next run test:lint` -- takes 12 seconds. NEVER CANCEL. Set timeout to 30+ minutes.

### Build Individual Components

- Bootstrap Vue Next core package: `pnpm --filter bootstrap-vue-next run build` -- 27 seconds
- Nuxt package: `pnpm --filter @bootstrap-vue-next/nuxt run build` -- 25 seconds
- Playground app: `pnpm --filter playground run build` -- 8 seconds
- **NEVER** try to build docs app directly - it fails due to network connectivity (OpenCollective API)

### Development Servers

- Core package dev server: `pnpm --filter bootstrap-vue-next run dev` (runs on <http://localhost:5174>)
- Playground app dev server: `pnpm --filter playground run dev` (runs on <http://localhost:5173>)
- Docs dev server: `pnpm --filter docs run dev` (runs on <http://localhost:8000>)
- All dev servers: `pnpm dev` (starts all development environments in parallel)

## Validation

### Always Validate Changes

- ALWAYS run `pnpm --filter bootstrap-vue-next run test:lint` before committing (12 seconds)
- ALWAYS run `pnpm --filter bootstrap-vue-next run test:unit:ci` after making changes (40 seconds)
- ALWAYS run `pnpm --filter bootstrap-vue-next run build` to ensure buildability (27 seconds)
- For linting fixes: `pnpm --filter bootstrap-vue-next run lint` (auto-fixes issues)

### Manual Testing Scenarios

- Test component changes using the core package dev server at <http://localhost:5174>
- Use `./packages/bootstrap-vue-next/src/App.vue` as a test area for changes
- Test real-world usage with the playground app at <http://localhost:5173>
- The playground mimics user library usage but requires `pnpm build` for changes (no hot-reload)

### CI Validation

- The CI runs: build, test:lint:ci, test:unit:ci
- Use `pnpm run test:ci` to run the same tests locally
- NEVER CANCEL builds or tests - they are designed for long runs

## Repository Structure

### Monorepo Layout

```plaintext
packages/
├── bootstrap-vue-next/     # Main Vue 3 component library
└── nuxt/                   # Nuxt 3 module

apps/
├── docs/                   # VitePress documentation site
└── playground/             # Test application for user scenarios

templates/
└── vite/                   # Vite starter template
```

### Key Directories

- `packages/bootstrap-vue-next/src/` - Main library source code
- `packages/bootstrap-vue-next/src/components/` - Vue components
- `packages/bootstrap-vue-next/src/composables/` - Vue composables
- `packages/bootstrap-vue-next/src/directives/` - Vue directives
- `packages/bootstrap-vue-next/src/styles/` - SCSS styles
- `apps/playground/src/` - User scenario testing

### Important Files

- `package.json` - Root workspace configuration
- `pnpm-workspace.yaml` - Workspace package definitions
- `turbo.json` - Task pipeline configuration
- `vitest.workspace.mjs` - Test workspace setup
- `.github/workflows/ci.yaml` - CI pipeline

### Architecture Documentation

- `architecture/` - Technical architecture documentation
  - `ARIA_VISIBILITY.md` - ARIA accessibility system for show/hide components

## Documentation Requirements

### Component Documentation (.data.ts files)

- **CRITICAL**: When adding/modifying component props, events, or slots, ALWAYS update the corresponding `.data.ts` file in `apps/docs/src/data/components/`
- Each component has a `.data.ts` file that defines:
  - `props`: All component properties with types, defaults, and descriptions
  - `emits`: All events with descriptions and argument types
  - `slots`: All slots with descriptions and scope definitions
- Documentation format must match TypeScript interfaces exactly
- Use clear, concise descriptions that help users understand the purpose and usage
- Example: `formSelect.data.ts` for BFormSelect, BFormSelectOption, BFormSelectOptionGroup

## Common Tasks

### Making Component Changes

1. Edit files in `packages/bootstrap-vue-next/src/components/`
2. Test using `packages/bootstrap-vue-next/src/App.vue`
3. Run `pnpm --filter bootstrap-vue-next run dev` for hot-reload testing
4. Run `pnpm --filter bootstrap-vue-next run test:unit:ci` to validate
5. Run `pnpm --filter bootstrap-vue-next run test:lint` before committing
6. **ALWAYS update documentation** in `apps/docs/src/data/components/*.data.ts` when adding/modifying props, events, or slots

### Testing Changes End-to-End

1. Make changes in `packages/bootstrap-vue-next/`
2. Run `pnpm --filter bootstrap-vue-next run build`
3. Test in playground: `pnpm --filter playground run dev`
4. Check real usage scenarios in the playground app

### Adding New Components

1. Create component in `packages/bootstrap-vue-next/src/components/`
2. Add to `packages/bootstrap-vue-next/src/components/index.ts`
3. Write tests following existing patterns (see `*.spec.ts` files)
4. Update type definitions if needed
5. **ALWAYS update documentation** in `apps/docs/src/data/components/*.data.ts` when:
   - Adding new props, events, or slots to existing components
   - Creating new components
   - Modifying component interfaces

### Working with Styles

- Main styles: `packages/bootstrap-vue-next/src/styles/styles.scss`
- Component styles are typically in the component `.vue` files
- Bootstrap 5.3.x is the base CSS framework

## Timing and Performance

### Command Timing (measured)

- `pnpm install --ignore-scripts --frozen-lockfile`: ~2 seconds
- `pnpm --filter bootstrap-vue-next run build`: ~27 seconds
- `pnpm --filter bootstrap-vue-next run test:unit:ci`: ~40 seconds (1567 tests)
- `pnpm --filter bootstrap-vue-next run test:lint`: ~12 seconds
- `pnpm --filter playground run build`: ~8 seconds
- `pnpm --filter @bootstrap-vue-next/nuxt run build`: ~25 seconds

### CRITICAL TIMEOUT WARNINGS

- **NEVER CANCEL** any build or test command
- Set timeouts to 60+ minutes for builds
- Set timeouts to 60+ minutes for test suites
- Builds may take longer in CI environments
- Test suites run 1500+ tests and require time

## Known Issues and Workarounds

### Network-Related Build Failures

- Docs build fails due to OpenCollective API calls: **EXPECTED**
- Use `pnpm install --ignore-scripts` to skip problematic prepare scripts
- Filter builds to specific packages to avoid docs: `pnpm --filter bootstrap-vue-next run build`

### Engine Version Warnings

- Repository requires Node.js >=22.0.0 but works with 20.x (shows warnings)
- Warnings are safe to ignore during development

### Generated Files

- `*.timestamp-*` files are generated and should be ignored (already in .gitignore)
- VitePress generates temporary data files during build

## Package Manager Rules

- **ONLY pnpm is allowed** - npm and yarn will cause errors
- Use exact version `pnpm@10.13.1` for consistency
- Always use `--frozen-lockfile` for reproducible installs
- Use workspace filters: `--filter <package-name>` for targeted operations

## Conventional Commits

- Use conventional commit format: `feat:`, `fix:`, `docs:`, etc.
- Required for automated changelog and releases
- Examples: `feat: add new button variant`, `fix: resolve modal focus issue`

## Testing Architecture

- Vitest for unit testing with Vue Test Utils
- 1567+ tests across components
- Coverage reports available via `pnpm --filter bootstrap-vue-next run test:coverage`
- Tests use Happy DOM environment for performance

## Documentation Examples

### Demo File Format

All demo files in `apps/docs/src/docs/*/demo/` must follow this structure:

1. **Order**: Template first, then script, then style (if applicable)
2. **Template-Only Examples**: For simple template-only examples wrap example code in `<!-- #region template -->` and `<!-- #endregion template -->` comments
3. **Complex Examples**: Include script setup after template, using TypeScript

**Template-only example:**

```vue
<template>
  <!-- #region template -->
  <BButton v-b-toggle.my-collapse>Toggle</BButton>
  <BCollapse id="my-collapse">
    <BCard>Content</BCard>
  </BCollapse>
  <!-- #endregion template -->
</template>
```

**Example with script:**

```vue
<template>
  <BButton @click="toggle">Toggle</BButton>
  <BCollapse v-model="visible">
    <BCard>Content</BCard>
  </BCollapse>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const visible = ref(false)
const toggle = () => {
  visible.value = !visible.value
}
</script>
```

### Demo References in Markdown

Use the `<<< DEMO` syntax to reference demo files:

- **Show full file**: `<<< DEMO ./demo/MyComponent.vue{vue}`
- **Show specific section**: Use `#region name` markers in the demo file and reference with `#name` in the markdown (e.g., `#region template` is referenced as `#template`)

### Demo File Guidelines

- Place demo files in `apps/docs/src/docs/[category]/demo/` directory
- Name files descriptively: `ComponentFeature.vue` (e.g., `AccordionOverview.vue`, `AlertDismissible.vue`)
- Use unique IDs for all components to avoid conflicts when multiple demos render on same page
- Keep examples focused on demonstrating one feature or pattern
- Include comments for clarity when showing complex patterns
