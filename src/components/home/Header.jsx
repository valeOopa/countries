import PropTypes from 'prop-types'

export function Header({ darkMode, setDarkMode }) {
  return (
    <header id="app__header" className={darkMode ? 'backgroundDarkBlue colorWhite': 'backgroundVeryLight'}>
      <h1 id="header__title">Where in the world?</h1>
      <button id="header__buttonColorMode" className={darkMode ? 'colorWhite': 'colorDarkBlue'} onClick={()=>{setDarkMode(!darkMode)}}><img id='buttonColorMode__img' className={darkMode ? 'moonWhite': ''} alt='Moon' src={darkMode ? 'src/assets/icons/luna-2.png':'src/assets/icons/luna.png'} />Dark Mode</button>
    </header>
  )
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
}