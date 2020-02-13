import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `blue`,
      marginBottom: `1.45 rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div>
        <h6 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `gray`,
              textDecoration: `none`,
            }}
          >
            {`home`}
          </Link>
        </h6>
      </div>
      <div>
        <h6 style={{ margin: 0 }}>
          <Link
            to="/projects/"
            style={{
              alignSelf: `right`,
              color: `gray`,
              textDecoration: `none`,
            }}
          >
            {`projects`}
          </Link>
        </h6>
        <h6 style={{ margin: 0 }}>
          <Link
            to="/about/"
            style={{
              alignSelf: `right`,
              color: `gray`,
              textDecoration: `none`,
            }}
          >
            {`about`}
          </Link>
        </h6>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
