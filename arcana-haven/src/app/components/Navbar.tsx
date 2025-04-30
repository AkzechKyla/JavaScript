import Link from "next/link";

export default function Navbar() {
  return <>
        <nav className="flex flex-col items-center justify-center text-center">
            <Link href="/" className="text-2xl font-bold">Personal</Link>
            <ul>
                <Link href="/collection"><li className="text-lg">Reading Collection</li></Link>
                <Link href="/"><li className="text-lg">Sign Out</li></Link>
            </ul>
            <Link href="/tarot" className="text-2xl font-bold">Tarot Reading</Link>
            <ul>
                <Link href="/tarot/general"><li className="text-lg">General Tarot</li></Link>
                <Link href="/tarot/ask-question"><li className="text-lg">Ask a Question</li></Link>
                <Link href="/tarot/yes-no"><li className="text-lg">Yes/No Tarot</li></Link>
            </ul>
            <Link href="/cards" className="text-2xl font-bold">Card Meanings</Link>
            <ul>
                <Link href="/cards/major"><li className="text-lg">Major Arcana</li></Link>
                <Link href="/cards/wands" ><li className="text-lg">Wands</li></Link>
                <Link href="/cards/cups"><li className="text-lg">Cups</li></Link>
                <Link href="/cards/swords"><li className="text-lg">Swords</li></Link>
                <Link href="/cards/pentacles"><li className="text-lg">Pentacles</li></Link>
            </ul>
        </nav>
    </>
}
