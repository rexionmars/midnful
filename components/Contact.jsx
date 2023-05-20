import React from "react";

const ContactPage = () => {
    return (
        <div className="justify-center trs flex flex-row h-full w-full align-middle mb-10">
            <div className="align-middle w-[80%] justfy-center">
                <p className="text-gray-100 w-[85%] align-middle h-full m-auto text-xl">
                    Você gostou do nosso projeto sobre saúde mental?<br /><br />
                    Estamos sempre em busca de novas pessoas interessadas em participar ou fornecer feedback valioso.<br /><br />
                    Caso queira se envolver, colaborar ou simplesmente compartilhar suas ideias conosco, ficaremos muito felizes em ouvir você. Entre em contato através do nosso Instagram ou envie-nos um e-mail.<br />
                    No nosso Instagram, você pode encontrar mais informações sobre o projeto, atualizações sobre novos artigos e conteúdos relevantes relacionados à saúde mental. Siga-nos em <a href="https://www.instagram.com/mindfulexplorerproject/" target="_blank" className="text-pink-400 hover:text-pink-600 transition-all duration-500">@mindfulexplorerproject</a> para ficar por dentro de tudo.<br /><br />
                    Se preferir, também pode nos contatar diretamente por e-mail. Envie sua mensagem para <a href="mailto:MindfulExplorer.Project@gmail.com" className="text-sky-400 hover:text-sky-600 transition-all duration-500" >MindfulExplorer.Project@gmail.com</a> e teremos prazer em responder o mais breve possível.<br /><br />
                    Agradecemos desde já seu interesse e esperamos ter você como parte da nossa comunidade. Juntos, podemos promover uma abordagem mais consciente e saudável em relação à saúde mental.<br /><br />
                    <span className="text-xl font-medium">
                        Atenciosamente,
                        Equipe Mindful Explorer.
                    </span>
                    </p>
            </div>
        </div>
    )
}

export default ContactPage