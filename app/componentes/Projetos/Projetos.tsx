import Image from "next/image";

export default function Projetos() {
    return (
        <section id="Projetos" className="container mx-auto">
            {/*Projeto 1 */}
            <div className="flex">
            <Image src="https://placehold.co/192x192" alt="Imagem do projeto" width="192" height="192" unoptimized/>

            <div className="ml-8">
                <h1 className="text-2xl font-bold">TITULO DO PROJETO</h1>
                <span>
                Aqui ficaria uma breve descrição do projeto a ser apresentado, com um objetivo e aprendizado referente ao projeto.
                </span>
            </div>
            </div>

            {/*Projeto 2 */}
            <div className="flex justify-end">
            <div className="mr-8">
                <h1 className="text-2xl font-bold">TITULO DO PROJETO</h1>
                <span>
                Aqui ficaria uma breve descrição do projeto a ser apresentado, com um objetivo e aprendizado referente ao projeto.
                </span>
            </div>

            <Image src="https://placehold.co/192x192" alt="Imagem do projeto" width="192" height="192" unoptimized/>
            </div>

            {/*Projeto 3 */}
            <div className="flex">
            <Image src="https://placehold.co/192x192" alt="Imagem do projeto" width="192" height="192" unoptimized/>

            <div className="ml-8">
                <h1 className="text-2xl font-bold">TITULO DO PROJETO</h1>
                <span>
                Aqui ficaria uma breve descrição do projeto a ser apresentado, com um objetivo e aprendizado referente ao projeto.
                </span>
            </div>
            </div>
        </section>
    )
}