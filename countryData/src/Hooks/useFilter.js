
export function useFilter(datalist,callback){
     console.log(data);
     const[query,setQuery]=useState('')
    const filterData=datalist.filter((data) =>
     callback(data).toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
   )
  return[filterData,setQuery]
}