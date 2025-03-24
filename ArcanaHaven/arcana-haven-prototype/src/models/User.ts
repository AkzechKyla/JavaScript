import Collection from "./Collection";

export class User {
    id: string;
    collections: Collection;

    constructor(userId: string) {
        this.id = userId;
        this.collections = new Collection(userId);
    }
}
