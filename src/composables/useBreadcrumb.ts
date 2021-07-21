import { reactive, inject, App, InjectionKey } from 'vue';
import BreadcrumbItem from '../types/BreadcrumbItem';

interface UseBreadcrumbI {
    items: BreadcrumbItem[],
    reset: () => BreadcrumbItem[],
}

const BREADCRUMB_SYMBOL: InjectionKey<UseBreadcrumbI> = Symbol();

export function createBreadcrumb(app: App) {
    let items = reactive<BreadcrumbItem[]>([]);
    const reset = () => items = reactive<BreadcrumbItem[]>([]);

    app.provide(BREADCRUMB_SYMBOL, {
        items,
        reset,
    });
}

export function useBreadcrumb() {
    const context = inject(BREADCRUMB_SYMBOL);
    
    if (!context) {
      return {
          items: [] as BreadcrumbItem[],
      };
    }
    
    return context;
}

