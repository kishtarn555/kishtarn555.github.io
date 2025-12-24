export type Project = {
    title: string;
    description: string;
    link: string;
    imageUrl?: string;
}

export interface IRepresentationalProps {
    projects: Project[];
}