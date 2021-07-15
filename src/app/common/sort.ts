import { Items } from "../feature/e-commerce/items";

enum filterScale {
    LTH = 'LTH',
    HTL = "HTL",
    WithoutSorting = "SELECT"
}

export function sortList(value: string, list: any[]) {
    if (value === filterScale.LTH) {
        return list.sort((a: any, b: any) => { return a.price - b.price })
    }
    else if (value === filterScale.HTL) {
        return list.sort((a: any, b: any) => { return b.price - a.price })
    } else {
        return list;
    }
}


