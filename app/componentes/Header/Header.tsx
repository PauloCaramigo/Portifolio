import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed flex justify-between w-full items-center px-4 py-2 bg-linear-to-b from-gray-400 to-transparent">
            <h1 className="text-2xl font-bold">Portifólio</h1>

            <nav className="flex gap-4">
                <Link href="#SobreMim" className="hover:scale-105 hover:font-bold">Sobre mim</Link>
                <Link href="#Projetos" className="hover:scale-105 hover:font-bold">Projetos</Link>
                <Link href="#Contato" className="hover:scale-105 hover:font-bold">Contato</Link>
            </nav>
        </ header>
    )
}