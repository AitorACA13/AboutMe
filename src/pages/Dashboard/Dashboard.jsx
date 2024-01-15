import DashPhoto from './../../../public/images/aitor2.jpg';
import './dashboard.css';

function Dashboard() {
  return (
    <>
      <div id='dashboard' className='dashboardContainer'>
        <div className='dashboard'>
          <div className='contentContainer'>
            <div className='titleDashboard'>
              <h1>¡HOLA!</h1>
              <p>
                Aquí encontrarás un vistazo íntimo a mi vida, un espacio
                dedicado a compartir quién soy, mis aficiones y la fascinante
                travesía que me llevó a sumergirme en el mundo de la
                programación. A través de estas páginas, compartiré mi historia,
                desde mis primeros encuentros con la tecnología hasta el momento
                en que decidí emprender el apasionante viaje de estudiar
                programación.{' '}
              </p>

              <p>
                {' '}
                Descubrirás más sobre mis intereses, las experiencias que han
                moldeado mi camino y los proyectos que me han permitido crecer
                como profesional. Este espacio es también una ventana a mi día a
                día, tanto en el ámbito laboral como en mis momentos de ocio.
                Las aficiones que me inspiran y los desafíos que he enfrentado
                se entrelazan aquí, creando un reflejo auténtico de mi vida.
              </p>

              <p>
                Te invito a explorar las distintas secciones, sumergirte en mis
                relatos y descubrir la sinergia entre mis experiencias
                personales y profesionales. ¡Acompáñame en este viaje digital y
                conoce un poco más sobre el camino que me ha llevado hasta aquí!
              </p>
            </div>
            <div className='imgCont'>
              <img className='imgDash' src={DashPhoto} alt='img-inicio' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
