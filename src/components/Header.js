import Button from './Button'

const Header = ({ name }) => {
    const onClick = () => {
        alert('clicked...')
    }

    return (
        <header className='header'>
            <h1> Helloooo {name}</h1>
            <Button color="rgb(38, 224, 69)" text="Add" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    name: 'Ronnie'
}

export default Header
