import Image from "next/image";

export default function SobreMim() {
    return (
        <section id="SobreMim" className="flex container mx-auto justify-between py-20">
            <div>
                <h1 className="text-4xl font-bold">Paulo Domingues L. R. Caramigo</h1>

                <p>
                    Aqui ficará uma breve descrição sobre mim
                </p>
            </div>

            <Image src="https://placehold.co/512x512" alt="Foto de perfil" width="512" height="512" unoptimized/>
        </section>
    )
}