import { reactive, inject, App, InjectionKey } from 'vue';
import BreadcrumbItemObject from '@/types/BreadcrumbItemObject';

interface BreadcrumbI {
    items: BreadcrumbItemObject[],
    reset: () => BreadcrumbItemObject[],
}

const BREADCRUMB_SYMBOL: InjectionKey<BreadcrumbI> = Symbol();

export function createBreadcrumb(app: App) {
    let items = reactive<BreadcrumbItemObject[]>([]);
    const reset = () => items = reactive<BreadcrumbItemObject[]>([]);

    app.provide(BREADCRUMB_SYMBOL, {
        items,
        reset,
    });
}

export function useBreadcrumb() {
    const context = inject(BREADCRUMB_SYMBOL);
    
    if (!context) {
      return {
          items: [] as BreadcrumbItemObject[],
      };
    }
    
    return context;
}

