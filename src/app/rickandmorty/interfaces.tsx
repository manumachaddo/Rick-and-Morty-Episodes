export interface BaseSearchResponde <T> {
    info: Info;
    results: T[];
}

export interface Info {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string;
    url: string;
    created: string;
}