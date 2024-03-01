import PropTypes from 'prop-types';

export function NavigationExpand({setCountryExpandInfo, setCountryClick}) {
  //* Componente <nav> de un pais que se hizo click para ver su información

  //* En caso de que se haga click en el botón, se restauran  los estados y se vuelve al componente contenedor de todos los paises
  const handleClick = () => {
    setCountryExpandInfo(null);
    setCountryClick(false);
  }
  return (
    <nav id="home__navigationExpand">
      <button id="navigationExpand__backButton" onClick={handleClick}>Back</button>
    </nav>
  )
}

NavigationExpand.propTypes = {
  setCountryExpandInfo: PropTypes.func.isRequired,
  setCountryClick: PropTypes.func.isRequired
}