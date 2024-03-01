import PropTypes from 'prop-types'

export function Header({ darkMode, setDarkMode }) {
  return (
    <header id="app__header">
      <h1 id="header__title">Where in the world?</h1>
      <button id="header__buttonColorMode" onClick={()=>{setDarkMode(!darkMode)}}>Dark Mode</button>
    </header>
  )
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
}