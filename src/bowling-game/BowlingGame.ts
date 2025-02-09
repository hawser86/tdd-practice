export class BowlingGame {
    private rolls: number[] = [];

    public roll(pinCount: number): void {
        this.rolls.push(pinCount);
    }

    public getScore(): number {
        let score = 0;
        let frameIndex = 0;
        let rollIndex = 0;

        while (rollIndex < this.rolls.length && frameIndex < 10) {
            const currentRoll = this.rolls[rollIndex];
            const nextRoll = this.rolls[rollIndex + 1] ?? 0;
            const secondNextRoll = this.rolls[rollIndex + 2];

            if (this.isStrike(rollIndex)) {
                score += 10 + nextRoll + secondNextRoll;
                rollIndex += 1;
            } else {
                const frameScore = currentRoll + nextRoll;
                if (this.isSpare(rollIndex)) {
                    score += secondNextRoll;
                }
                score += frameScore;
                rollIndex += 2;
            }

            frameIndex += 1;
        }

        return score;
    }

    private isStrike(rollIndex: number): boolean {
        return this.rolls[rollIndex] === 10;
    }

    private isSpare(rollIndex: number): boolean {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
}
