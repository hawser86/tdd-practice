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
            const { frameScore, rollsInFrame } = this.calculateFrameScore(rollIndex);
            score += frameScore;
            rollIndex += rollsInFrame;
            frameIndex += 1;
        }

        return score;
    }

    private calculateFrameScore(rollIndex: number): { frameScore: number, rollsInFrame: number } {
        const currentRoll = this.rolls[rollIndex];
        const nextRoll = this.rolls[rollIndex + 1] ?? 0;
        const secondNextRoll = this.rolls[rollIndex + 2] ?? 0;

        if (this.isStrike(rollIndex)) {
            return { frameScore: currentRoll + nextRoll + secondNextRoll, rollsInFrame: 1 }
        } else {
            const baseScore = currentRoll + nextRoll;
            const bonusScore = this.isSpare(rollIndex) ? secondNextRoll : 0;

            return { frameScore: baseScore + bonusScore, rollsInFrame: 2 }
        }
    }

    private isStrike(rollIndex: number): boolean {
        return this.rolls[rollIndex] === 10;
    }

    private isSpare(rollIndex: number): boolean {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
}
