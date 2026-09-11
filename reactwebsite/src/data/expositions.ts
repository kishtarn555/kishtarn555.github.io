import { Exposition, Location } from "../common/types";

const SAMO:Location = {
    label: {en: "Samö Cafeart, León, Gto, MX"},
    url: "https://www.instagram.com/samo.cafeart/"
}
const CasaOlinka:Location = {
    label: {en: "Casa Olinka, Puebla, Pue, MX"},
    url: "https://www.instagram.com/casaolinka/"
}
export const SombrasDeKishtarn: Exposition = {
    title: {
        en: "Sombras de Kishtarn (Kishtarn's shadows)",
        es: "Sombras de Kishtarn",
        ja: "Sombras de Kishtarn (Kishtarnの影)"
    },
    description: {
        en: "Hector Ricardez's first solo exposition, exploring the forms, light, and shadows between the mystical and the everyday.",
        es: "La primera exposición individual de Héctor Ricárdez, que explora las formas, la luz y las sombras entre lo místico y lo cotidiano.",
        ja: "エクトル・リカルデスによる初個展。神秘的なものと日常の間にある形、光、影を探ります。"
    },
    date: {
        en: "January, 2026",
        es: "Enero de 2026",
        ja: "2026年1月"
    },
    url: "/events/sombras",
    location: SAMO,
};

export const BlackMarket: Exposition = {
    title: {
        en: "Black market Vol 3",
        es: "Black market Vol 3",
        ja: "Black market Vol 3"
    },
    description: {
        en: "Collective Expo sale of 60+ artists.",
        es: "Collective Expo venta de más de 60 artistas.",
        ja: "Casa Olinka, Pueblaに60人以上の展示。"
    },
    date: {
        en: "December, 2025",
        es: "Diciembre de 2025",
        ja: "2025年12月"
    },
    url: "https://www.instagram.com/p/DSFpHJZjbql/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    location: CasaOlinka
};

export const Umbral: Exposition = {
    title: {
        en: "Umbral",
        es: "Umbral",
        ja: "Umbral"
    },
    description: {
        en: "Collective exposition",
        es: "Exposición colectiva.",
        ja: "複数人の展示。"
    },
    date: {
        en: "November, 2025",
        es: "Noviembre de 2025",
        ja: "2025年11月"
    },
    location: SAMO

};
export const EXPOSITIONS: Exposition[] = [SombrasDeKishtarn, BlackMarket, Umbral];