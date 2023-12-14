import DashPhoto from './../../../public/images/aitorParis.jpg';
import './dashboard.css';

function Dashboard() {
  return (
    <>
      <div className='dashboard'>
        <div className='titleDashboard'>
          <h1>¡HOLA!</h1>
          <p>
            Bienvenido a mi rincón más personal. Aquí encontrarás con un par de
            clicks mi carrera y proyectos.
          </p>
        </div>
        <img className='imgDash' src={DashPhoto} alt='img-inicio' />
      </div>
    </>
  );
}

export default Dashboard;
