import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-4 bg-gray-950">
            <ul>
                <li>Linkedin: <Link href="https://www.linkedin.com/in/paulo-domingues-149a93203/" target="_blank">Paulo Domingues</Link></li>
                <li>Email: paulo.domingues.caramigo@gmail.com</li>
                <li>GitHub: <Link href="https://github.com/PauloCaramigo" target="_blank">Paulo Domingues</Link></li>
            </ul>
        </footer>
    )
}