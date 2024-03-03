import PropTypes from 'prop-types';
import GlassLight from '../../svg/GlassLight';
import Glass from '../../svg/Glass';

export function NavigationCountries({ darkMode, valueSearch, setValueSearch, setValueSelect }) {
  //* Barra de navegación del componente que contiene todos los paises.
  //* Contiene un una barra de busqueda y un filtro por continente.

  const inputHandle = e => setValueSearch(e.target.value)

  const selectHandle = e => setValueSelect(e.target.value);

  return (
    <nav id="countries__navigation" className='home__navigation'>
      <div id='navigation__searchBar--container' className={darkMode ? 'backgroundDarkBlue':'backgroundVeryLight'}>
      {darkMode?<GlassLight id='searchBar__glass' />:<Glass id='searchBar__glass' />  }
        <input type="text" name="" id="navigation__searchBar" className={darkMode ? 'backgroundDarkBlue navigation__searchBar--dark colorWhite':'navigation__searchBar--light'} placeholder='Search for a country...' value={valueSearch} onChange={inputHandle} />
      </div>
      
      <select id="navigation__filter" defaultValue='none' onChange={selectHandle} className={darkMode ? 'backgroundDarkBlue darkBorder colorWhite':'lightBorder colorDarkBlue'}>
        <option className="filter__options" value="none"  disabled>Filter by Region</option>
        <option className="filter__options" value="none">World</option>
        <option className="filter__options" value="africa">Africa</option>
        <option className="filter__options" value="americas">America</option>
        <option className="filter__options" value="asia">Asia</option>
        <option className="filter__options" value="europe">Europe</option>
        <option className="filter__options" value="oceania">Oceania</option>
      </select>

    </nav>
  )
}

NavigationCountries.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  valueSearch: PropTypes.string,
  setValueSearch: PropTypes.func.isRequired,
  setValueSelect: PropTypes.func.isRequired
}