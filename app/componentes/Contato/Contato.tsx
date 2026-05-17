import Link from "next/link";

export default function Contato() {
    return (
        <section id="Contato" className="flex flex-col container my-10 mx-auto">
            <span><b>Entre em contato por:</b></span>

            <ul>
                <li>Linkedin: <Link href="https://www.linkedin.com/in/paulo-domingues-149a93203/" target="_blank">Paulo Domingues</Link> </li>
                <li>Email: paulo.domingues.caramigo@gmail.com</li>
                <li>GitHub: <Link href="https://github.com/PauloCaramigo" target="_blank">Paulo Domingues</Link></li>
            </ul>
        </section>
    )
}