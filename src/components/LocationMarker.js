import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <FontAwesomeIcon icon="fire" className="location-icon" />
    </div>
  );
};

export default LocationMarker;
