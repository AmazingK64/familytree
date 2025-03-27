export interface Person {
    id: string;
    name: string;
    info: string;
    birthYear?: number;
    deathYear?: number;
    spouse?: string;
    children?: Person[];
    fatherId?: string;
    motherId?: string;
}

export interface Generation {
    title: string;
    people: Person[];
}

export interface FamilyData {
    generations: Generation[];
}
