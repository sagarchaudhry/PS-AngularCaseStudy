import { Items } from "../feature/e-commerce/items";

enum filterScale {
    LTH = 'LTH',
    HTL = "HTL",
    WithoutSorting = "SELECT"
}

export function sortList(value: string, list: any[], column: string) {
    if (value === filterScale.LTH) {
        return list.sort((a: any, b: any) => { return a[column] - b[column] })
    }
    else if (value === filterScale.HTL) {
        return list.sort((a: any, b: any) => { return b[column] - a[column] })
    } else {
        return list;
    }
}


