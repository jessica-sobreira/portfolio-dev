import { Link } from 'react-router-dom';
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../styles/contact.sass';
export const TextMe = () => {
    return (
        <>
        <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/aboutme'>Sobre</Link>
        <Link to='/projects'>Projetos</Link>
        <Link to='/contact'>Contato</Link>
        </div>

        <div className='title-contact'>
            <h1>Entre em contato</h1>
        </div>

        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(51) 99267-5630</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>j.jecristina@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Porto Alegre, Brasil</p>
                </div>
            </div>
            <div className="button-container">
                <button><a href='https://www.linkedin.com/in/jessicasobreira/' target="_blank">Linkedin</a></button>
                <button><a href='https://github.com/jessica-sobreira' target="_blank">GitHub</a></button>
                <button><a href='/pdf/JessicaSobreira.pdf' target="_blank">Download CV</a></button>
            </div>
            
        </section>

        </>
    )
}

