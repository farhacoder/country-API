
import { useEffect, useState } from "react"
// import CountryData from "../CountryData"
import Card from "./Card"
import { useFilter } from "../Hooks/useFilter"
const CountryList = ({query}) => {
  const [countryData,setCountryData]=useState([]) 
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then((data)=>{setCountryData(data)})
  
  },[])
    
  return (
    <div className="countries-container">
    
    {countryData.filter((country)=>country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)).map((country) => {
      return (
        <Card
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
        />
      )
    })}
  </div>
  )
}
export default CountryList