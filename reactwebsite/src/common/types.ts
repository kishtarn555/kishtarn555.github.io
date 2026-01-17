export type Work = {
    title: {
        "en": string;
        [key: string]: string;
    }
    description: {
        "en": string;
        [key: string]: string;
    }
    dimensions: [number, number];
    dimensionsUnit?: string;
    year?: number;
    price?: string;
    link?: string;
    imageUrl: string;
    previewUrl?: string;
    isBuyable: boolean;
    sold?: boolean;
}

export interface IRepresentationalProps {
    projects: Work[];
    selectedWork?: Work;
    setSelectedWork: React.Dispatch<React.SetStateAction<Work | undefined>>;
}