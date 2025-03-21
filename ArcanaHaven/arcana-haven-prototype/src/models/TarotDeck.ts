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

    shuffle() {
        const { cards } = this;
        const length = cards.length;

        for (let i = length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));

            // Swap the current card with a randomly chosen one
            [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
        }
    }

}
