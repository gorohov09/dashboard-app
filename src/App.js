import { TheHeader } from 'components/TheHeader';
import { useEffect } from 'react';

import data from './mock/data.json';
import { useDispatch } from 'react-redux';
import { addPositions } from 'features/positions/positions-slice';
import { FilterPanel } from 'features/filter/FilterPanel';
import { JobList } from 'features/positions/JobList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  }, [])

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
