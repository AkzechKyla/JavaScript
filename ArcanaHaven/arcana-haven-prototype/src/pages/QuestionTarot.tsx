import { useState, useEffect } from "react";
import { TarotDeck } from "../models/TarotDeck";
import TarotCard from "../components/TarotCard"

export default function QuestionTarot() {
    const [deck, setDeck] = useState<TarotDeck | null>(null);
    const [selectedCards, setSelectedCards] = useState<{
        name: string;
        image: string;
        meaning: string;
        position: string
    }[]>([]);
    const [userQuestion, setUserQuestion] = useState("");
    const [readingResult, setReadingResult] = useState<{
        past: string;
        present: string;
        future: string
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
        if (!deck) return;

        deck.shuffle();
        setDeck(new TarotDeck([...deck.cards]));
        setSelectedCards([]);
        setReadingResult(null);
    }

    async function handleGetReading() {
        if (!userQuestion || selectedCards.length !== 3) return;
        setLoading(true);
        try {
            const result = await TarotDeck.getTarotReading(userQuestion, selectedCards);
            setReadingResult({
                past: result["past"]["reading"],
                present: result["present"]["reading"],
                future: result["future"]["reading"],
            });
        } catch (error) {
            console.error("Error fetching tarot reading:", error);
        }
        setLoading(false);
    }

    return (
        <div className="max-w-lg mx-auto text-center">
            <h1 className="text-4xl font-bold text-purple-700 my-6">Ask a Question Tarot</h1>
            <input
                type="text"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                placeholder="Enter your question..."
                className="w-full p-2 border rounded-lg mt-4"
            />
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

                    {/* Tarot Reading Input and Button */}
                    <button
                        onClick={handleGetReading}
                        disabled={!userQuestion || selectedCards.length !== 3 || loading}
                        className={`mt-4 px-4 py-2 font-bold rounded-lg shadow-md ${
                            !userQuestion || selectedCards.length !== 3 || loading
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
                            <p><strong>Past:</strong> {readingResult.past}</p>
                            <p><strong>Present:</strong> {readingResult.present}</p>
                            <p><strong>Future:</strong> {readingResult.future}</p>
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
