import ParisPhoto from './../../../public/images/Aitor-paris.jpg';
import './info.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/* import Slider from 'react-slick';
import Venus from './../../../public/images/venus.jpg';
import Octubre from './../../../public/images/12O.jpg'; */
import Carousel from '../../components/carousel/Carousel';

function Info() {
  const images = [
    './../../../public/images/sable.jpg',
    './../../../public/images/salabombas.jpg',
    './../../../public/images/moto.jpg',
    './../../../public/images/12O.jpg',
    './../../../public/images/12O1.jpg',
    './../../../public/images/12O2.jpg',
    './../../../public/images/elesa.jpg',
    './../../../public/images/prehistoria.jpg',
  ];

  return (
    <>
      <main className='info'>
        <h1> INFORMACIÓN PERSONAL</h1>
        <Carousel images={images} />
        <h2>Datos de contacto</h2>
        <div className='contact'>
          <img className='imgInfo' src={ParisPhoto} alt='' />
          <div className='infoContact'>
            <ul>
              <li className='infoName'> Nombre: Aitor de la Cueva Alonso </li>
              <li className='infoDate'> Fecha de Nacimiento: 8/3/1994</li>
              <li className='infoHome'>
                Residencia: Rivas-Vaciamadrid, Madrid
              </li>
              <li className='infoMail'>
                Correo electrónico: aitor.delacueva13@gmail.com
              </li>
              {/* Hay que ver el tema de los enlaces. */}
              <li className='infoGit'>Github: </li>
              <li className='infoLink'>Linkedin:</li>
            </ul>
          </div>
          <div className='description'>
            <p>
              Soy una persona alegre y extrovertida, siempre buscando contagiar
              mi energía positiva a quienes me rodean. Me intereso genuinamente
              por las personas y disfruto estableciendo conexiones
              significativas. Mi actitud positiva se refleja en mi capacidad
              para crear un ambiente amigable y acogedor.
            </p>
            <p>
              Además, soy una persona altamente motivada y apasionada por el
              aprendizaje continuo. Siempre estoy en la búsqueda de nuevas
              oportunidades para ampliar mis conocimientos y habilidades.
              Considero que el crecimiento personal y profesional es un viaje
              constante, y me comprometo a evolucionar y mejorar en todos los
              aspectos de mi vida.
            </p>
            <p>
              Soy trabajador y dedicado en todo lo que emprendo. Me esfuerzo por
              alcanzar mis metas con determinación y constancia. Mi naturaleza
              extrovertida se combina con mi empatía, lo que me permite
              conectarme de manera auténtica con los demás. Creo que contribuir
              a un entorno positivo y motivador es fundamental, y siempre estoy
              dispuesto a colaborar para lograrlo.
            </p>
          </div>
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
          {/* <img src={Venus} alt='' /> */}
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
