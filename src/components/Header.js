import Button from './Button'

const Header = ({ name, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1> Helloooo {name}</h1>
            <Button color="rgb(38, 224, 69)" text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    name: 'Ronnie'
}

export default Header
