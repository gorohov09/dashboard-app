import { useSelector } from "react-redux";
import { selectVisiblePositions } from "./positions-slice";
import { selectAllFilters } from "features/filter/filter-slice";

export const usePositions = () => {
    const filters = useSelector(selectAllFilters);
    const positions = useSelector((state) => selectVisiblePositions(state, filters));

    return positions;
}