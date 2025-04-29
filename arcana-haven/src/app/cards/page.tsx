export default function CardMeanings() {
    const cardCategories = ["Major Arcana", "Wands", "Cups", "Swords", "Pentacles"];

    return <div className="flex flex-col justify-center text-center">
    	<h1 className="text-3xl font-bold underline">Card Meanings</h1>
        <div className="flex justify-center items-center flex-wrap gap-4 mt-4">
            {cardCategories.map((category, index) => (
                <button
                    key={index}
                    className="w-48 h-64 border border-gray-300 rounded-lg shadow-md text-base font-medium flex items-center justify-center cursor-pointer hover:opacity-60">
                    {category}
                </button>
            ))}
        </div>
    </div>
}
