import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <FontAwesomeIcon icon="fire" /> Disaster Tracker (Powered by NASA)
      </h1>
    </header>
  );
};

export default Header;
