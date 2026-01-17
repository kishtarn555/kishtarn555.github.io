import { Work } from "../../../common/types";

export interface IRepresentationalProps {
    projects: Work[];
    selectedWork: Work | null;
    setSelectedWork: React.Dispatch<React.SetStateAction<Work | null>>;
}