import { SortType } from "./sortType.modal";

export function sortMethod(column: string, type: any) {
    return (a: any, b: any) => {
        if (type === SortType.ASC) {
            if (a[column] < b[column]) {
                return -1;
            }
        }
        else if (type === SortType.DESC) {
            if (a[column] > b[column]) {
                return -1;
            }
        }
        return 0;
    }
}


