import Link from "next/link";

export default function Navbar() {
  return <>
        <nav>
            <Link href="/" className="text-xl font-bold">Personal</Link>
            <ul>
                <Link href="/collection"><li>Reading Collection</li></Link>
                <Link href="/"><li>Sign Out</li></Link>
            </ul>
            <Link href="/tarot" className="text-xl font-bold">Tarot Reading</Link>
            <ul>
                <Link href="/tarot/general"><li>General Tarot</li></Link>
                <Link href="/tarot/ask-question"><li>Ask a Question</li></Link>
                <Link href="/tarot/yes-no"><li>Yes/No Tarot</li></Link>
            </ul>
            <Link href="/cards" className="text-xl font-bold">Card Meanings</Link>
            <ul>
                <Link href="/cards/major"><li>Major Arcana</li></Link>
                <Link href="/cards/wands" ><li>Wands</li></Link>
                <Link href="/cards/cups"><li>Cups</li></Link>
                <Link href="/cards/swords"><li>Swords</li></Link>
                <Link href="/cards/pentacles"><li>Pentacles</li></Link>
            </ul>
        </nav>
    </>
}
