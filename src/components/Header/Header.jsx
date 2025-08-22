import './Header.css';

const Header = () => {
  const navigationBlocks = ['About', 'Services', 'Contact'];

  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <nav className="navigation">
        {navigationBlocks.map(block => {
          return (
            <a
              className="navigation__link"
              href={`#${block.toLocaleLowerCase()}`}
            >
              {block}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
