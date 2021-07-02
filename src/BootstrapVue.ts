import { Plugin, App } from 'vue';
import Components from './components';
import Directives from './directives';
import { BootstrapVueOptions } from './types';

const plugin: Plugin = {
    install(app: App, options: BootstrapVueOptions = {}) {
        Object.entries(Components).forEach(([name, component]) => {
            app.component(name, component)
        })

        Object.entries(Directives).forEach(([name, component]) => {
            app.directive(name, component)
        })

    }
}

export default plugin;