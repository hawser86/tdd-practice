export class BowlingGame {
    private rolls: number[] = [];

    public roll(pinCount: number): void {
        this.rolls.push(pinCount);
    }

    public getScore(): number {
        return this.rolls.reduce((score, pinCount, rollIndex) => {
            const bonus = this.rolls[rollIndex - 1] + pinCount === 10 ? this.rolls[rollIndex + 1] : 0
            return score + pinCount + bonus;
        }, 0);
    }
}
