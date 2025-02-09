export class BowlingGame {
    private rolls: number[] = [];

    public roll(pinCount: number): void {
        this.rolls.push(pinCount);
    }

    public getScore(): number {
        let score = 0;

        for (let rollIndex = 0; rollIndex < this.rolls.length; rollIndex++) {
            const pinCount = this.rolls[rollIndex];
            const bonus = (rollIndex % 2 !== 0) && (this.rolls[rollIndex - 1] + pinCount === 10) ? this.rolls[rollIndex + 1] : 0
            score += pinCount + bonus;
        }

        return score;
    }
}
