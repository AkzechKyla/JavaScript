import {model, generationConfig} from "../gemini.ts"

interface Reading {
    card: string;
    reading: string;
}

interface Readings {
    past: Reading;
    present: Reading;
    future: Reading;
}

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

    static async getTarotReading(question: string, selectedCards: { name: string; position: string }[]): Promise<Readings> {
        const chatSession = model.startChat({ generationConfig, history: [] });

        const formattedCards = selectedCards
          .map((card, index) => {
            const position = ["PAST", "PRESENT", "FUTURE"][index] || "UNKNOWN";
            return `**${position}:** ${card.name} (${card.position})`;
          })
          .join("\n");

          const prompt = `You are a tarot reader. A person asked: "${question}". They pulled these three cards:\n${formattedCards}.\n\nGive a Tarot Reading based on the following format: (Use JSON format. Do not include markdown code block "\`\`\`json", just plain text only.)

          {
              "past": {
                  "card": "",
                  "reading": ""
              },
              "present": {
                  "card": "",
                  "reading": ""
              },
              "future": {
                  "card": "",
                  "reading": ""
              }
          }`;

        const result = await chatSession.sendMessage(prompt);
        const text = result.response.text();
        return JSON.parse(text);
    }
}
