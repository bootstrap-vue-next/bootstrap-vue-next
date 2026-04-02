// @ts-nocheck
// #region snippet
// vitest.setup.ts (or in your test config)
import {config} from '@vue/test-utils'
import {createBootstrap} from 'bootstrap-vue-next'

config.global.plugins = [createBootstrap()]
// #endregion snippet
