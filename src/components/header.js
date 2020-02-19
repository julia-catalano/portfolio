import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from './header.module.css'

const Header = () => (
  <header className={headerStyles.header}>
    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>home</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects/'>projects</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about/'>about</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
