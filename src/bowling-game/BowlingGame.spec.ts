import { BowlingGame } from "./BowlingGame";

describe('BowlingGame', () => {
    it('should calculate score 0 when no roll happened yet', () => {
        const bowlingGame = new BowlingGame();
        expect(bowlingGame.getScore()).toEqual(0);
    });
});
