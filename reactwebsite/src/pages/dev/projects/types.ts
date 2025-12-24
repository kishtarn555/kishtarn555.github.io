export type Project = {
    title: string;
    description: {
        "en": string;
        [key: string]: string;
    }
    link?: string;
    imageUrl?: string;
}

export interface IRepresentationalProps {
    projects: Project[];
}