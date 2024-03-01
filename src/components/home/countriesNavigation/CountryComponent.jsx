import PropTypes from 'prop-types';

export function CountryComponent( {setCountryExpandInfo, setCountryClick, country } ) {
  //*Componente de un pais

  //*Función que envia información del pais que se hizo click
  const countryHandle = () => {
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
    <div className="countries__country" onClick={countryHandle} >
      <img src={country.flags.png} alt={`flag  of ${country.name}`} title={`${country.name}`}  />
      <h2 className="country__name">{country.name}</h2>
      <div className="country__shortInfo">
        <p className="shortInfo__population">Population: {country.population}</p>
        <p className="shortInfo__region">Region: {country.region}</p>
        <p className="shortInfo__capital">Capital: {country.capital}</p>
      </div>
    </div>
  )
}

CountryComponent.propTypes = {
  country: PropTypes.object.isRequired,
  setCountryExpandInfo: PropTypes.func.isRequired,
  setCountryClick: PropTypes.func.isRequired
}