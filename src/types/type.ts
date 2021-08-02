
export interface Istate {
    data: ICard[];
}

export interface Iclinician {
    id: string;
    name: string;
}

export interface ICard {
    id: string;
    startDate: string;
    endDate: string;
    clinicianName: string;
    patient: Iclinician;
    status: string;
}



