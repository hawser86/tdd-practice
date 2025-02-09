import { Calculator } from './Calculator';

describe('Calculator', () => {
   describe('#add', () => {
       it('should add two numbers', () => {
           const calculator = new Calculator();
           expect(calculator.add(2, 3)).toEqual(5);
       });
   });
});
