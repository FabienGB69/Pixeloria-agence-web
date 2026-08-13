'use client';

import { useState, useCallback } from 'react';

/**
 * Shared Turnstile token state — identical across every form that embeds
 * `<TurnstileWidget>` (ContactForm, TestimonialForm, TunnelForm). Extracted
 * to stop the same three lines from drifting independently in each (issue #162).
 */
export function useTurnstileToken() {
  const [turnstileToken, setTurnstileToken] = useState('');
  const onTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const onTurnstileExpire = useCallback(() => setTurnstileToken(''), []);
  return { turnstileToken, onTurnstileVerify, onTurnstileExpire };
}
