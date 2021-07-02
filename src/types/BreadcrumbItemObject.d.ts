interface BreadcrumbItemObject {
    active?: boolean,
    href?: string,
    text: string,
    disabled?: boolean,
    to?: string | Record<string, any>
}

export default BreadcrumbItemObject;