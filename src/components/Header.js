import PropTypes from 'prop-types'

const Header = ({ name }) => {
    return (
        <header className="container">
            <h1> Helloooo {name}</h1>
        </header>
    )
}

Header.defaultProps = {
    name: 'Ronnie'
}

Header.propTypes = {
    name: PropTypes.string
}

export default Header
