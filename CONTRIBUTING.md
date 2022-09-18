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

1. Go to the <https://github.com/cdmoro/bootstrap-vue-3>
2. Click **Fork** at the top
3. On your IDE of choice, clone your own, new, forked repository

This repository is where you will make your changes to. You can safely run `git push ...` and other commands in this repository

When opening your repository, it is usually best to open the **root** folder, not a subdirectory such as `./packages/bootstrap-vue-3`. Eslint rules can sometimes get lost when opening a subdirectory of a workspace. If you do not have the recommended IDE extensions, it will usually suggest that you install them, but this is technically optional. You can finally run at the root:

```bash
pnpm install
pnpm dev
```

**Only pnpm is allowed**, attempting to run any other package manager tool will cause a warning error. View pnpm installation at <https://pnpm.io/installation>

Finally, after you have made sufficient changes and you are ready to publish your changes to the main repository, you will:

1. Go to your forked repository on <https://github.com/>
2. Switch to the correct branch that you have been working on, this is usually the `main` branch, for simplicity
3. Click the **Contribute** button near the top of the page
4. Click **Open pull request**

This will begin the process to merge your changes into the upstream repository's main branch

## Developing

The project uses a monorepo architecture. The main source files for the package exist in `./packages/bootstrap-vue-3`, this is primarily where developing is done. You can then run `pnpm dev` and it will start all possible development environments. When developing the main package, you will want to open the **bootstrap-vue-3:dev** host. This has hot-reloading to make developing easier. You can use the `./packages/bootstrap-vue-3/src/app.vue` file as a test area for any changes that you make

You can also make use of the `./apps/playground` directory. The `./apps/playground` directory mimics a user's library and can demonstrate some bugs that may not be visible in the main package. However, it does not contain native hot-reloading and makes for a poor development experience since it requires a built dist copy of the main package (simply run `pnpm build`). The playground is not typically used for development. It is more of a place to view the full behavior of a component

You can also use `pnpm dev --filter bootstrap-vue-3` to only open the main host

## Registering New Components

For adding a new component, there are some notes...

* They should only exist in the `./packages/bootstrap-vue-3/src/components` directory
* You should first review the `./packages/bootstrap-vue-3/src/types` directory and get familiar with the internal types that you can use
* They should follow `<script setup lang="ts">` syntax, to ensure uniformity, there are *some* exceptions to this rule regarding Vue SFC being unable to import or extend types
* If the component is a native [Bootstrap](https://getbootstrap.com/) component, you will need to read about that component and have a thorough understanding of how it works and appears
* If the component is custom, or taken from [Bootstrap-vue](https://bootstrap-vue.org/) you will need to read the component documentation, then attempt to recreate that component using `<template>` and `<script setup lang="ts">` syntax. If a Bootstrap-vue component is based on a native Bootstrap component, then you should read Bootstrap's implementation first, and ensure any changes are made to correct for the v5 release of Bootstrap
* All Props and Emits should be fully written as TypeScript interfaces, the more strongly typed, the better

After the implementation of the component, based on Bootstrap's details, you can finally begin introducing the component to be exported by the main package, and usable by users of the library. To do that you will need to:

1. Add the component to the import/export list, located in `./packages/bootstrap-vue-3/src/components/index.ts`
2. Next, it must be imported into `./packages/bootstrap-vue-3/BootstrapVue.ts` *please ensure that your import is made directly to the component, and not to the previous index.ts file*
3. After that, export it in the `export {}` list that contains the other components to be exported
4. Finally, it must be included in the exported interface of **GlobalComponents**, following the pattern of `BComponent: typeof BComponent`

That is it!

## Fixing or Adding Features to Components

To fix an already made component, or to add a new feature to a component is a bit easier. You will need to identify a need for the fix, understand the file in question, then apply the change. It is not as complex as making an entirely new component. After you are finished with your change and are making a pull request, it can sometimes be very beneficial to include a code reproduction that shows the changes visually but is not required

## Ask for Help

Working on the app is not a solo job. It is always fine to ask how something should be done, or how something can be improved. Ask for help when you are stuck!

## Safety Information

In general, always be careful when clicking external links. As programmers, it should be obvious that any links opened should be scanned for authenticity. No malicious intent has ever been found anywhere in the documentation, issues, or pull requests, but always be aware. If you have noticed anything that may be malicious in this repository, open an issue **immediately**. At this time, the repository does not have a dedicated security policy

## For Collaborators: Making a New Release

Bootstrap Vue 3 uses <https://github.com/googleapis/release-please> to automate releases using workflows. The `.github/workflows/release-please.yaml` workflow will auto-generate releases when using conventional commits. We encourage all commit messages to follow conventional commit guidelines to keep commits clean and automate releases

The workflow `.github/workflows/npm-publish.yaml` will then auto-publish at <https://www.npmjs.com/package/bootstrap-vue-3>

## For Collaborators: Manual Releases

One could also manually create a release PR using the CLI, directions at <https://github.com/googleapis/release-please/blob/main/docs/cli.md#running-release-please-cli>. Follow the directions for bootstrapping and creating a release, then it will auto-generate a PR containing the new release notes

It will then auto-publish as stated before

Collaborators can also manually release by:

increase version in package.json, commit
<https://github.com/cdmoro/bootstrap-vue-3/releases/new> (create new tag)
