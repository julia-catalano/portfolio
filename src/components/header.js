import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SmallLogo from '../images/logo-single.png'
import headerStyles from './header.module.css'

const Header = () => (
    <nav className={headerStyles.headerContainer}>
      <div className={headerStyles.navigationWrapper}>
        <div>
          <Link to='/'>
            <img className={headerStyles.headerImage} src={SmallLogo}></img>
          </Link>
        </div>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects/'>projects</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/yoga/'>yoga + research</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about/'>about</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact/'>contact</Link>
          </li>
        </ul>
        </div>
      </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
