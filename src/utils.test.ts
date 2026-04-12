import { describe, it, expect } from 'vitest';
import { getETDayCutoff } from './date';

describe('getETDayCutoff', () => {
  describe('EDT (UTC-4, summer)', () => {
    it('returns next day midnight UTC for midday ET', () => {
      // Apr 12 noon ET = 4pm UTC
      const now = new Date('2026-04-12T16:00:00Z');
      expect(getETDayCutoff(now)).toEqual(new Date('2026-04-13T00:00:00Z'));
    });

    it('returns same cutoff at 11:59pm ET', () => {
      // Apr 12 11:59pm ET = Apr 13 3:59am UTC
      const now = new Date('2026-04-13T03:59:00Z');
      expect(getETDayCutoff(now)).toEqual(new Date('2026-04-13T00:00:00Z'));
    });

    it('advances after midnight ET', () => {
      // Apr 13 12:01am ET = Apr 13 4:01am UTC
      const now = new Date('2026-04-13T04:01:00Z');
      expect(getETDayCutoff(now)).toEqual(new Date('2026-04-14T00:00:00Z'));
    });
  });

  describe('EST (UTC-5, winter)', () => {
    it('returns next day midnight UTC for midday ET', () => {
      // Jan 15 noon ET = 5pm UTC
      const now = new Date('2026-01-15T17:00:00Z');
      expect(getETDayCutoff(now)).toEqual(new Date('2026-01-16T00:00:00Z'));
    });

    it('returns same cutoff at 11:59pm ET', () => {
      // Jan 15 11:59pm ET = Jan 16 4:59am UTC
      const now = new Date('2026-01-16T04:59:00Z');
      expect(getETDayCutoff(now)).toEqual(new Date('2026-01-16T00:00:00Z'));
    });

    it('advances after midnight ET', () => {
      // Jan 16 12:01am ET = Jan 16 5:01am UTC
      const now = new Date('2026-01-16T05:01:00Z');
      expect(getETDayCutoff(now)).toEqual(new Date('2026-01-17T00:00:00Z'));
    });
  });

  describe('invitation filtering', () => {
    it('includes invitation dated today', () => {
      const cutoff = getETDayCutoff(new Date('2026-04-12T16:00:00Z'));
      const invDate = new Date('2026-04-12T00:00:00Z');
      expect(invDate < cutoff).toBe(true);
    });

    it('excludes invitation dated tomorrow', () => {
      const cutoff = getETDayCutoff(new Date('2026-04-12T16:00:00Z'));
      const invDate = new Date('2026-04-13T00:00:00Z');
      expect(invDate < cutoff).toBe(false);
    });

    it('still excludes tomorrow at 11:59pm ET', () => {
      const cutoff = getETDayCutoff(new Date('2026-04-13T03:59:00Z'));
      const invDate = new Date('2026-04-13T00:00:00Z');
      expect(invDate < cutoff).toBe(false);
    });

    it('includes tomorrow after midnight ET flips the day', () => {
      const cutoff = getETDayCutoff(new Date('2026-04-13T04:01:00Z'));
      const invDate = new Date('2026-04-13T00:00:00Z');
      expect(invDate < cutoff).toBe(true);
    });
  });
});
