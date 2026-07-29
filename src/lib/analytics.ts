import posthog from "posthog-js";


const POSTHOG_KEY =
  import.meta.env.VITE_PUBLIC_POSTHOG_KEY ?? "phc_mp3kc8TS9zpDmRFfdSJ2mG3sBZneJEu6LkT7xvqSbz9Q";

/** US Cloud. An EU project would be https://eu.i.posthog.com. */
const POSTHOG_HOST = import.meta.env.VITE_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

/** Set VITE_PUBLIC_POSTHOG_DEV=1 to verify the integration from localhost. */
const TRACK_IN_DEV = import.meta.env.VITE_PUBLIC_POSTHOG_DEV === "1";

let started = false;

export function initAnalytics() {
  // posthog-js is browser-only; this must never run during SSR.
  if (started || typeof window === "undefined") return;
  // Keep localhost noise out of the project by default.
  if (import.meta.env.DEV && !TRACK_IN_DEV) return;
  if (!POSTHOG_KEY) return;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: false,
    capture_pageleave: true,
    session_recording: {
      maskAllInputs: true,
    },
  });

  started = true;
}

export function capturePageview(href: string) {
  if (!started) return;
  posthog.capture("$pageview", { $current_url: href });
}

export { posthog };
