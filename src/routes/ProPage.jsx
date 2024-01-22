import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Filter_Buttons from '../componets/Filter_Buttons';
import AllProducts from '../componets/AllProducts';

function ProPage() {

  return (
  <>
  <Filter_Buttons />
  <AllProducts />
    
  </>
  );
}

export default ProPage;

