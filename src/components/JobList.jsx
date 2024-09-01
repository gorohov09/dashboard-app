import { selectVisiblePositions } from 'store/positions/position-selectors';
import { JobPosition } from './JobPosition';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllFilters } from 'store/filters/filters-selectors';
import { addFilter } from 'store/filters/filters-actions';

const JobList = () => {
  const filters = useSelector(selectAllFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, filters));
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} addFilter={handleAddFilter}/>
      ))}
    </div>
  )
}

export {JobList};