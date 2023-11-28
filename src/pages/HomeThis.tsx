import { Link } from 'react-router-dom';
import '../styles/home.sass';

export const Home = () => {
    return (
    <>

       <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/aboutme'>Sobre</Link>
        <Link to='/projects'>Projetos</Link>
        <Link to='/contact'>Contato</Link>
        </div>     


        <section id="home-container">
            <div className="home-text">
            <h1>Olá, eu sou a <br></br>
            <span>Jéssica Sobreira</span></h1>
              <p>Desenvolvedora Web</p>

            <div className="button-container">
                <button><a href='https://www.linkedin.com/in/jessicasobreira/' target="_blank">Linkedin</a></button>
                <button><a href='https://github.com/jessica-sobreira' target="_blank">GitHub</a></button>
                <button><a href='/pdf/JessicaSobreira.pdf' target="_blank">Download CV</a></button>
            </div>

            </div>

            <div className="home-img">
                <img src="https://avatars.githubusercontent.com/u/117686537?v=4" alt="Jéssica Sobreira" />
            </div>

        </section>




        </>
    )
}

