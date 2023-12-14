import './info.css';
import ParisPhoto from './../../../public/images/Aitor-paris.jpg';

function Info() {
  return (
    <>
      <main className='info'>
        <h1> INFORMACIÓN PERSONAL</h1>
        <h2>Datos de contacto</h2>
        <div className='contact'>
          <img className='imgInfo' src={ParisPhoto} alt='' />
          <div className='infoContact'>
            <ul>
              <li> Nombre: Aitor de la Cueva Alonso </li>
              <li> Fecha de Nacimiento: 8/3/1994</li>
              <li> Residencia: Rivas-Vaciamadrid, Madrid</li>
              <li> Correo electrónico: aitor.delacueva13@gmail.com</li>
              {/* Hay que ver el tema de los enlaces. */}
              <li>Github: </li>
              <li>Linkedin:</li>
            </ul>
          </div>
        </div>
        <div className='description'>
          <h2>Descripción</h2>
          <p>
            Soy una persona alegre y extrovertida, siempre buscando contagiar mi
            energía positiva a quienes me rodean. Me intereso genuinamente por
            las personas y disfruto estableciendo conexiones significativas. Mi
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
        </div>
        <div className='hobbies'>
          <h2>Hobbies</h2>
          <div className='hobbiesInfo'></div>
          <p>
            Mi día a día incluye desafíos en el gimnasio, donde me esfuerzo por
            superar mis límites y mantenerme en forma. Además, mi fascinación
            por el mundo tecnológico se manifiesta a través de mi amor por los
            videojuegos, donde encuentro un escape emocionante.
          </p>
          <p>
            Cuando no estoy inmerso en la tecnología, me embarco en aventuras y
            viajes para explorar nuevos lugares y sumergirme en diversas
            culturas. Pero una de las experiencias más auténticas es adentrarme
            en la naturaleza, a menudo acompañado de mi fiel compañera canina
            Venus. Juntos, exploramos montañas, caminamos por senderos y
            disfrutamos de la serenidad que solo la naturaleza puede ofrecer.
          </p>
          <p>
            Estos elementos, desde los desafíos físicos en el gimnasio hasta las
            emocionantes travesías tecnológicas y las tranquilas escapadas a la
            naturaleza, se entrelazan para formar un mosaico único que define mi
            vida y contribuye a mi crecimiento personal.
          </p>
        </div>
      </main>
    </>
  );
}

export default Info;
