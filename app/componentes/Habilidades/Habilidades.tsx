import Image from "next/image";

export default function Habilidades() {
    return (
        <section id="Habilidades" className="flex flex-col container justify-center items-center mx-auto my-20">
            <h1 className="text-2xl font-bold">Minhas habilidades/especialidades</h1>

            <div className="flex gap-4 mt-6">
                <Image src="/html.png" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64"/>
                <Image src="/css.webp" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64"/>
                <Image src="/React.png" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64"/>
                <Image src="/NextJS.png" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64"/>
                <Image src="/tailwindcss.webp" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64"/>
                <Image src="/github.png" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64"/>
            </div>
        </section>
    )
}