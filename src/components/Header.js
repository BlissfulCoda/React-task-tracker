import Button from './Button'

const Header = ({ name }) => {
    return (
        <header className='header'>
            <h1> Helloooo {name}</h1>
            <Button/>
        </header>
    )
}

Header.defaultProps = {
    name: 'Ronnie'
}

export default Header
