import './lenguages.css'; // Asegúrate de crear este archivo

const Lenguages = ({ idioma, nivel }) => {
  const niveles = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  return (
    <div className='medidor'>
      <div className='idioma'>{idioma}</div>
      {niveles.map((etiqueta, index) => (
        <div
          key={index}
          className={`barra ${index < nivel ? 'activo' : ''}`}
          style={{ width: `${100 / niveles.length}%` }}
        >
          {etiqueta}
        </div>
      ))}
    </div>
  );
};

export default Lenguages;
