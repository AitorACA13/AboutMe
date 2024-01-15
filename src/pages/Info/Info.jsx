import ParisPhoto from './../../../public/images/Aitor-paris.jpg';
import './info.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Venus from './../../../public/images/venusNieve.jpg';
import Futbol from './../../../public/images/futbol.jpg';
import Gimnasio from './../../../public/images/Aitor.jpg';
/* import alonso from './../../../public/images/falonso.jpg'; */
import Lenguages from '../../components/lenguajes/lenguages';
/* import Slider from 'react-slick';
import Venus from './../../../public/images/venus.jpg';
import Octubre from './../../../public/images/12O.jpg'; */
/* import Carousel from '../../components/carousel/Carousel'; */

function Info() {
  /*   const images = [
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
  ]; */

  const alonso =
    'https://media1.tenor.com/m/fAShbjS0oN8AAAAC/fernando-alonso-aston-martin.gif';
  return (
    <>
      <div id='info'>
        {/*  <h1> INFORMACIÓN PERSONAL</h1> */}
        {/* <Carousel images={images} /> */}
        <div className='titleInfo'>
          <h2>Datos de contacto</h2>
        </div>
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
              <li className='infoNumber'>Número de teléfono: +34 697850039</li>
              {/* Hay que ver el tema de los enlaces. */}
              <li className='infoGit'>
                {' '}
                <a
                  className='enlace'
                  href='https://github.com/AitorACA13'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </li>
              <li className='infoLink'>
                <a
                  className='enlace'
                  href='https://www.linkedin.com/in/aitordelacuevaalonso/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Linkedin
                </a>
              </li>
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
        <div className='titleLeng'>
          <h2>Idiomas</h2>
        </div>

        <div className='lenguages'>
          <Lenguages idioma='Español' nivel={6} />
          <Lenguages idioma='Francés' nivel={4} />
          <Lenguages idioma='Inglés' nivel={3} />
        </div>
        <div className='titleInfo'>
          <h2>¿Por qué programación?</h2>
        </div>
        <div className='motivation'>
          <p>
            He trabajado durante 9 años como soldador, siendo un oficio que me
            gusta mucho, pero siempre he tenido más motivaciones y ganas de
            poder cambiar, ya que es un trabajo muy físico y al aire libre, por
            lo que las condiciones ambientales influyen mucho.
          </p>
          <p>
            Mi primera motivación fue estudiar animación 3D, una rama muy
            artística que me daba las herramientas para poder crear todo lo que
            pudiese imaginar, tanto en crearlo modelándolo, animándolo para que
            cobrase vida y programándolo para hacerlo funcional y poder
            manejarle. Por desgracia, acabé mis estudios en 2020, justo en la
            Pandemia, por lo que el sector que en España ya es reducido se vio
            gravemente mermada y por mucho que busqué mi oportunidad de entrar
            me fue imposible.{' '}
          </p>
          <p>
            Este año lo comencé con mal pie, ya que por una tendiditis tuve que
            tomarme una baja laboral, y con el tiempo que te da no tener
            trabajo, volví a ver que motivaciones me movían, y con la
            experiencia que tuve programando videojuegos, vi que el desarrollo
            web era otra manera artística de poder crear todo lo que quisiera,
            por lo que, al informarme de los cursos que había en el mercado
            decidí hacer un bootcamp con Hack a Boss.
          </p>
          <p>
            Estos 6 meses con el bootcamp fueron una montaña rusa de emociones,
            de ser capaz de todo y en otros momentos de nada, pero a base de
            aprender, hacer ejercicios y practicar conseguí aprobar el curso
            teniendo como proyecto final una aplicación de gimnasio totalmente
            funcional.
          </p>
        </div>
        <div className='titleInfo'>
          <h2>Hobbies</h2>
        </div>
        <div className='hobbies'>
          <div className='hobbiesFirst'>
            <div className='paragContainer'>
              <p className='paragraph'>
                Mi día a día es una amalgama emocionante de desafíos físicos,
                fascinación tecnológica y exploración constante. En el gimnasio,
                me sumerjo en la superación personal, empujando constantemente
                mis límites para alcanzar nuevos niveles de fortaleza y
                resistencia. Cada sesión se convierte en un campo de batalla
                donde mi determinación se encuentra con el hierro, y la
                satisfacción de superar obstáculos me impulsa a seguir adelante.
              </p>
              <img className='venusImg' src={Gimnasio} alt='' />
            </div>
          </div>
          <div className='hobbiesSecond'>
            <dir className='paragrContainer'></dir>
            <div className='alonso'>
              <img className='alonsoImg' src={alonso} alt='gif Alonso' />
            </div>
            <p className='paragraph'>
              La conexión con la tecnología no se limita solo a la pantalla, ya
              que también me apasiona la velocidad y la adrenalina,
              especialmente en el emocionante mundo de la Fórmula 1 y el
              karting. La velocidad y la precisión en la pista son un reflejo de
              mi búsqueda constante de perfección, ya sea en el circuito o en la
              vida cotidiana.
            </p>
          </div>
        </div>
        <div className='hobbies2'>
          <div className='hobbiesFirst'>
            <div className='paragContainer'>
              <p className='paragraph'>
                Cuando no estoy inmerso en el universo digital o desafiando mis
                límites en el gimnasio, me embarco en aventuras y viajes para
                explorar nuevos horizontes y sumergirme en diversas culturas.
                Acompañado por mi fiel compañera canina Venus, nuestras
                travesías nos llevan a las montañas, senderos y lugares remotos,
                donde encontramos la serenidad que solo la naturaleza puede
                ofrecer. La conexión con la tierra, el cielo y el paisaje
                circundante alimenta mi espíritu aventurero y proporciona un
                equilibrio necesario en mi vida.
              </p>
              <div className='venus'>
                <img className='venusImg' src={Venus} alt='' />
              </div>
            </div>
          </div>
          <div className='hobbiesSecond'>
            <div className='paragContainer'>
              <img className='alonsoImg' src={Futbol} alt='' />
              <p className='paragraph'>
                Mi afición por el fútbol agrega otra dimensión a mi vida, ya que
                he experimentado la emoción de jugar en el campo, compartiendo
                momentos memorables con amigos y compañeros de equipo. La
                combinación de habilidades tácticas, trabajo en equipo y pasión
                por el deporte ha dejado una marca indeleble en mi vida,
                contribuyendo a mi crecimiento personal y forjando valiosas
                amistades en el proceso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
