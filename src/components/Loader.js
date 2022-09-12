import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loader = () => {
  return (
    <div className="loader">
      <FontAwesomeIcon icon="gear" className="fa-spin" />
      <h1>Fetching Data</h1>
    </div>
  );
};

export default Loader;
