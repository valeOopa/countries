import PropTypes from 'prop-types';

export function CountryComponent( { darkMode,setCountryExpandInfo, setCountryClick, country } ) {
  //*Componente de un pais

  //*Función que envia información del pais que se hizo click
  const countryHandle = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCountryClick(true);
    setCountryExpandInfo({
      flag:country.flags.png,
      name:country.name,
      nativeName:country.nativeName,
      population:country.population,
      region:country.region,
      subRegion:country.subregion,
      capital:country.capital,
      topLevelDomain:country.topLevelDomain,
      currencies:country.currencies,
      languages:country.languages,
      borderCountries: country.borders
    })

  }
  return (
    <div className={`countries__country ${darkMode && 'backgroundDarkBlue'}`}  onClick={countryHandle} >
      <img src={country.flags.png} className='country__flag' alt={`flag  of ${country.name}`} title={`${country.name}`}  />
      
      <div className="country__shortInfo">
        <h2 className={`shortInfo__name ${darkMode ? 'colorWhite':'colorDarkBlue'}`}>{country.name}</h2>
        <p className={`shortInfo__population shortInfo__description ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600': 'darkText'}>Population:</span> {country.population}</p>
        <p className={`shortInfo__region shortInfo__description ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600': 'darkText'}>Region:</span> {country.region}</p>
        <p className={`shortInfo__capital shortInfo__description ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600': 'darkText'}>Capital:</span> {country.capital}</p>
      </div>
    </div>
  )
}

CountryComponent.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  country: PropTypes.object.isRequired,
  setCountryExpandInfo: PropTypes.func.isRequired,
  setCountryClick: PropTypes.func.isRequired
}