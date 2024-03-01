import PropTypes from 'prop-types';

export function NavigationCountries({ valueSearch, setValueSearch, setValueSelect }) {
  //* Barra de navegación del componente que contiene todos los paises.
  //* Contiene un una barra de busqueda y un filtro por continente.

  const inputHandle = e => setValueSearch(e.target.value)

  const selectHandle = e => setValueSelect(e.target.value);

  return (

    <nav id="countries__navigation">
      <input type="text" name="" id="navigation__searchBar" value={valueSearch} onChange={inputHandle} />
      <select id="navigation__filter" defaultValue='none' onChange={selectHandle}>
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
  valueSearch: PropTypes.string,
  setValueSearch: PropTypes.func.isRequired,
  setValueSelect: PropTypes.func.isRequired
}