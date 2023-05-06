import React from "react";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="team-section">
            <div className="sec-container">
                <div className="docker-title p-6 container mx-auto mb-10 h-auto min-h-full rounded-xl">
            <div className="row-sec">
                    <h1 className="font-semibold font-varela text-center text-6xl text-sky-400">O que é o projeto MINDFUL EXPLORER</h1>
                    <div className="flex justify-center p-8">
                        <p className="text-2xl text-gray-500 text-center" >
                            Nossa equipe busca auxiliar pessoas com problemas ou duvidas sobre saúde mental tendo como
                            publico alvo toda e qualquer pessoa que sinta curiosidade ou necessite de informações de
                            profissionais confiáveis e competentes sobre o tema.
                            Tendo isso em vista criamos um blog onde contaremos com a ajuda de profissionais na area da
                            psiquiatria para exibir suas ideias, noticias e fatos que podem não ser de conhecimento comum
                            da população sobre as mazelas causadas pelas doenças mentais.<br/><br/>
                            Com esse projeto os profissionais da área que estão começando ou ate mesmo aqueles que já tem
                            uma carreira estabelecida podem participar de um projeto de cunho SOCIAL.
                            Notasse, que os mitos em torno deste tema abordado podem ser desmitificados com o auxilio dos
                            profissionais envolvidos.
                        </p>
                    </div>
                </div>
            </div>
                <h1 className="font-semibold font-varela text-center text-6xl text-sky-400">Idealizadores do projeto</h1>
            <div className="team-card">
                {/* Pessoa 1 */}
                <div className="card">
                    <div className="image-section">
                        <img
                          className="align-middle rounded-full"
                        //   src='https://avatars.githubusercontent.com/u/131300370?v=4'
                          src='./p2.png'
                        />
                    </div>
                    <div className="content">
                        <h3>Leonardi</h3>
                        <label className="bg-purple-400 text-purple-700 p-1 px-2 border rounded-xl border-none"><span className="text-red-700 bg-zinc-800 px-1 rounded-lg text-center font-medium">MVP</span> Developer and Maintainer</label>
                        <p className="font-sacramento text-2xl">One of the creators and maintainers of the MINDFUL EXPLORER project</p>
                    </div>
                </div>

                {/* Pessoa 2 */}
                <div className="card ">
                    <div className="image-section">
                        <img
                          className="align-middle rounded-full"
                          src='/p6.jpg'
                        />
                    </div>
                    <div className="content">
                        <h3>Antônio Neves</h3>
                        <label className="bg-green-300 text-green-500 p-1 px-2 border rounded-xl border-none">User Interface</label>
                        <p>tenho 19 anos e sou responsável pela gestão das redes sociais do projeto Mindfull Explorer. Estou no 1 período do curso de Engenharia de Software no ICEV. Minha finalidade é expor o projeto para o público alvo por meio dos canais de comunicação, com o objetivo de divulgar o nosso Blog.</p>
                    </div>
                </div>

                {/* Pessoa 3 */}
                <div className="card">
                    <div className="image-section">
                        <img
                          className="align-middle rounded-full"
                          src='/p3.jpg'
                        />
                    </div>
                    <div className="content">
                        <h3>Beatriz Barreto</h3>
                        <label className="bg-pink-400 text-pink-700 p-1 px-2 border rounded-xl border-none">Coordenadorar</label>
                        <p>Sou a coordenadorado projeto, tenho 18 anos e faço Engenharia de software no icev. Meu objetivo com o projeto é espalhar informações sobre saúde mental para todos, independente de classe social, cor e gênero.</p>
                    </div>
                </div>

                {/* Pessoa 4 */}
                <div className="card">
                    <div className="image-section">
                        <img
                          className="align-middle rounded-full"
                          src='/p2.jpg'
                        />
                    </div>
                    <div className="content">
                        <h3>Cristovam</h3>
                        <label className="bg-red-400 p-1 px-2 text-red-700 border rounded-xl border-none">Product Manager</label>
                        <p>Tenho 19 anos e curso  o primeiro período do curso de engenharia de software no ICEV. Meu objetivo em participar neste projeto é fazer com que informações sobre saúde mental chegue ao máximo numero de pessoas mostrando para elas que não estão sozinhas nessa caminhada</p>
                    </div>
                </div>

                {/* Pessoa 5 */}
                <div className="card">
                    <div className="image-section">
                        <img
                          className="align-middle rounded-full"
                          src='/p5.jpg'
                        />
                    </div>
                    <div className="content">
                        <h3>Wickham</h3>
                        <label className="bg-indigo-400 p-1 px-2 text-indigo-700 border rounded-xl border-none">User Experience</label>
                        <p>Sou responsável pela experiência do usuário no projeto Mindful Explorer. Atualmente, estou no primeiro período do curso de Engenharia de Software no ICEV e tenho 19 anos. A minha principal finalidade com este projeto é proporcionar às pessoas mais informações sobre saúde mental, contribuindo para o bem-estar social e ajudando-as a se conhecerem melhor. Estou animado em fazer parte deste projeto e espero poder contribuir para melhorar a vida das pessoas.</p>
                    </div>
                </div>

                {/* Pessoa 6 */}
                <div className="card">
                    <div className="image-section">
                        <img
                          className="align-middle rounded-full"
                          src='/p4.jpg'
                        />
                    </div>
                    <div className="content">
                        <h3>Guilherme</h3>
                        <label className="bg-orange-400 p-1 px-2 text-orange-700 border rounded-xl border-none">Product Owner</label>
                        <p>Sou o Guilherme Werneck Project Owner do projeto, tenho 21 anos e faço o 1° Período de Engenharia de Software no iCEV. Meu objetivo com o projeto é fazer com que as pessoas obtenham informações sobre a saúde mental e que todos possam adquirir esse conhecimento. Fazendo com que ajude as pessoas a se sentirem confortáveis sabendo com que saibam que podem ser ajudadas.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutPage