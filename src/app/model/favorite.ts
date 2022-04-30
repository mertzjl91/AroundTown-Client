export class Favorite {
    favoriteId: number;
    eventId: number;
    userId: number;

    Constructor(favoriteId: number, eventId: number, userId: number) {
        this.favoriteId = favoriteId;
        this.eventId = eventId;
        this.userId = userId;
    }
}
