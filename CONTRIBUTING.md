# Contribution Workflow

## Use [Conventional Commit](https://www.conventionalcommits.org/) for Commit Messages

It is vital to use the conventional commit standard when writing your commit messages. If your commit contains many fixes or enhancements you can use footers, for example:

```txt
feat: adds v4 UUID to crypto

This adds support for v4 UUIDs to the library.

fix(utils): unicode no longer throws exception
  PiperOrigin-RevId: 345559154
  BREAKING-CHANGE: encode method no longer throws.
  Source-Link: googleapis/googleapis@5e0dcb2

feat(utils): update encode to support unicode
  PiperOrigin-RevId: 345559182
  Source-Link: googleapis/googleapis@e5eef86
```

Conventional commits are required for the automation of changelog and tag releases. Information on how to write commits can be found at <https://www.conventionalcommits.org/>. Additional information on how to do things like introduce multiple fixes in a single commit, or fixing release notes can be found at <https://github.com/googleapis/release-please#how-should-i-write-my-commits>

## Setting Up Your Workspace

Setting up your workspace follows traditional open-source flows, if you are already familiar with the process, you can most likely skip this section:

**Only pnpm is allowed**, attempting to run any other package manager tool will cause a warning error. View pnpm installation at <https://pnpm.io/installation>

1. Go to the <https://github.com/bootstrap-vue-next/bootstrap-vue-next>
2. Click **Fork** at the top
3. On your IDE of choice, clone your own, new, forked repository

This repository is where you will make your changes to. You can safely run `git push ...` and other commands in this repository

When opening your repository, it is usually best to open the **root** folder, not a subdirectory such as `./packages/bootstrap-vue-next`. Eslint rules can sometimes get lost when opening a subdirectory of a workspace. If you do not have the recommended IDE extensions, it will usually suggest that you install them, but this is technically optional. You can finally run at the root:

```bash
pnpm install
pnpm dev
```

Finally, after you have made sufficient changes and you are ready to publish your changes to the main repository, you will:

1. Go to your forked repository on <https://github.com/>
2. Switch to the correct branch that you have been working on, this is usually the `main` branch, for simplicity
3. Click the **Contribute** button near the top of the page
4. Click **Open pull request**

This will begin the process to merge your changes into the upstream repository's main branch

## Developing

The project uses a monorepo architecture. The main source files for the package exist in `./packages/bootstrap-vue-next`, this is primarily where developing is done. You can then run `pnpm dev` and it will start all possible development environments. When developing the main package, you will want to open the **bootstrap-vue-next:dev** host. This has hot-reloading to make developing easier. You can use the `./packages/bootstrap-vue-next/src/app.vue` file as a test area for any changes that you make.

You can also make use of the `./apps/playground` directory. The `./apps/playground` directory mimics a user's library and can demonstrate some bugs that may not be visible in the main package. However, it does not contain native hot-reloading and makes for a poor development experience since it requires a built dist copy of the main package (simply run `pnpm build`). The playground is not typically used for development. It is more of a place to view the full behavior of a component.

You can also use `pnpm dev --filter bootstrap-vue-next` to only open the main host.

## Improving the documentation

Improving the documentation is a great way to contribute to this project, especially if you're not quite ready to dive into the code.

