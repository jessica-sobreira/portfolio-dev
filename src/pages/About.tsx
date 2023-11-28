import { Link } from 'react-router-dom';
import '../styles/aboutme.sass';

export const Aboutme = () => {
    return (
        <>
        <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/aboutme'>Sobre</Link>
        <Link to='/projects'>Projetos</Link>
        <Link to='/contact'>Contato</Link>
        </div>     


        <div id='about'>
            <h1>Sobre mim</h1>
                <p>Sou Jéssica Sobreira, uma jornalista apaixonada por comunicação e, atualmente, em transição para a área de Tecnologia da Informação. Minha jornada começou na Universidade do Vale do Rio dos Sinos (Unisinos), onde me formei em Jornalismo, e posteriormente, busquei aprimorar meus conhecimentos com duas pós-graduações pela Uniasselvi, nas áreas de Comunicação Empresarial e Marketing Digital. Desde 2011, venho construindo minha carreira, com experiências em assessorias de imprensa, cobertura de eventos, produção de reportagens para diferentes mídias, e também no universo do marketing digital.</p>
                <br></br>
                <p>A constante busca por aperfeiçoamento profissional me levou a uma fascinante transição para a área de Tecnologia da Informação. Atualmente, estou imersa nos estudos de Front-end na renomada escola Alura, além de participar da 15ª edição do Programa Starter da Growdev, focado em Full Stack Development. Paralelamente, estive engajada no Bootcamp Potência Tech iFood da DIO.</p>
                <br></br>
                <p>Ao me deparar com o Front-end, descobri uma paixão pela criação de landing pages, relembrando o processo de diagramação de um jornal. Essa percepção fortaleceu meu interesse na relação entre Comunicação e Tecnologia, motivando-me a explorar mais a fundo esse universo.</p>
                <br></br>
                <p>Minha trajetória na Growdev tem sido inspiradora, proporcionando-me a oportunidade de estudar as principais tecnologias exigidas pelo mercado, como HTML, CSS, JavaScript, TypeScript e React.</p>
                <br></br>
                <p>Estou empolgada com a possibilidade de unir minha bagagem em comunicação à expertise em TI, buscando contribuir de forma inovadora no cenário tecnológico. Convido você a acompanhar minha jornada de evolução e descobertas! </p>

        </div>
        </>
    )
}

