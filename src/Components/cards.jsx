import data from './Data/card.json'
import Icons from './icons.jsx';

function Cards(){
    return(
        <>
            <div className='ctn-cards'>
                <div className="intro">
                    <h1>Sobre Mi</h1>
                    <p>Bienvenido a mi portafolio, Soy un estudiante de
                         la carrera Ingeniería de Sistemas apasionado
                          por el desarrollo de software.Soy una persona 
                          curiosa y siempre estoy dispuesto a aprender nuevas
                          tecnologías y herramientas. Disfruto resolviendo desafíos
                          y trabajo en equipo para encontrar soluciones eficientes.</p>
                </div>
                <div className="cards-title">
                    <h1>{data.title}</h1>
                </div>
                <div className='contenedor-card'>
                {data.items.map((item,index) =>(
                    <div className="card" key={index}>
                        <h2>{item.titulo}</h2>
                        <ul>
                        {Object.entries(item).map(([key,value]) =>{
                            if(key !== 'titulo'){
                                return(
                                    <li key={key}>
                                        {value}
                                    </li>
                                );
                            }
                            return null;
                        })}
                        </ul>
                    </div>
                    
                ))}
                <div className="icon">
                    <h2>Contacto:</h2>
                               <Icons />
                </div>
                </div>
            </div>
        </>
    )    
}
export default Cards