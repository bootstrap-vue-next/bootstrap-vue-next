# Contribution workflow

## Setting up your workspace

Setting up your workspace is simple and follows other open-source rules, if you are new and unfamiliar with the flow: Fork the repository, then git clone your own repository. You can make any changes you want to in this repository of yours. You can commit and push changes without any changes to the main package. After you have pushed changes up to GitHub in your own repository, visit your GitHub's repository, there should be a notification at the top saying changes have been made, you can click that prompt, or the "Contribute" button and open a pull request to the main package. This pull request, if merged, will affect the main package at this point. **Please use [conventional commit](https://www.conventionalcommits.org/) messages**

## Registering new components

For adding a new component, the general workflow is to add the new component in the ./packages/bootstrap-vue-3/src/components dir. They should follow the same `<script setup>` syntax as other components, with props and emits strongly typed as pure Typescript interfaces. For building the component, it's relatively simple, you're not reinventing the wheel. A first place to start with gathering information on props/etc, is to check <https://bootstrap-vue.org/> on their implementation of the component. Since some features may have changed, after an initial "copy" of their props and features, you would like to then check <https://getbootstrap.com/> to see if anything has changed. This is where the bulk of the research is done, because it requires a bit of knowledge about how their components work. In general, most components are just some div's with some classes, some slots, and some props. Simply copy the classes directly from bootstrap's website, as they will work automatically, no sass required. Some notes:

* Preferably, a copy of the props and emits interfaces also exist in the ./packages/bootstrap-vue-3/src/types/components directory. This is in anticipation for when (hopefully) Vue's compiler can scrub and use external interfaces for props and emits.
* It is beneficial for when building a new component, to create your own tests. It takes longer to develop, but as the author you should generally know your component the best.
* Become familiar with the ./packages/bootstrap-vue-3/src/types files in the library. If a type is the same, it is great to have it stored in one place. The more strongly-typed code we can get, the better.

After a component is finished, there are two places where it needs to be exposed in order for users of the library to use it

1. Add it to the import/export list in ./packages/bootstrap-vue-3/src/components/index.ts
2. Next, it must be also imported/exported from ./packages/bootstrap-vue-3/BootstrapVue.ts. This ensures that it is able to be used by the user.
3. In addition to exporting it from ./packages/bootstrap-vue-3/BootstrapVue.ts, you need to add the component into the "GlobalComponents" Typescript interface in that file. This ensures users get proper intellisense when using the component. This should be self explanitory on how to do when you read the file.

## Fixing old components

Significantly easier, is fixing bugs on other people's components. They are generally fairly small fixes requiring little code. Fix the component, make a test to ensure it doesn't happen again, then PR it.

## Developing

The project uses a monorepo architecture. The main source files for the package exist in ./packages/bootstrap-vue-3, but for ease of use, there is a test playground in ./apps/playground. This is where you can test out your Vue code, as it mimics using the library just as a user would.

## Ask for help

Working on the app is not a solo job. It is always fine to ask on how something should be done, or how something can be improved. Ask for help when you're stuck!
