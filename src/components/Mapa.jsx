import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import interest from '../data/interest';

const Map = () => {
  const defaultCenter = [40.4168, -3.7038];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={12}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {interest.map((punto, index) => (
        <Marker key={index} position={[punto.latitud, punto.longitud]}>
          <Popup>{punto.nombre}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
