export default class Collection {
    private storageKey: string;

    constructor(userId: string) {
        this.storageKey = `tarotReadings_${userId}`;
    }

    saveReading(cards: string[], reading: string) {
        const newReading = { id: Date.now(), cards, reading };
        const savedReadings = this.getReadings();
        const updatedReadings = [...savedReadings, newReading];
        localStorage.setItem(this.storageKey, JSON.stringify(updatedReadings));
    }

    getReadings(): any[] {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    }

    deleteReading(id: number) {
        const updatedReadings = this.getReadings().filter((reading) => reading.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(updatedReadings));
    }
}
