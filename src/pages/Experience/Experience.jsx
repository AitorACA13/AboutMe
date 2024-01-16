import welderVideo from '../../../public/images/Guada-soldadura.mp4';
import Map from '../../components/Mapa.jsx';
import logoProg from '../../../public/images/logoprog.jpg';
import logoVj from '../../../public/images/logovj.jpg';
import logoStudy from '../../../public/images/logoestudio.jpg';
import Carousel from '../../components/carousel/Carousel.jsx';
import './experience.css';

function Experience() {
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

  const images = [
    './../../../public/images/sable.jpg',
    './../../../public/images/salabombas.jpg',
    './../../../public/images/moto.jpg',
    './../../../public/images/12O.jpg',
    './../../../public/images/12O1.jpg',
    './../../../public/images/12O2.jpg',
    './../../../public/images/elesa.jpg',
    './../../../public/images/bateria.jpg',
    './../../../public/images/camara.jpg',
    './../../../public/images/preh.png',
    './../../../public/images/chica.jpg',
    './../../../public/images/piano02.jpg',
    './../../../public/images/Sink01.jpg',
    './../../../public/images/greg.jpg',
  ];

  return (
    <>
      <div id='experience'>
        <div className='titleExp'>
          <h2>Estudios y tecnologías</h2>
        </div>
        <div className='learn'>
          <div className='imgStudy'>
            <img className='imglog' src={logoStudy} alt='imgStudy' />
          </div>
          <div className='study'>
            <ul className='list'>
              <li>IES Las Lagunas, 2006-2014</li>
              <li>ESO y Bachillerato.</li>
              <li>CEV, 2018-2020</li>
              <li>Animación 3D y entornos interactivos.</li>
              <li>Hack a Boss, 2023</li>
              <li>Programación web FullStack</li>
            </ul>
          </div>

          <div className='imgDev'>
            <img className='imglog' src={logoProg} alt='imgDw' />
          </div>
          <div className='dev'>
            <ul className='list'>
              <li>Html</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Node</li>
              <li>React</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className='imgVideoG'>
            <img className='imglog' src={logoVj} alt='imgVj' />
          </div>
          <div className='videoG'>
            <ul className='list'>
              <li>Zbrush</li>
              <li>Blender</li>
              <li>Maya</li>
              <li>Substance Painter</li>
              <li>Premiere</li>
              <li>Unity</li>
            </ul>
          </div>
        </div>
        <div className='titleExp'>
          <h2>Experiencia laboral</h2>
        </div>
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

        <Carousel images={images} />
        <div className='titleExp'>
          <h2>Habilidades</h2>
        </div>
        <div className='skills'>
          <div className='welderVideo'>
            <video className='welderGif' autoPlay loop>
              <source src={welderVideo} type='video/mp4' />
            </video>
          </div>
          <div className='skillsInfo'>
            <div className='paragraph'>
              <p>
                <span className='highlight'>Trabajo en equipo:</span> He
                trabajado en equipos compuestos por 4 o 5 personas. La
                colaboración y la organización son fundamentales para llevar a
                cabo todos los procesos necesarios y garantizar el éxito en la
                ejecución y finalización de los trabajos.
              </p>
            </div>
            <div className='paragraph'>
              <p>
                <span className='highlight'>Comunicación:</span> He desarrollado
                habilidades efectivas de comunicación para coordinar y compartir
                información clave con mis compañeros de equipo. La comunicación
                clara es esencial para garantizar la seguridad y la eficiencia
                en el entorno de trabajo.{' '}
              </p>
            </div>
            <div className='paragraph'>
              <p>
                <span className='highlight'>Tolerancia al estrés: </span>La
                naturaleza del trabajo como soldador a menudo implica la
                responsabilidad de cumplir con plazos ajustados. Mi experiencia
                me ha enseñado a manejar el estrés eficazmente, especialmente en
                situaciones donde se requiere realizar trabajos de soldadura en
                un tiempo limitado sin comprometer la calidad.
              </p>
            </div>
            <div className='paragraph'>
              <p>
                <span className='highlight'>Gestión de tiempo: </span>La gestión
                eficiente del tiempo es crucial para cumplir con los plazos
                establecidos y garantizar la finalización oportuna de los
                proyectos. He perfeccionado mis habilidades de programación y
                organización para maximizar la productividad.
              </p>
            </div>

            <div className='paragraph'>
              <p>
                <span className='highlight'>Resolución de problemas:</span> Me
                he enfrentado a diversos desafíos técnicos y operativos. Mi
                capacidad para analizar problemas, identificar soluciones
                efectivas y aplicar ajustes en tiempo real ha sido clave para
                superar obstáculos y garantizar la calidad del trabajo.
              </p>
            </div>
            <div className='paragraph'>
              <p>
                <span className='highlight'>Aprendizaje práctico:</span> La
                soldadura a menudo requiere adaptarse a diferentes materiales y
                técnicas. He demostrado una capacidad constante para el
                aprendizaje práctico, adquiriendo nuevas habilidades y técnicas
                a medida que evoluciona la tecnología y las demandas del
                trabajo.
              </p>
            </div>

            <div className='paragraph'>
              <p>
                <span className='highlight'>Adaptabilidad: </span>En un entorno
                dinámico como la soldadura, la adaptabilidad es esencial. Me he
                adaptado con éxito a cambios en los procesos, materiales y
                especificaciones del proyecto, lo que ha contribuido a mi
                capacidad para enfrentar nuevos desafíos con confianza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
