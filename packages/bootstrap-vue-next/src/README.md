# README

## File Structure Overview

### Private Files

- **Root level files**: These files are intended for private use and are not exported from the library.

### Public Files

- **Nested folder files**: Files within nested folders are considered public and are exported from the library.

### Examples

- **Private File**: `./src/components/BCardHeadFoot.vue` is a private file and is not exported from the library.
- **Public File**: `./src/components/BTooltip/BTooltip.vue` is a public file and is exported to users.

### Special Cases

- **Index Files**: Some folders export their `index.ts` file, such as `./src/resolvers/index.ts`. This is typically done when:
  - The folder contains a single, neatly organized file.
  - The general use of the folder is private, and most files within it are private (e.g., utils, types).

The vite build process reads nested directories and exports them as individual entrypoints
