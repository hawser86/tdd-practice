export class BowlingGame {
    private rolls: number[] = [];

    public roll(pins: number): void {
        this.rolls.push(pins);
    }

    public getScore(): number {
        return this.rolls.reduce((score, roll, rollIndex) => {
            const bonus = this.rolls[rollIndex - 1] + roll === 10 ? this.rolls[rollIndex + 1] : 0
            return score + roll + bonus;
        }, 0);
    }
}
