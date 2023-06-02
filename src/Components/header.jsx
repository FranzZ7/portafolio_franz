import foto from './img/fotoperfil.jpeg'
import Icons from './icons.jsx'

function Header(){
    
    return(
        <>
            <div className='ctn-title'>
            <div className='title'>
                    <h1>PORTAFOLIO ELECTRONICO</h1>
                    <h2>Franzua Gohan Antezano Rojas </h2>
                            
                </div>
                <img src={foto} alt="" />
            </div>
        </>
    )

}
export default Header