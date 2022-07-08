<p align="center">
  <a href="https://cdmoro.github.io/bootstrap-vue-3/">
    <img src="https://raw.githubusercontent.com/cdmoro/bootstrap-vue-3/main/static/logo.png" width="300">
  </a>
</p>

<h1 align="center">BootstrapVue 3</h1>
<p align="center">Early (but lovely) implementation of Vue 3, Bootstrap 5 and Typescript</p>

<br>

<p align="center">
  <a href="https://www.npmjs.com/package/bootstrap-vue-3">
    <img src="https://flat.badgen.net/npm/v/bootstrap-vue-3" alt="Current version">
  </a>
  <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
    <img src="https://flat.badgen.net/badge/bootstrap/5.0.x/563d7c" alt="Bootstrap version">
  </a>
  <a href="https://v3.vuejs.org/">
    <img src="https://flat.badgen.net/badge/vue.js/3.0.x/4fc08d" alt="Vue.js version">
  </a>

  <a href="https://github.com/cdmoro/bootstrap-vue-3/actions?workflow=Tests">
    <img src="https://flat.badgen.net/github/status/cdmoro/bootstrap-vue-3" alt="Build status">
  </a>

  <br>

  <a href="https://www.npmjs.com/package/bootstrap-vue-3">
    <img src="https://flat.badgen.net/npm/dt/bootstrap-vue-3" alt="npm downloads">
  </a>
  <a href="https://www.npmjs.com/package/bootstrap-vue-3">
    <img src="https://flat.badgen.net/npm/dw/bootstrap-vue-3" alt="npm weekly downloads">
  </a>
</p>

# Why BootstrapVue3?

BootstrapVue3 is an attempt to have [BootstrapVue](https://bootstrap-vue.org/) components in Vue3, Bootstrap 5, and typescript. Another goal is to have components written in a simple and readable way.

As you may suppose, this library is heavily inspired by **BootstrapVue**, as well as the components properties, events, slots, directives, etc. We want to make it that way because we want to have compatibility with **BootstrapVue**, so it will be easy to switch between libraries.

# Install

```console
# NPM
npm i --save bootstrap bootstrap-vue-3

# Yarn
yarn add bootstrap bootstrap-vue-3
```

# Contribute & support 🙌

This project is still in **alpha version** so there is a lot of work to do. If you want to contribute you can:

- submit an [issue](https://github.com/cdmoro/bootstrap-vue-3/issues/new)
- or better, a [pull request](https://github.com/cdmoro/bootstrap-vue-3/pulls)
- or even better, visit [my patreon page](https://patreon.com/cdmoro) and support me 😄

## One-time donations

Or if you prefer you can make a one-time donation through these channels:

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/cdmoro)
[![Invitame un café en cafecito.app](https://cdn.cafecito.app/imgs/buttons/button_2.svg)](https://cafecito.app/cdmoro)

# Links

- :blue_book: [Documentation](https://cdmoro.github.io/bootstrap-vue-3/)

# License

Released under the MIT [Licence](./LICENSE). Copyright (c) BootstrapVue3.

# Making a new release

`.github/workflows/release-please.yml` will auto generate releases. Googleapi states `creates a release pull request after it notices the default branch contains "releasable units"` -- one who's commit follows conventional commits guidelines. You may have noticed that https://github.com/cdmoro/bootstrap-vue-3/pull/443 did not come with a bot release, but https://github.com/cdmoro/bootstrap-vue-3/pull/445 did. I also think the bot would rebase and merge two of it's own release PR requests keeping it's own prs clean.

`.github/workflows/npm-publish.yml` run when a release is created and will auto-publish at https://www.npmjs.com/package/bootstrap-vue-3

## Manual releases

One could however, remove the bot automation and use https://github.com/googleapis/release-please/blob/main/docs/cli.md#creatingupdating-release-prs for manually (but auto generating) creating a release PR. If you feel manually releasing is preferable, simply remove the workflow. You would need to manually configure a few things to get the release-please cli to work, but once figured out it should be fairly easy to create new releases.

Another way to manual release:

1. increase version in `package.json`, commit
2. https://github.com/cdmoro/bootstrap-vue-3/releases/new (create new tag)

TODO: publish runs 2 times