We use [vitepress](https://vitepress.dev/) to build our documentation in the `./apps/docs` directory. In order to test the docs, first make sure that you follow the steps in [Setting up your workspace](#setting-up-your-workspace). Then you can run `pnpm dev` from the root and then open the **docs:dev** host. This will hot-reload the documentation to let you easily see your edits.

### Documentation File Structure

- **Markdown files** (`./apps/docs/src/docs/**/*.md`): Contains the main documentation content
- **Data files** (`./apps/docs/src/data/**/*.data.ts`): Contains component/composable/directive/configuration metadata used to auto-generate API reference tables

### Critical Documentation Conventions

Our documentation system relies on several conventions to automatically generate headers, footers, and API references. **You must follow these conventions** to ensure the documentation builds correctly:

#### 1. Frontmatter Requirements

**All documentation markdown files must include frontmatter** with a `description` field. This description is used in multiple places:

```yaml
---
description: A brief, clear description of what this component/composable/directive does
---
```

- The description should be concise (1-2 sentences)
- Use YAML folding syntax (`>`) for multi-line descriptions to avoid parsing issues:

```yaml
---
description: >
  This is a longer description that spans multiple lines.
  Use the > character to enable YAML folding syntax.
---
```

- **Never use multi-line quoted strings** in YAML frontmatter as they cause parsing issues

#### 2. Auto-Generated Headers and Footers

The documentation system **automatically injects** page headers and component reference footers.

The build system will:

- Auto-generate an `<h1>` title from the filename (e.g., `button-group.md` → "Button Group")
- Auto-inject a `<PageHeader />` component with description from frontmatter
- Auto-inject a `<ComponentReference />` footer for component docs (if a corresponding `.data.ts` file exists)

If you need to add a `<style>` section to a markdown file, place it at the end. The system will correctly insert the `<ComponentReference>` footer before any `<style>` sections.

#### 3. Component Data File Conventions

When creating or modifying `.data.ts` files in `./apps/docs/src/data/components/`, follow these conventions:

**Component Ordering:** The **first component** in the exported object determines the base directory for sourcePath inference:

```typescript
export default {
  load: (): ComponentReference => ({
    // ✅ CORRECT: Primary component listed first
    BTabs: {
      // This will use /BTabs/BTabs.vue as the source
      props: {
        /* ... */
      },
    },
    BTab: {
      // This will use /BTabs/BTab.vue as the source
      props: {
        /* ... */
      },
    },
  }),
}
```

```typescript
export default {
  load: (): ComponentReference => ({
    // ❌ INCORRECT: Secondary component listed first
    BTab: {
      props: {
        /* ... */
      },
    },
    BTabs: {
      props: {
        /* ... */
      },
    },
  }),
}
```

The first component name (e.g., `BTabs`) must match the directory name in `./packages/bootstrap-vue-next/src/components/`.

**Special Cases:** If a component lives in a parent directory (e.g., `BButtonGroup` in `/BButton/`), add an explicit `sourcePath`:

```typescript
BButtonGroup: {
  sourcePath: '/BButton/BButtonGroup.vue',
  props: { /* ... */ },
}
```

**TypeScript Slot Types:** Ensure you use the correct TypeScript slot type for each component:

```typescript
BTabs: {
  slots: {
    default: { description: '...' },
  } satisfies SlotRecord<keyof BTabsSlots>,  // ✅ Use BTabsSlots for BTabs
},
BTab: {
  slots: {
    default: { description: '...' },
  } satisfies SlotRecord<keyof BTabSlots>,   // ✅ Use BTabSlots for BTab
}
```

#### 4. Data Loaders

Data loaders in `./apps/docs/src/data/` automatically extract frontmatter and transform data for the build system. When adding new documentation types, ensure a corresponding data loader exists that:

1. Uses `createContentLoader()` to read markdown files
2. Extracts frontmatter using the `yaml` package
3. Transforms data using shared utilities from `./apps/docs/src/utils/dataLoaderUtils.ts`

#### 5. Testing Your Documentation Changes

Before submitting a PR with documentation changes:

1. Run `pnpm --filter docs run build` to ensure the build succeeds
2. Run `pnpm --filter docs run dev` to verify the output visually
3. Check that all auto-generated elements appear correctly:
   - Page titles match the filename
   - PageHeader shows the correct description
   - ComponentReference footer appears with correct GitHub links
4. Verify no duplicate headers or footers appear

## Help Verify BootstrapVue and Bootstrap v5 Parity

Evaluating parity is another great way to contribute to this project, especially if you're not quite ready to dive into the code.

As we close in on a v1 of bootstrap-vue-next, we would like to verify our feature parity with both
[bootstrap-vue](https://bootstrap-vue.github.io/bootstrap-vue/) and [Bootstrap v5](https://getbootstrap.com/).

This verification requires that someone take a close look at the documentation for both of the parity
systems and the code and documentation for bootstrap-vue-next to evaluate feature parity. We're using a
spreadsheet to track the fine grained assessment, and anyone who consumes bootstrap-vue(-next) should
be able to do the first pass evaluation of a component.

Note: The parity report is a work in progress and is lagging well behind the actual state of bootstrap-vue-next.
Please don't use it as a measure of the current status of the project yet. When the parity report is at parity with the project,
we'll remove this note.

To contribute:

- Take a look at the read-only version of the spreadsheet, available [here](https://1drv.ms/x/s!AiUqzkjNYGL6ieBPpQpcR41wo1laZQ). You can filter on `BFormCheckbox` and `BFormCheckboxGroup` in the `Component` column to see an example of components that are being evaluated and just about anything else to see the initial state.
- Read through the `Instructions` tab of the spreadsheet, which provides a suggested process to verify a component.
- Once you're satisfied that you understand the process, request access to the [read/write version of the spreadsheet](https://1drv.ms/x/s!AiUqzkjNYGL6ieBPJZV0b2mgOVgnYw) on the [bootstrap-vue-next channel of the BootstrapVue discord server](https://discord.gg/pE875sZP).
- Evaluate a component (or two), update the spreadsheet, and get us one step closer to v1!

More context is available in the comments for [this issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1775).

## Registering New Components

For adding a new component, there are some notes...

- They should only exist in the `./packages/bootstrap-vue-next/src/components` directory
- You should first review the `./packages/bootstrap-vue-next/src/types` directory and get familiar with the internal types that you can use
- They should follow `<script setup lang="ts">` syntax, to ensure uniformity, there are _some_ exceptions to this rule regarding Vue SFC being unable to import or extend types
- If the component is a native [Bootstrap](https://getbootstrap.com/) component, you will need to read about that component and have a thorough understanding of how it works and appears
- If the component is custom, or taken from [Bootstrap-vue](https://bootstrap-vue.github.io/bootstrap-vue/) you will need to read the component documentation, then attempt to recreate that component using `<template>` and `<script setup lang="ts">` syntax. If a Bootstrap-vue component is based on a native Bootstrap component, then you should read Bootstrap's implementation first, and ensure any changes are made to correct for the v5 release of Bootstrap
- All Props and Emits should be fully written as TypeScript interfaces, the more strongly typed, the better

### Registering the Component for Export

After the implementation of the component, based on Bootstrap's details, you can finally begin introducing the component to be exported by the main package, and usable by users of the library. To do that you will need to:

1. Add the component to the import/export list, located in `./packages/bootstrap-vue-next/src/components/index.ts`
2. Next, it must be imported into `./packages/bootstrap-vue-next/BootstrapVue.ts` _please ensure that your import is made directly to the component, and not to the previous index.ts file_
3. After that, export it in the `export {}` list that contains the other components to be exported
4. Finally, it must be included in the exported interface of **GlobalComponents**, following the pattern of `BComponent: typeof BComponent`

### Creating Component Documentation

After registering the component, you must create documentation for it. This involves two files:

#### 1. Create the Data File (`./apps/docs/src/data/components/[name].data.ts`)

This file defines the component's props, emits, and slots for the API reference. **Follow these critical conventions:**

**Component Ordering:** List the **primary component first**. The first component name determines the source directory:

```typescript
import type {BMyComponentProps, BMyComponentEmits, BMyComponentSlots} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  type PropRecord,
  type EmitRecord,
  type SlotRecord,
} from '../../types'

export default {
  load: (): ComponentReference => ({
    // ✅ Primary component first - determines base directory
    BMyComponent: {
      props: {
        // Define all props with type, default, and description
        variant: {
          type: 'ColorVariant',
          default: 'primary',
          description: 'The color variant to apply',
        },
      } satisfies PropRecord<keyof BMyComponentProps>,
      emits: {
        // Define all emits with description and args
        click: {
          description: 'Emitted when the component is clicked',
          args: {
            event: {
              type: 'MouseEvent',
              description: 'The native click event',
            },
          },
        },
      } satisfies EmitRecord<keyof BMyComponentEmits>,
      slots: {
        // Define all slots with description
        default: {
          description: 'The default slot content',
        },
      } satisfies SlotRecord<keyof BMyComponentSlots>,
    },
  }),
}
```

**Important Notes:**

- The filename should match the primary component in kebab-case (e.g., `my-component.data.ts` for `BMyComponent`)
- If you have multiple related components (e.g., `BTabs` and `BTab`), list the primary one first
- The first component name must match a directory in `./packages/bootstrap-vue-next/src/components/`
- If a secondary component is in a different directory, add `sourcePath: '/BParentDir/BSecondaryComponent.vue'`
- Use TypeScript `satisfies` to ensure type safety for props, emits, and slots

#### 2. Create the Markdown File (`./apps/docs/src/docs/components/[name].md`)

This file contains the human-readable documentation. **Follow these critical conventions:**

```markdown
---
description: A clear, concise description of what the component does
---

<!-- DO NOT add <PageHeader /> or <ComponentReference /> - they are auto-injected -->
<!-- DO NOT add # Title header - it's auto-generated from filename -->

## Overview

Describe the component's purpose and basic usage.

<< Include an Example >>>

## Feature 1

## Feature 2

## Complete example

if appropriate

<!-- ComponentReference is auto-injected here -->
```

**Important Notes:**

- **Always include frontmatter** with a `description` field
- Use YAML folding syntax (`description: >`) for multi-line descriptions
- **Never manually add** `<PageHeader />`, `<ComponentReference />`, or `# Title` headers
- The filename determines the page title (e.g., `my-component.md` → "My Component")
- The ComponentReference footer is auto-injected and will show the API reference from the `.data.ts` file

#### 3. Verify Your Documentation

Before submitting:

```bash
# Build the docs to check for errors
pnpm --filter docs run build

# View the docs locally
pnpm --filter docs run dev
```

Verify:

- The page title appears correctly
- The description shows in the PageHeader
- The ComponentReference footer appears with correct GitHub source links
- No duplicate headers or footers are present

That is it!

## Fixing or Adding Features to Components

To fix an already made component, or to add a new feature to a component is a bit easier. You will need to identify a need for the fix, understand the file in question, then apply the change. It is not as complex as making an entirely new component. After you are finished with your change and are making a pull request, it can sometimes be very beneficial to include a code reproduction that shows the changes visually but is not required

## Ask for Help

Working on the app is not a solo job. It is always fine to ask how something should be done, or how something can be improved. Ask for help when you are stuck!

## Safety Information

In general, always be careful when clicking external links. As programmers, it should be obvious that any links opened should be scanned for authenticity. No malicious intent has ever been found anywhere in the documentation, issues, or pull requests, but always be aware. If you have noticed anything that may be malicious in this repository, open an issue **immediately**. At this time, the repository does not have a dedicated security policy

## For Collaborators: Making a New Release

Bootstrap Vue 3 uses <https://github.com/googleapis/release-please> to automate releases using workflows. The `.github/workflows/release-please.yaml` workflow will auto-generate releases when using conventional commits. We encourage all commit messages to follow conventional commit guidelines to keep commits clean and automate releases

The workflow `.github/workflows/npm-publish.yaml` will then auto-publish at <https://www.npmjs.com/package/bootstrap-vue-next>

## For Collaborators: Manual Releases

One could also manually create a release PR using the CLI, directions at <https://github.com/googleapis/release-please/blob/main/docs/cli.md#running-release-please-cli>. Follow the directions for bootstrapping and creating a release, then it will auto-generate a PR containing the new release notes

It will then auto-publish as stated before

Collaborators can also manually release by:

increase version in package.json, commit
<https://github.com/bootstrap-vue-next/bootstrap-vue-next/releases/new> (create new tag)
