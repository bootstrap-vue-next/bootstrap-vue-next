interface TableFieldObject {
    key: string,
    label?: string,
    headerTitle?: string,
    headerAbbr?: string,
    class?: string | string[],
    formatter: string | ((value: string, key?: string, item?: any[]) => string),
    sortable?: boolean,
    sortKey?: string,
    sortDirection?: string,
    sortByFormatted?: boolean,
    filterByFormatted?: boolean,
    tdClass?: string,
    thStyle?: object,
    variant?: string,
    tdAttr: object,
    thAttr: object,
    isRowHeader: boolean,
    stickyColumn: boolean
}

type TableField = string | TableFieldObject;

export default TableField;