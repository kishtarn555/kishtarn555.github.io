export type Work = {
    title: {
        "en": string;
        [key: string]: string;
    }
    description: {
        "en": string;
        [key: string]: string;
    }
    link?: string;
    imageUrl: string;
    previewUrl?: string;
}

export interface IRepresentationalProps {
    projects: Work[];
}