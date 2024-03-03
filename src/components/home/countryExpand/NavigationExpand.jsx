import PropTypes from 'prop-types';
import Arrow from '../../svg/Arrow';
import ArrowLight from '../../svg/ArrowLight';

export function NavigationExpand({darkMode,setCountryExpandInfo, setCountryClick}) {
  //* Componente <nav> de un pais que se hizo click para ver su información
  
  //* En caso de que se haga click en el botón, se restauran  los estados y se vuelve al componente contenedor de todos los paises
  const handleClick = () => {
    setCountryExpandInfo(null);
    setCountryClick(false);
  }
  return (
    <nav id="home__navigationExpand" className='home__navigation'>
      <button id="navigationExpand__backButton" className={darkMode ? 'backgroundDarkBlue colorWhite': 'backgroundVeryLight'} onClick={handleClick}>{ darkMode ? <ArrowLight id='backButton__arrow' /> : <Arrow id='backButton__arrow' /> }Back</button>
    </nav>
  )
}

NavigationExpand.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setCountryExpandInfo: PropTypes.func.isRequired,
  setCountryClick: PropTypes.func.isRequired
}