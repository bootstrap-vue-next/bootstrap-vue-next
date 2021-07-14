import { Plugin, App } from 'vue';
import Components from './components';
import Directives from './directives';
import { BootstrapVueOptions } from './types';
import { createBreadcrumb } from './composables/useBreadcrumb';

const plugin: Plugin = {
    install(app: App, options: BootstrapVueOptions = {}) {
        Object.entries(Components).forEach(([name, component]) => {
            app.component(name, component)
        })

        Object.entries(Directives).forEach(([name, component]) => {
            app.directive(name, component)
        })

        createBreadcrumb(app);
    }
}

export default plugin;
