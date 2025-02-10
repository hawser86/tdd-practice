export default class BowlingGame {
  private score: number = 0;
  private strikeBonusRoll: number = 0;
  private strikeCount: number = 0;

  public getScore():number {
    return this.score;
  }

  public roll(roll:number):void {
    this.calculateScore(roll);
  }

  private calculateScore(roll: number) {
    this.score += roll;

    if (this.strikeBonusRoll > 0) {
      this.strikeBonusRoll--;
      this.score += (this.strikeCount || 1) * roll;
    }

    if (roll === 10) {
      this.strikeBonusRoll = 2;
      this.strikeCount++;
    } else if (this.strikeCount > 0) {
      this.strikeCount--;
    }
  }
}