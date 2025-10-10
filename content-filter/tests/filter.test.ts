import { FilterService } from '../src/services/filter';

describe('FilterService', () => {
  let filterService: FilterService;

  beforeEach(() => {
    filterService = new FilterService();
  });

  describe('checkUrl', () => {
    it('should return a result for valid URL', async () => {
      const result = await filterService.checkUrl('https://example.com');
      
      expect(result).toHaveProperty('safe');
      expect(result).toHaveProperty('category');
      expect(typeof result.safe).toBe('boolean');
    });
  });

  describe('checkContent', () => {
    it('should analyze content and return safety score', async () => {
      const result = await filterService.checkContent('Test content', 'text');
      
      expect(result).toHaveProperty('safe');
      expect(result).toHaveProperty('score');
      expect(result.score).toBeGreaterThanOrEqual(0);
      expect(result.score).toBeLessThanOrEqual(1);
    });
  });
});