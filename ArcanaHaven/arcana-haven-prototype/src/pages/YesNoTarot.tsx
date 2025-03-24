import { useState, useEffect } from "react";
import { TarotDeck } from "../models/TarotDeck";
import TarotCard from "../components/TarotCard"

export default function YesNoTarot() {
    const [deck, setDeck] = useState<TarotDeck | null>(null);
    const [selectedCards, setSelectedCards] = useState<{
        name: string;
        image: string;
        meaning: string;
        position: string
    }[]>([]);
    const [readingResult, setReadingResult] = useState<{
        card: string;
        boolean: string;
        reading: string;
    } | null>(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        async function loadDeck() {
            const deck = await TarotDeck.fetchDeck();
            deck.shuffle();
            setDeck(deck);
        }

        loadDeck();
    }, []);

    function handleCardSelect(cardName: string) {
        if (!deck || selectedCards.length >= 1 || selectedCards.some(c => c.name === cardName)) return;

        const card = deck.getCardByName(cardName);
        if (card) {
            setSelectedCards(prev => [...prev, {
                ...card,
                position: deck.getRandomPosition()
            }]);
        }
    }

    function resetSelection() {
        if (!deck) return;

        deck.shuffle();
        setDeck(new TarotDeck([...deck.cards]));
        setSelectedCards([]);
        setReadingResult(null);
    }

    async function handleGetReading() {
        if (selectedCards.length !== 1) return;
        setLoading(true);
        try {
            const result = await TarotDeck.getYesNoTarotReading(selectedCards[0]);
            setReadingResult({
                card: result.card,
                boolean: result.boolean,
                reading: result.reading,
            });
        } catch (error) {
            console.error("Error fetching tarot reading:", error);
        }
        setLoading(false);
    }

    return (
        <div className="max-w-lg mx-auto text-center">
            <h1 className="text-4xl font-bold text-purple-700 my-6">Yes/No Tarot</h1>
            <p className="font-bold">Thinking about your question</p>
            <p className="italic">Select 1 card</p>

            {/* Display Tarot Deck */}
            <div className="grid grid-cols-3 gap-4 mt-6">
                {deck?.cards.map((card) => (
                    <TarotCard
                        key={card.name}
                        card={card}
                        onSelect={() => handleCardSelect(card.name)}
                        isSelected={selectedCards.some(c => c.name === card.name)}
                        isDisabled={selectedCards.length >= 1}
                    />
                ))}
            </div>

            {/* Display Selected Cards */}
            {selectedCards.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold">Your Selected Card:</h3>
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

                    {/* Tarot Reading Input and Button */}
                    <button
                        onClick={handleGetReading}
                        disabled={selectedCards.length !== 1 || loading}
                        className={`mt-4 px-4 py-2 font-bold rounded-lg shadow-md ${selectedCards.length !== 1 || loading
                                ? "bg-gray-400 text-white cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                    >
                        {loading ? "Getting Reading..." : "Get Reading"}
                    </button>

                    {/* Display Reading Result */}
                    {readingResult && (
                        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                            <h3 className="text-lg font-bold">Your Tarot Reading:</h3>
                            <p><strong>Card:</strong> {readingResult.card}</p>
                            <p><strong>Answer:</strong> {readingResult.boolean}</p>
                            <p><strong>Interpretation:</strong> {readingResult.reading}</p>
                        </div>
                    )}

                    <button
                        onClick={resetSelection}
                        className="mt-6 px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700"
                    >
                        Try Another Reading
                    </button>
                </div>
            )}
        </div>
    );
}
