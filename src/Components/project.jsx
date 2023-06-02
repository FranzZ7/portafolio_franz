
import data from './Data/card.json';

const Projects = () => {
  return (
    <>
    <div className="cards-title">
        <h1>MI TRABAJO</h1>
    </div>
    <div className='contenedor-card'>
        
      {data.clases.map((semana, index) => (
        <div key={index} className="card-s">
          <h3> {semana.semana}</h3>
          <div className="card-s-p">
            <p><strong>TEMA </strong><br/> {semana.tema}</p>
            <p><strong>DEFINICION </strong><br/> {semana.definicion}</p>
            <p><strong>PROCEDIMIENTO </strong><br/>  {semana.procedimientos}</p>
            <p><strong>RESULTADO </strong> <br/> {semana.resultado}</p>
          </div>
          <a href={semana.url} key={index}><button>Ver Proyecto</button></a>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default Projects;
