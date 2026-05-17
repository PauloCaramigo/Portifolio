import Image from "next/image";

export default function Habilidades() {
    return (
        <section id="Habilidades" className="flex flex-col container justify-center items-center mx-auto my-20">
            <h1 className="text-2xl font-bold">Minhas habilidades/especialidades</h1>

            <div className="flex gap-4 mt-6">
                <Image src="https://placehold.co/64x64" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64" unoptimized/>
                <Image src="https://placehold.co/64x64" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64" unoptimized/>
                <Image src="https://placehold.co/64x64" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64" unoptimized/>
                <Image src="https://placehold.co/64x64" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64" unoptimized/>
                <Image src="https://placehold.co/64x64" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64" unoptimized/>
                <Image src="https://placehold.co/64x64" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64" unoptimized/>
                <Image src="https://placehold.co/64x64" alt="Imagem da tecnologia" title="Imagem da tecnologia" width="64" height="64" unoptimized/>
            </div>
        </section>
    )
}