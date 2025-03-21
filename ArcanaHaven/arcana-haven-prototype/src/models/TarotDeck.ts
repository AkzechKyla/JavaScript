export class TarotDeck {
    cards: {
        name: string;
        image: string;
        meaning: string
     }[] = [];

    constructor(cards: {
        name: string;
        image: string;
        meaning: string
    }[]) {
        this.cards = cards;
    }

    static async fetchDeck(): Promise<TarotDeck> {
        const response = await fetch("/data/cards.json");
        const data = await response.json();
        return new TarotDeck(data);
    }

    getCardByName(name: string) {
        return this.cards.find(card => card.name === name);
    }

    getRandomPosition() {
        return Math.random() > 0.5 ? "Upright" : "Reversed";
    }
}
