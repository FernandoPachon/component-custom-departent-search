import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import DepartmentGroup from './DepartmentGroup'
import getCategories from '../graphql/getDepartmentGroup.graphql'

import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(getCategories)

  console.log('mis datos de query son', data?.categories[0]?.children)
  const [slug, setSlug] = useState('')

  console.log('mi slug seleccionado es :', slug)

  return loading ? (
    <div> Loading... </div>
  ) : (
    <div>
      <DepartmentGroup
        departments={data?.categories[0]?.children}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="¿Que estas buscando?"
        displayMode="search-and-clear-buttons"
        containerMode='container'
      />

    </div>
  )
}
export default DepartmentSearch
