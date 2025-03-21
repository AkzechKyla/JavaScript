import { useState } from "react";

const tarotDeck = [
    { name: "The Fool", image: "/cards/the_fool.jpg", meaning: "New beginnings, innocence, spontaneity" },
    { name: "The Magician", image: "/cards/the_magician.jpg", meaning: "Manifestation, power, resourcefulness" },
    { name: "The High Priestess", image: "/cards/the_high_priestess.jpg", meaning: "Intuition, wisdom, mystery" },
    { name: "The Empress", image: "/cards/the_empress.jpg", meaning: "Abundance, nurturing, fertility" },
    { name: "The Emperor", image: "/cards/the_emperor.jpg", meaning: "Authority, structure, stability" },
    { name: "The Hierophant", image: "/cards/the_hierophant.jpg", meaning: "Tradition, guidance, spirituality" },
];

function GeneralTarot() {
    const [selectedCards, setSelectedCards] = useState<{
        name: string;
        image: string;
        meaning: string;
        position: string;
     }[]>([]);

    const handleCardSelect = (card: { name: string; image: string; meaning: string }) => {
        if (selectedCards.length < 3 && !selectedCards.find(c => c.name === card.name)) {
            setSelectedCards([...selectedCards, { ...card, position: Math.random() > 0.5 ? "Upright" : "Reversed" }]);
        }
    };

    function resetSelection() {
        setSelectedCards([]);
    }

    return (
        <div className="max-w-lg mx-auto text-center">
            <div className="text-4xl font-bold text-purple-700 my-6">
                General Tarot
            </div>
            <p className="font-bold">Think about your life situation</p>
            <p className="italic">Select 3 cards</p>

            {/* Card Selection Grid */}
            <div className="grid grid-cols-3 gap-4 mt-6">
                {tarotDeck.map((card) => (
                    <button
                        key={card.name}
                        onClick={() => handleCardSelect(card)}
                        disabled={selectedCards.length >= 3}
                        className={`p-2 border rounded-lg shadow-md transition-all hover:scale-105 ${
                            selectedCards.find(c => c.name === card.name) ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                        }`}
                    >
                        <img src={card.image} alt={card.name} className="w-24 h-36 mx-auto"/>
                        <p className="mt-2 font-semibold">{card.name}</p>
                    </button>
                ))}
            </div>

            {/* Display Selected Cards */}
            {selectedCards.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold">Your Selected Cards:</h3>
                    <div className="flex justify-center gap-4 mt-4">
                        {selectedCards.map((card, index) => (
                            <div key={index} className="text-center">
                                <img src={card.image} alt={card.name} className="w-32 h-48 mx-auto border rounded-lg shadow-md"/>
                                <p className="mt-2 font-semibold">{card.name}</p>
                                <p className="text-sm italic text-gray-600">{card.position}</p>
                                <p className="text-xs text-gray-500 mt-1">{card.meaning}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={resetSelection}
                        className="mt-6 px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700"
                    >
                        Reset Selection
                    </button>
                </div>
            )}
        </div>
    );
}

export default GeneralTarot;
