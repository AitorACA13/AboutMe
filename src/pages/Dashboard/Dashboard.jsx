import DashPhoto from './../../../public/images/aitorParis.jpg';
import './dashboard.css';

function Dashboard() {
  return (
    <>
      <div id='dashboard'>
        <div className='dashboard'>
          <div className='titleDashboard'>
            <h1>¡HOLA!</h1>
            <p>
              Bienvenido a mi rincón más personal. Aquí encontrarás con un par
              de clicks mi carrera y proyectos.
            </p>
          </div>
          <div className='imgCont'>
            <img className='imgDash' src={DashPhoto} alt='img-inicio' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
