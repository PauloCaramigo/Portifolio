import Image from "next/image";

export default function SobreMim() {
    return (
        <section id="SobreMim" className="lg:flex lg:justify-between container mx-auto py-20">
            <div className="mr-10">
                <h1 className="text-4xl font-bold text-center lg:text-left">Paulo Domingues L. R. Caramigo</h1>
                <br/>

                <p>
                    Estudo programação desde os meus 17 anos, comecei a estudar sobre desenvolvimento por hobby já que sou apaixonado por jogos e queria criar os meus próprios jogos, pensando nesse objetivo passei a estudar programação com cursos online e quando terminei o ensino médio comecei a faculdade de Ciencia da Computação no qual expandiu meus conhecimentos sobre a área de desenvolvimento e até onde eu poderia ir.
                </p>
                <br/>
                <p>
                    Infelizmente devido a algumas situações parei por um tempo de estudar desenvolvimento, até que em 2026 voltei com foco total a ingressar definitivamente na área de desenvolvimento. Resolvi começar a estudar novamente do zero com o curso full-stack da EBAC, atualmente sigo em desenvolvimento web, focando principalmente em técnologias modernas e tendo a sempre dar uma atenção a mais em segurança de dados.
                </p>
            </div>
            
            <Image src="/image.png" alt="Foto de perfil" width="512" height="512" className="rounded-xl lg:rounded-l-full mt-10 lg:mt-0 m-auto"/>
            
        </section>
    )
}