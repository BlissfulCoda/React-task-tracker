import Button from './Button';

const Header = ({ name, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1> Task {name}</h1>
      <Button
        color={showAdd ? 'red' : 'rgb(38, 224, 69)'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  name: 'Tracker'
};

export default Header;
