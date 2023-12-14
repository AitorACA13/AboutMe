import welderVideo from '../../../public/images/Guada-soldadura.mp4';
import Map from '../../components/Mapa.jsx';

import './experience.css';

function Experience() {
  // Dividir las empresas en dos partes
  const enterprises = [
    // Dividir las empresas en tres partes
    [
      {
        name: 'Alize Tub Fr',
        location: 'París, Francia',
        role: 'Soldador',
        period: '2014-2018',
      },
      {
        name: 'Nervión ',
        location: 'Guadalajara, España',
        role: 'Soldador',
        period: '2020',
      },
      {
        name: 'VaqClima',
        location: 'Madrid, España',
        role: 'Soldador',
        period: '2018',
      },
    ],
    [
      {
        name: 'Meisa',
        location: 'Guadalajara, España',
        role: 'Soldador',
        period: '2018',
      },
      {
        name: 'Blue Pixel',
        location: 'Madrid, España',
        role: 'Modelador 3D',
        period: '2020',
      },
      {
        name: 'Montajes Vidal',
        location: 'Madrid, España',
        role: 'Tubero-Soldador',
        period: '2022-2023',
      },
    ],
    [
      {
        name: 'ClimatexGroup',
        location: 'Madrid, España',
        role: 'Soldador',
        period: '2019-2020',
      },

      {
        name: 'ARC',
        location: 'Madrid, España',
        role: 'Mantenimiento',
        period: '2021-2022',
      },
    ],
  ];

  return (
    <>
      <div id='experience'>
        <h2>Estudios</h2>
        <div>
          <p>-IES Las Lagunas(2006-2014) ESO y Bachillerato</p>
          <p>-CEV (2018-2020) Animación 3D y entornos interactivos</p>
          <p>Hack a Boss (2023) Programación web Full Stack</p>
        </div>

        <h2>Experiencia</h2>
        <div className='experience'>
          {enterprises.map((column, columnIndex) => (
            <div key={columnIndex} className='enterprises'>
              {column.map((enterprise, index) => (
                <div key={index} className='entrepriseCard'>
                  <h3 className='entreName'>{enterprise.name}</h3>
                  <p className='entreLoc'>{enterprise.location}</p>
                  <p className='entreRol'>{enterprise.role}</p>
                  <p className='entrePer'>{enterprise.period}</p>
                </div>
              ))}
            </div>
          ))}
          <Map />
        </div>

        <h2>Habilidades</h2>
        <div className='skills'>
          <div className='welderVideo'>
            <video className='welderGif' autoPlay loop>
              <source src={welderVideo} type='video/mp4' />
            </video>
          </div>
          <div className='skillsInfo'>
            <p>
              Trabajo en equipo: los equipos estaban compuestos por 4 o 5
              personas y siempre ha sido importante la organización para
              realizar todos los procesos para hacer y finalizar los trabajos
              con éxito.
            </p>
            <p>Comunicación: </p>
            <p>
              Tolerancia al estrés: La responsabilidad del trabajo y su pequeño
              porcentaje al fallo a la hora de soldar en momentos donde los
              clientes requieren el mismo trabajo en menos tiempo hizo que
              ganase confianza y seguridad en ese tipo de momentos.
            </p>
            <p>Gestión de tiempo</p>
            <p>Resolución de problemas</p>
            <p>Aprendizaje práctico</p>
            <p>Adaptabilidad</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
