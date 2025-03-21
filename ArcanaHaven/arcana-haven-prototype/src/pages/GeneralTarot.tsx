import { useState, useEffect } from "react";
import { TarotDeck } from "../models/TarotDeck";
import TarotCard from "../components/TarotCard"

export default function GeneralTarot() {
    const [deck, setDeck] = useState<TarotDeck | null>(null);
    const [selectedCards, setSelectedCards] = useState<{
        name: string;
        image: string;
        meaning: string;
        position: string
     }[]>([]);

    useEffect(() => {
        TarotDeck.fetchDeck().then(setDeck);
    }, []);

    function handleCardSelect(cardName: string) {
        if (!deck || selectedCards.length >= 3 || selectedCards.some(c => c.name === cardName)) return;

        const card = deck.getCardByName(cardName);
        if (card) {
            setSelectedCards(prev => [...prev, {
                ...card,
                position: deck.getRandomPosition()
            }]);
        }
    }

    function resetSelection() {
        setSelectedCards([]);
    }

    return (
        <div className="max-w-lg mx-auto text-center">
            <h1 className="text-4xl font-bold text-purple-700 my-6">General Tarot</h1>
            <p className="font-bold">Think about your life situation</p>
            <p className="italic">Select 3 cards</p>

            {/* Display Tarot Deck */}
            <div className="grid grid-cols-3 gap-4 mt-6">
                {deck?.cards.map((card) => (
                    <TarotCard
                        key={card.name}
                        card={card}
                        onSelect={() => handleCardSelect(card.name)}
                        isSelected={selectedCards.some(c => c.name === card.name)}
                        isDisabled={selectedCards.length >= 3}
                    />
                ))}
            </div>

            {/* Display Selected Cards */}
            {selectedCards.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold">Your Selected Cards:</h3>
                    <div className="flex justify-center gap-4 mt-4">
                        {selectedCards.map((card, index) => (
                            <div key={index} className="text-center">
                                <img src={card.image} alt={card.name} className="w-32 h-48 mx-auto border rounded-lg shadow-md" />
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
