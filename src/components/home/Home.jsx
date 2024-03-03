import { useState, useEffect } from "react";
import { NavigationCountries } from "./countriesNavigation/NavigationCountries";
import { NavigationExpand } from "./countryExpand/NavigationExpand";
import { CountryComponent } from "./countriesNavigation/CountryComponent";
import { CountryExpand } from "./countryExpand/CountryExpand";
import countries from '../../assets/data/data.json';
import PropTypes from 'prop-types';

export function Home({ darkMode }) {
  //* Estados para obtener información si se hizo click en un pais, obtener su descripción y mostrarla en pantalla
  const [ countryExpandInfo, setCountryExpandInfo ] = useState(null);
  const [ countryClick, setCountryClick ] = useState(false);
  const [ countriesComponents, setCountriesComponents ] = useState(countries);

  //* Estado para la barra de navegación
  const [ valueSearch, setValueSearch ] = useState('');

  //* Estado para los opciones con filtro
  const [ valueSelect, setValueSelect ] = useState('none');

  //* Filtrar paises dependiendo si el usuario busca o no ciertos paises.
  useEffect(()=>{
    if(valueSearch !== '' || valueSelect !== 'none'){
      let filterCountries = countries.filter(item=> item.name.toLowerCase().includes(valueSearch.toLowerCase()) || item.alpha2Code.toLowerCase().includes(valueSearch.toLowerCase()) || (item.capital && item.capital.toLowerCase().includes(valueSearch.toLowerCase())) || (item.region && item.region.toLowerCase().includes(valueSearch.toLowerCase())) || item.population.toString().toLowerCase().includes(valueSearch.toLowerCase()) );
      if(valueSelect !== 'none'){
        let filterCountriesByRegion = filterCountries.filter(item=> (item.region && item.region.toLowerCase() === valueSelect.toLowerCase()));
        console.log(filterCountriesByRegion)
        setCountriesComponents(filterCountriesByRegion);
      }else setCountriesComponents(filterCountries);
      
    }else setCountriesComponents(countries);
  },[valueSearch,valueSelect]);

  //* Función para obtener el nombre de los paises limitrofes(Un array contenedor de los paises limitrofes, de alpha3Code y tiene que coincidir con su pais correspondiente)
  const searchBorderCountry = borderCountries => {
    //* En caso de no tenes paises limitrofes(isla) retornar falso
    if(borderCountries === undefined) return false;
    else{
      //* Se recorre los paises limitrofes y los 200 paises para encontrar su coincidente
      let countriesMatch = [];
      for(const borderCountry of borderCountries) for(const country of countries) if(country.alpha3Code  === borderCountry)countriesMatch.push(country.name)
      return countriesMatch
    }
  }

//* Home se divide en dos componentes, 'CountriesNavigation' en el que se encuentran la totalidad de sus paises, y 'countryExpand', el cual contiene el pais que se hizo click para obtener su información. Dependiendo si el usuario hizo click o no mostramos sus componentes(Cada uno tiene un componente header diferente)
  return (

    <article id="app__home" className={darkMode ? 'backgroundVeryDarkBlue':'backgroundLight'}>
      {
  !countryClick && (
    <section id="home__countries" >
      <NavigationCountries darkMode={darkMode} valueSearch={valueSearch} setValueSearch={setValueSearch} setValueSelect={setValueSelect} />
      {
        countriesComponents.map((country, key) => (
          <CountryComponent
            darkMode={darkMode}
            setCountryExpandInfo={setCountryExpandInfo}
            setCountryClick={setCountryClick}
            key={key}
            country={country}
          />
        ))
      }
    </section>
  )
}
{
  countryClick && (
    <>
      <NavigationExpand darkMode={darkMode} setCountryExpandInfo={setCountryExpandInfo} setCountryClick={setCountryClick} />
      <CountryExpand darkMode={darkMode} searchBorderCountry={searchBorderCountry} info={countryExpandInfo} />
    </>
  )
}
    </article>
  )
}


Home.propTypes = {
  darkMode: PropTypes.bool.isRequired
}