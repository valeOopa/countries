import PropTypes from 'prop-types';

export function CountryExpand({darkMode,info, searchBorderCountry}) {
  //* Componente que renderiza el pais que se hizo click y muestra su información relevante



  //* Algunas propiedades de la infromación(info) esta envuelta en un objeto y array, asi que hay que mostrarla con comas.
  const currencies =  info.currencies?Object.values(info.currencies[0]).join(', '):"None";
  const languages = Object.values(info.languages[0]).join(', ');

  return (
    <section id='home__countryExpand'>
      <img id='countryExpand__flag' src={info.flag} alt={`Flag of ${info.name}`} title={info.name} />
      <div id='countryExpand__information'>
        <h3 id='information__name' className={darkMode && 'colorWhite'}>{info.name}</h3>
        <div id='information__details-1'>
          <p className={`details-1__deatail ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600':'darkText'}>Native Name:</span> {info.nativeName}</p>
          <p className={`details-1__deatail ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600':'darkText'}>Population:</span> {info.population}</p>
          <p className={`details-1__deatail ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600':'darkText'}>Region:</span> {info.region}</p>
          <p className={`details-1__deatail ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600':'darkText'}>Sub Region:</span> {info.subRegion}</p>
          <p className={`details-1__deatail ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600':'darkText'}>Capital:</span> {info.capital}</p>
        </div>
        <div id='information__details-2'>
          <p className={`details-2__deatail ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600':'darkText'}>Top Level Domain:</span> {info.topLevelDomain.join(', ')}</p>
          <p className={`details-2__deatail ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600':'darkText'}>Currencies:</span> {currencies}</p>
          <p className={`details-2__deatail ${darkMode && 'colorVeryLightGray'}`}><span className={darkMode ? 'colorWhite w600':'darkText'}>Languages:</span> {languages}</p>
        </div>
        <p id='information__borderCountriesText' className={darkMode ? 'colorWhite w600':'darkText'}>Border Countries:</p>
        {
          //* Si borderCountries es diferente a undefined(Si es diferente a una isla), se muestran los paises limitrofes
          <div id='information__borderCountries'>
            {info.borderCountries
              ?searchBorderCountry(info.borderCountries).map((country,key)=>{
                return (<span className={`borderCountries__borderCountry ${darkMode && 'backgroundDarkBlue colorWhite'} `} key={key}>{country}</span>)
              })
            :<span className={`borderCountries__borderCountry ${darkMode && 'backgroundDarkBlue colorWhite'} `}> None</span>}
          </div>
        }
      </div>
    </section>
  )
}

CountryExpand.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  info: PropTypes.object.isRequired,
  searchBorderCountry: PropTypes.func.isRequired
};
