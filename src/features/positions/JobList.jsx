import { JobPosition } from './JobPosition';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisiblePositions } from './positions-slice';
import { addFilter, selectAllFilters } from 'features/filter/filter-slice';

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