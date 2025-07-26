import {type Plugin} from 'vue'
import {globalShowHideStorageInjectionKey} from '../../utils/keys'
import {_newShowHideRegistry} from '../../composables/useRoot'
export const showHidePlugin: Plugin = {
  install(app) {
    const {register, values} = _newShowHideRegistry()

    app.provide(globalShowHideStorageInjectionKey, {register, values})
  },
}
