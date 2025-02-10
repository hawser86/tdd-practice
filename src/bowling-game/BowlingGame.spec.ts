import BowlingGame from './BowlingGame';

describe('BowlingGame', () => {
  it('should calculate 0 score when no rolls happened yet', () => {
    const bowlingGame = new BowlingGame();
    expect(bowlingGame.getScore()).toEqual(0);
  });

  it('should calculate 5 score when there is a single roll with 5 pins hit', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(5);
    expect(bowlingGame.getScore()).toEqual(5);
  });

  it('should calculate 9 score when there are two rolls with 5 and 4 pins hit', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(5);
    bowlingGame.roll(4);
    expect(bowlingGame.getScore()).toEqual(9);
  });

  it('should double the next two rolls as bonus after a strike', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(10);
    expect(bowlingGame.getScore()).toEqual(10);
    bowlingGame.roll(4);
    expect(bowlingGame.getScore()).toEqual(18);
    bowlingGame.roll(2);
    expect(bowlingGame.getScore()).toEqual(22);
  });

  it('should handle 2 strikes after each other', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(10);
    expect(bowlingGame.getScore()).toEqual(10);
    bowlingGame.roll(10);
    expect(bowlingGame.getScore()).toEqual(30);
    bowlingGame.roll(2);
    expect(bowlingGame.getScore()).toEqual(36);
    bowlingGame.roll(1);
    expect(bowlingGame.getScore()).toEqual(38);
  });
});