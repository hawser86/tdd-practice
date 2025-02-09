export class BowlingGame {
    private score: number = 0;

    public roll(pins: number): void {
        this.score += pins;
    }

    public getScore(): number {
        return this.score;
    }
}
