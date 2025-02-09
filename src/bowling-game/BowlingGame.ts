export class BowlingGame {
    private rolls: number[] = [];

    public roll(pinCount: number): void {
        this.rolls.push(pinCount);
    }

    public getScore(): number {
        let score = 0;
        let frameIndex = 0;
        let rollIndex = 0;

        while (rollIndex < this.rolls.length) {
            const pinCount = this.rolls[rollIndex];

            if (pinCount === 10) { // strike
                score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
                rollIndex += 1;
            } else if (pinCount + this.rolls[rollIndex + 1] === 10) { // spare
                score += 10 + this.rolls[rollIndex + 2];
                rollIndex += 2;
            } else {
                score += pinCount + (this.rolls[rollIndex + 1] ?? 0);
                rollIndex += 2;
            }

            frameIndex += 1;
            if (frameIndex >= 10) {
                break;
            }
        }

        return score;
    }
}
