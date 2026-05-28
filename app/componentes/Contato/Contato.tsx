import Link from "next/link";

export default function Contato() {
    return (
        <section id="Contato" className="flex flex-col container my-10 mx-auto">
            <form className="flex flex-col items-center">
                <span><b>Entre em contato por:</b></span>

                <div className="flex flex-col">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" className="border w-100 h-10 px-2 py-4 focus:bg-gray-900"/>
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" className="border w-100 h-10 px-2 py-4 focus:bg-gray-900"/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea name="mensagem" id="mensagem" className="border w-100 h-30 px-2 py-4 focus:bg-gray-900"></textarea>
                </div>

                <button className="flex justify-center items-center border w-100 h-10 mt-2 px-2 py-4 bg-gray-800 hover:bg-gray-900 hover:cursor-pointer">Enviar</button>
            </form>
        </section>
    )
}