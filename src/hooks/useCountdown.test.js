import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useCountdown } from './useCountdown.js';

describe('useCountdown', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('calculates elapsed time from the start date', () => {
    vi.useFakeTimers();

    const start = new Date('2025-09-14T00:00:00').getTime();
    const end = new Date('2025-10-21T00:00:00').getTime();
    vi.setSystemTime(start + 1 * 86_400_000 + 2 * 3_600_000 + 3 * 60_000 + 4_000);

    const { result } = renderHook(() => useCountdown(start, end));

    expect(result.current).toMatchObject({
      days: 1,
      hours: 2,
      minutes: 3,
      seconds: 4,
    });
    expect(result.current.percent).toBeCloseTo((93_784_000 / (end - start)) * 100);
  });

  it('updates every second', () => {
    vi.useFakeTimers();

    const start = new Date('2025-09-14T00:00:00').getTime();
    const end = new Date('2025-10-21T00:00:00').getTime();
    vi.setSystemTime(start);

    const { result } = renderHook(() => useCountdown(start, end));

    act(() => vi.advanceTimersByTime(1_000));

    expect(result.current.seconds).toBe(1);
  });
});
