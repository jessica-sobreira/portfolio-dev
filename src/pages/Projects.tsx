import { Link } from 'react-router-dom';
import '../styles/projects.sass';

export const Project = () => {
    return (
        <>
        <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/aboutme'>Sobre</Link>
        <Link to='/projects'>Projetos</Link>
        <Link to='/contact'>Contato</Link>
        </div>

        <div className='title-projects'>
            <h1>Projetos</h1>
        </div>

        <div className='projects-container'>
            
            <div className='boxes'>   
                <div className="description">
                    <h2>The News</h2>
                    <p>Uma aplicação web baseada em React que busca artigos de notícias de uma API externa e os exibe de maneira organizada.
                        <br></br>São utilizados Axios para requisições à API e CSS para estilos.
                    </p>
                    <button className='button-description'><a href="https://the-news-lake.vercel.app/" target="_blank">Ver Página</a></button>
                </div>
                <div className='box'>
                    <img src="/news.png" alt="The News" />
                </div>
            </div>

            <div className='boxes'>   
                <div className="description">
                    <h2>Dragon Ball</h2>
                    <p>Aplicação React com Vite, TypeScript e Styled Components. Ícones importados de react-icons.
                        <br></br>O código apresenta uma estrutura simples e modularizada para facilitar a manutenção e expansão.
                    </p>
                    <button className='button-description'><a href="https://dragon-ball-cyan.vercel.app/" target="_blank">Ver Página</a></button>
                </div>
                <div className='box'>
                    <img src="/dragon-ball.png" alt="Dragon Ball" />
                </div>
            </div>

            <div className='boxes'>   
                <div className="description">
                    <h2>Grupo Eficiência</h2>
                    <p>Trabalho sobre soft skills realizado pelos growdevers: Gabriel, Jéssica, Stephan, Tanara e Yuri.
                        <br></br>Nesta atividade com React, foi criada uma página individual para cada colega, 
                        <br></br>destacando suas soft skills e proporcionando navegação entre os perfis por meio de botões de acesso rápido.
                    </p>
                    <button className='button-description'><a href="https://eficiencia.vercel.app/" target="_blank">Ver Página</a></button>
                </div>
                <div className='box'>
                    <img src="/eficiencia.png" alt="Grupo Eficiência" />
                </div>
            </div>

            <div className='boxes'>   
                <div className="description">
                    <h2>Busque Carros</h2>
                    <p>Este projeto é uma aplicação simples para buscar, adicionar, editar e remover informações sobre carros.
                        <br></br>Tecnologias utilizadas: React, TypeScript, Vite e CSS.
                    </p>
                    <button className='button-description'><a href="https://busque-carros.vercel.app/" target="_blank">Ver Página</a></button>
                </div>
                <div className='box'>
                    <img src="/busque-carros.png" alt="Busque Carros" />
                </div>
            </div>




        </div>
        </>
    )

}
