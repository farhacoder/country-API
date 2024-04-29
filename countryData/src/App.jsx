// import "./App.css";
// import Header from "./Components/Header";
// import SearchBar from "./Components/SearchBar";
// import SelectMenu from "./Components/SelectMenu";
// import CountryList from "./Components/CountryList";
// import { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CountryDetail from "./Components/CountryDetail";

// function App() {
//   const [query, setQuery] = useState("");

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/country" element={<CountryDetail />}></Route>
//         </Routes>

//         <Header />
//         <main>
//           <div className="search-filter-container">
//             <SearchBar setQuery={setQuery} />
//             <SelectMenu />
//           </div>
//           <CountryList query={query} />
//         </main>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./Contexts/ThemeContext";


import "./App.css";

const App = () => {
  return (
    <>
       <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
