interface TarotCardProps {
    card: { name: string; image: string };
    onSelect: () => void;
    isSelected: boolean;
    isDisabled: boolean;
}

export default function TarotCard({ card, onSelect, isSelected, isDisabled }: TarotCardProps) {
    return <button
        onClick={onSelect}
        disabled={isDisabled}
        className={`p-2 border rounded-lg shadow-md transition-all hover:scale-105 ${
            isSelected ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
    >
        <img src={card.image} className="w-24 h-36 mx-auto" />
        <p className="mt-2 font-semibold"></p>
    </button>
}
