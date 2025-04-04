export default function Home() {
  return <div className="flex flex-col justify-center text-center">
	<h1 className="text-3xl font-bold underline">Arcana Haven Prototype</h1>
	<nav>
		<p className="text-xl font-bold">Personal</p>
		<ul>
			<li>Reading Collection</li>
			<li>Sign Out</li>
		</ul>
		<p className="text-xl font-bold">Tarot Readings</p>
		<ul>
			<li>General Tarot</li>
			<li>Ask a Question</li>
			<li>Yes/No Tarot</li>
		</ul>
		<p className="text-xl font-bold">Card Meanings</p>
		<ul>
			<li>Major Arcana</li>
			<li>Wands</li>
			<li>Cups</li>
			<li>Swords</li>
			<li>Pentacles</li>
		</ul>
	</nav>
  </div>
}
