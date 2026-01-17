import { Work } from "../../../common/types";

export interface IRepresentationalProps {
    projects: Work[];
    selectedWork?: Work;
    setSelectedWork: React.Dispatch<React.SetStateAction<Work | undefined>>;
}