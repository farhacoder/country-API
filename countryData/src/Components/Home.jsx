import { useState  } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountryList from './CountryList'
import { UseTheme } from '../Hooks/UseTheme'


export default function Home() {
  const [isDark] = UseTheme()
  const [query, setQuery] = useState('')
  return (
    <main className={`${isDark? 'dark': ''}`}> 
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountryList query={query} />
    </main>
  )
}