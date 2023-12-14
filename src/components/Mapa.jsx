import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import interest from '../data/interest';
import './mapa.css';

const Map = () => {
  const defaultCenter = [43.7102, -1.0514];

  return (
    <MapContainer center={defaultCenter} zoom={5} className='mapContainer'>
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
