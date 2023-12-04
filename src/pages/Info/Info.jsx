import './info.css';
import ParisPhoto from './../../../public/images/Aitor-paris.jpg';

function Info() {
  return (
    <>
      <h1> INFORMACIÓN PERSONAL</h1>

      <ul>
        <li> Nombre: Aitor de la Cueva Alonso </li>
        <li> Fecha de Nacimiento: 8/3/1994</li>
        <li> Residencia: Rivas-Vaciamadrid, Madrid</li>
        <li> Correo electrónico: aitor.delacueva13@gmail.com</li>
        <li>Github: </li>
        <li>Linkedin:</li>
      </ul>
      <img className='imgInfo ' src={ParisPhoto} alt='' />
      <div className='description'>
        <p>
          Soy una persona alegre y extrovertida, siempre buscando contagiar mi
          energía positiva a quienes me rodean. Me intereso genuinamente por las
          personas y disfruto estableciendo conexiones significativas. Mi
          actitud positiva se refleja en mi capacidad para crear un ambiente
          amigable y acogedor.
        </p>
        <p>
          Soy trabajador y dedicado en todo lo que emprendo. Me esfuerzo por
          alcanzar mis metas con determinación y constancia. Mi naturaleza
          extrovertida se combina con mi empatía, lo que me permite conectarme
          de manera auténtica con los demás. Creo que contribuir a un entorno
          positivo y motivador es fundamental, y siempre estoy dispuesto a
          colaborar para lograrlo.
        </p>
        <p></p>
      </div>
    </>
  );
}

export default Info;
