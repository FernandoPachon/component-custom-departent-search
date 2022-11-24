import React from 'react';
import { useQuery } from 'react-apollo';
import QUERY_VALUE from '/graphql/getDepartmentGroup.graphql'

//import { SearchBar } from 'vtex.store-components'

const DepartmentSearch =()=>{
  const { data,loading }=useQuery(QUERY_VALUE)
  console.log("mis datos de query son",data,loading);
  return loading ?<div> Loading... </div> :<div> Búsqueda de departamento </div>

}
export default DepartmentSearch;
