import { createSummary } from '../post.utils';

describe('post utils', () => {
  describe('createSummary', () => {
    it('should return a summary given a string', () => {
      const result = createSummary('bla ble bli blo blu', 2);

      expect(result).toEqual('bla ble...');
    });

    it('should return a summary given a string', () => {
      const result = createSummary(null, 2);

      expect(result).toEqual('');
    });

    it('should return a summary given a string', () => {
      const result = createSummary('bla ble bli blo blu', -1);

      expect(result).toEqual('');
    });

    it('should return a summary given a string', () => {
      const result = createSummary('bla ble bli blo blu', null);

      expect(result).toEqual('');
    });
  });
});
