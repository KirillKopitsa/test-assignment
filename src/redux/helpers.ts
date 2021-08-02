import {ICard} from "../types/type";

export const sortByDate = (data: ICard[], sortVariant: string) => {
    if (sortVariant === 'date') {
        return data.sort((a: ICard, b: ICard) => {
            const dataA: Date = new Date(a.startDate);
            const dataB: Date = new Date(b.startDate);
            return dataA - dataB
        });
    }
    if (sortVariant === 'name') {
        return data.sort((a, b) => a.patient.name.localeCompare(b.patient.name));
    }
    return;
}