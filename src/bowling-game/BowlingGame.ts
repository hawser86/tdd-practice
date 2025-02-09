export class BowlingGame {
    private rolls: number[] = [];

    public roll(pins: number): void {
        this.rolls.push(pins);
    }

    public getScore(): number {
        return this.rolls.reduce((score, roll) => score + roll, 0);
    }
}
