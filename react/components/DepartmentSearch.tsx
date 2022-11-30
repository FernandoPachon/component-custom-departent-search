import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import getCategories from '../graphql/getDepartmentGroup.graphql'
import { SearchBar } from 'vtex.store-components'
import DepartmentGroup from './DepartmentGroup'
import { useCssHandles } from 'vtex.css-handles'
import "./styles.css"

const DepartmentSearch = () => {
  const { data, loading } = useQuery(getCategories)
  console.log('mis datos de query son', data?.categories[0]?.children)

  const [slug, setSlug] = useState('')
  console.log('mi slug seleccionado es :', slug)

  const CSS_HANDLES = ["departmentSearch_categories"]
  const handles = useCssHandles(CSS_HANDLES)
  return loading ? (
    <div className={handles["departmentSearch_categories"]}> Loading... </div>
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
