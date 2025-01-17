import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="filter-buttons">
      <button
        className={currentFilter === 'SHOW_ALL' ? 'active' : ''}
        onClick={() => handleFilterChange('SHOW_ALL')}
      >
        Show All
      </button>
      <button
        className={currentFilter === 'SHOW_COMPLETED' ? 'active' : ''}
        onClick={() => handleFilterChange('SHOW_COMPLETED')}
      >
        Show Completed
      </button>
      <button
        className={currentFilter === 'SHOW_INCOMPLETE' ? 'active' : ''}
        onClick={() => handleFilterChange('SHOW_INCOMPLETE')}
      >
        Show Incomplete
      </button>
    </div>
  );
};

export default FilterButtons;
