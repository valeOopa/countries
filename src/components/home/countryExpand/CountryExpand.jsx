import PropTypes from 'prop-types';

export function CountryExpand({info, searchBorderCountry}) {
  //* Componente que renderiza el pais que se hizo click y muestra su información relevante



  //* Algunas propiedades de la infromación(info) esta envuelta en un objeto y array, asi que hay que mostrarla con comas.
  const currencies = Object.values(info.currencies[0]).join(', ');
  const languages = Object.values(info.languages[0]).join(', ');

  return (
    <div id='home__countryExpand'>
      <img id='countryExpand__flag' src={info.flag} alt={`Flag of ${info.name}`} title={info.name} />
      <div id='countryExpand__information'>
        <h3 id='information__name'>{info.name}</h3>
        <div id='information__details-1'>
          <p className='details-1__deatail'><span>Native Name:</span> {info.nativeName}</p>
          <p className='details-1__deatail'><span>Population:</span> {info.population}</p>
          <p className='details-1__deatail'><span>Region:</span> {info.region}</p>
          <p className='details-1__deatail'><span>Sub Region:</span> {info.subRegion}</p>
          <p className='details-1__deatail'><span>Capital:</span> {info.capital}</p>
        </div>
        <div id='information__details-2'>
          <p className='details-2__deatail'><span>Top Level Domain:</span> {info.topLevelDomain.join(', ')}</p>
          <p className='details-2__deatail'><span>Currencies:</span> {currencies}</p>
          <p className='details-2__deatail'><span>Languages:</span> {languages}</p>
        </div>
        <p id='information__borderCountries'>Border Countries: 
        {
          //* Si borderCountries es diferente a undefined(Si es diferente a una isla), se muestran los paises limitrofes
          info.borderCountries?
          searchBorderCountry(info.borderCountries).map((country,key)=>{
            return (<span className='borderCountries__borderCountry' key={key}>{country}</span>)
          }):
          <span className='borderCountries__borderCountry'> None</span>
        }
      </p>
      </div>
    </div>
  )
}

CountryExpand.propTypes = {
  info: PropTypes.object.isRequired,
  searchBorderCountry: PropTypes.func.isRequired
};