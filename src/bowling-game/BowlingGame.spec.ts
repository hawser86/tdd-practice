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

    it('should calculate score as the sum of hit pins after multiple rolls', () => {
        const bowlingGame = new BowlingGame();
        rollFrame(bowlingGame, [2, 3]);
        rollFrame(bowlingGame, [8, 0]);

        expect(bowlingGame.getScore()).toEqual(13);
    });

    it('should count the roll after a spare twice', () => {
        const bowlingGame = new BowlingGame();
        rollFrame(bowlingGame, [7, 3]);
        rollFrame(bowlingGame, [8]);

        expect(bowlingGame.getScore()).toEqual(26);
    });

    it('should not add any bonus to the spare when the next roll is not rolled yet', () => {
        const bowlingGame = new BowlingGame();
        rollFrame(bowlingGame, [7, 3]);

        expect(bowlingGame.getScore()).toEqual(10);
    });

    it('should not consider two consecutive rolls a spare if they are in different frames', () => {
        const bowlingGame = new BowlingGame();
        rollFrame(bowlingGame, [1, 7]);
        rollFrame(bowlingGame, [3, 5]);

        expect(bowlingGame.getScore()).toEqual(16);
    });

    it('should count the 2 rolls after a strike twice', () => {
        const bowlingGame = new BowlingGame();
        rollFrame(bowlingGame, [10]);
        rollFrame(bowlingGame, [3, 4]);

        expect(bowlingGame.getScore()).toEqual(24);
    });

    it('should consider hitting 10 pins on the 2nd roll of a frame a spare', () => {
        const bowlingGame = new BowlingGame();
        rollFrame(bowlingGame, [0, 10]);
        rollFrame(bowlingGame, [3, 4]);

        expect(bowlingGame.getScore()).toEqual(20);
    });

    it('should calculate spare properly after a single-roll-frame with strike', () => {
        const bowlingGame = new BowlingGame();
        rollFrame(bowlingGame, [10]);
        rollFrame(bowlingGame, [3, 7]);
        rollFrame(bowlingGame, [1, 2]);

        expect(bowlingGame.getScore()).toEqual(34);
    });

    it('should calculate score 300 for a perfect game', () => {
        const bowlingGame = new BowlingGame();

        for (let i = 0; i < 12; i++) {
            bowlingGame.roll(10);
        }

        expect(bowlingGame.getScore()).toEqual(300);
    });
});

const rollFrame = (bowlingGame: BowlingGame, pinCounts: number[]) => {
    pinCounts.forEach(pinCount => bowlingGame.roll(pinCount));
};
