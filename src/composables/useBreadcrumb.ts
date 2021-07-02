import { reactive, inject, App } from 'vue';
import BreadcrumbItemObject from '@/types/BreadcrumbItemObject';

const BREADCRUMB_SYMBOL = Symbol();

interface BreadcrumbI {
    items: BreadcrumbItemObject[],
}

export function createBreadcrumb(app: App) {
    let items = reactive<BreadcrumbItemObject[]>([]);
    const reset = () => items = reactive<BreadcrumbItemObject[]>([]);

    app.provide(BREADCRUMB_SYMBOL, {
        items,
        reset,
    });
}

export function useBreadcrumb() {
    const context = inject<BreadcrumbI>(BREADCRUMB_SYMBOL);
    
    if (!context) {
      return {
          items: [],
      };
    }
    
    return context;
}

