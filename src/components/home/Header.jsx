import PropTypes from 'prop-types'
import Moon from '../svg/Moon'
import MoonLight from '../svg/MoonLight'

export function Header({ darkMode, setDarkMode }) {
  return (
    <header id="app__header" className={darkMode ? 'backgroundDarkBlue colorWhite': 'backgroundVeryLight'}>
      <h1 id="header__title">Where in the world?</h1>
      <button id="header__buttonColorMode" className={darkMode ? 'colorWhite': 'colorDarkBlue'} onClick={()=>{setDarkMode(!darkMode)}}>{darkMode ? <MoonLight id="buttonColorMode__moon"/>: <Moon id="buttonColorMode__moon"/> }Dark Mode</button>
    </header>
  )
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
}