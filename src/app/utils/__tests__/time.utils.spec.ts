import { dateDataFromString } from '../time.utils';

describe('time utils', () => {
  describe('createSummary', () => {
    it('should return a summary given a string', () => {
      const result = dateDataFromString('1589642098034');

      expect(result.weekNumber).toEqual(21);
    });
  });
});
