import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useApplyModal } from './useApplyModal.js';

describe('useApplyModal', () => {
  it('opens and closes the modal', () => {
    const { result } = renderHook(() => useApplyModal());

    expect(result.current.isOpen).toBe(false);

    act(() => result.current.open());
    expect(result.current.isOpen).toBe(true);

    act(() => result.current.close());
    expect(result.current.isOpen).toBe(false);
  });
});
