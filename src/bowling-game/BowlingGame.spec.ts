import { BowlingGame } from "./BowlingGame";

describe('BowlingGame', () => {
    it('should calculate score 0 when no roll happened yet', () => {
        const bowlingGame = new BowlingGame();
        expect(bowlingGame.getScore()).toEqual(0);
    });

    it('should calculate score 0 when nothing is hit', () => {
        const bowlingGame = new BowlingGame();
        bowlingGame.roll(0);
        expect(bowlingGame.getScore()).toEqual(0);
    });

    it('should calculate score based on hit pins after a single roll', () => {
        const bowlingGame = new BowlingGame();
        bowlingGame.roll(3);
        expect(bowlingGame.getScore()).toEqual(3);
    });
});
