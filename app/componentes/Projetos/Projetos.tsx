import Image from "next/image";
import Link from "next/link";

export default function Projetos() {
    return (
        <section id="Projetos" className="container mx-auto">
            {/*Projeto 1 */}
            <Link href="https://github.com/PauloCaramigo/Exercicio-26-EBAC.git" target="_blank" className="flex shadow-lg shadow-white m-4 p-2 border rounded-lg hover:scale-102">
                <Image src="https://placehold.co/192x192" alt="Imagem do projeto" width="192" height="192" unoptimized/>

                <div className="ml-8">
                    <h1 className="text-2xl font-bold">Exercicio sobre Micro Front-End</h1>
                    <span>
                        Neste projeto foi realizado um exercicio para aprender mais sobre micro front-ends, utilizando o framework Module-Federation. Infelizmente este framework foi depreciado para o NextJS, o que resultou em muitos problemas em relação as versões utilizadas. Porém no fim ao entender o erro e utilizar as versões certas, foi feito corretamente a atividade. Projeto não tem estilização pois o objetivo principal era somente entender como funciona um micro front-end, então optei por ignorar a estilização e me concentrar em entender melhor o funcionamento do micro front-end e na resolução dos problemas que estava tendo.
                    </span>
                </div>
            </Link>

            {/*Projeto 2 */}
            <Link href="https://github.com/PauloCaramigo/Exercicio-24-EBAC.git" target="_blank" className="flex justify-between shadow-lg shadow-white m-4 p-2 border rounded-lg hover:scale-102">
                <div className="mr-8">
                    <h1 className="text-2xl font-bold">Exercicio sobre a implementação de PWA</h1>
                    <span>
                        Este projeto tem como objetivo o estudo e aprendizado sobre o PWA e fazer o site desenvolvido funcionar sem a necessidade de uma conexão com a internet. Para isso foi utilizado apenas javascript e utilizado localStorage para armazenar informações localmente para assim manter as informações inseridas pelos usuários.
                    </span>
                </div>

                <Image src="https://placehold.co/192x192" alt="Imagem do projeto" width="192" height="192" unoptimized/>
            </Link>

            {/*Projeto 3 */}
            <Link href="https://github.com/PauloCaramigo/Exercicio-23-EBAC.git" target="_blank" className="flex shadow-lg shadow-white m-4 p-2 border rounded-lg hover:scale-102">
                <Image src="https://placehold.co/192x192" alt="Imagem do projeto" width="192" height="192" unoptimized/>

                <div className="ml-8">
                    <h1 className="text-2xl font-bold">Exercicio sobre Pipeline CI/CD</h1>
                    <span>
                        Projeto realizado usando com base um site simples de registro de tarefas. O objetivo principal do exercicio era aprender a configurar e realizar uma pipeline, realizando testes e deploys de forma automatizada ao realizar o push para o github das alterações realizadas no projeto.
                    </span>
                </div>
            </Link>
        </section>
    )
}