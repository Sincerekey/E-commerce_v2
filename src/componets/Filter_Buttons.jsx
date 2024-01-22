import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFilterAltOff } from 'react-icons/md';
import { FaFilter } from "react-icons/fa";


function Filter_Buttons() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div id='filterSet'>
      {showFilters && (
         <div className={`filterOptions ${showFilters ? 'visible' : ''}`}>
         <Link to='/NonDestructive'>
           <button className='filterButton'>NonDestructive</button>
         </Link>
         <Link to='/Sales'>
           <button className='filterButton'>Sales</button>
         </Link>
         <Link to='/Destructive'>
           <button className='filterButton'>Destructive</button>
         </Link>
         <Link to='/Low_to_High'>
           <button className='filterButton'>Low to High</button>
         </Link>
         <Link to='/High_to_Low'>
           <button className='filterButton'>High to Low</button>
         </Link>
       </div>
      )}
      <button className='filterButton' onClick={toggleFilters}>
        {showFilters ? <Link to='/Products'><MdFilterAltOff /></Link> : <FaFilter />}
      </button>
    </div>
  );
}

export default Filter_Buttons;
