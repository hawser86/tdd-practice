export class BowlingGame {
    private rolls: number[] = [];

    public roll(pinCount: number): void {
        this.rolls.push(pinCount);
    }

    public getScore(): number {
        let score = 0;
        let firstRollInFrame = true;

        for (let rollIndex = 0; rollIndex < this.rolls.length; rollIndex++) {
            const pinCount = this.rolls[rollIndex];
            const spareBonus = !firstRollInFrame && (this.rolls[rollIndex - 1] + pinCount === 10) ? this.rolls[rollIndex + 1] : 0
            const strikeBonus = firstRollInFrame && (pinCount === 10) ? this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2] : 0;
            score += pinCount + spareBonus + strikeBonus;
            firstRollInFrame = pinCount === 10 ? true : !firstRollInFrame;
        }

        return score;
    }
}
