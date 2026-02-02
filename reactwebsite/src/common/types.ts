export type Translatable = {
    "en": string;
    [key: string]: string;
};

export type Work = {
    title: Translatable
    description: Translatable
    dimensions: [number, number];
    technique: Translatable;
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