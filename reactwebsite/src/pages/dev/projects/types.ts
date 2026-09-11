export type Project = {
    title: string;
    description: {
        "en": string;
        [key: string]: string;
    }
    links? : {
        url: string;
        icon?: string
        label: {
            "en": string;
            [key: string]: string;
        }
    }[]
    imageUrl?: string;
}

export interface IRepresentationalProps {
    projects: Project[];
}