const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID ?? "";
const UMAMI_SRC = process.env.UMAMI_SRC ?? "";

type TrackEventToUmamiArguments = {
  eventValue: string;
  eventType: string;
  url?: string;
  websiteId?: string;
};

/**
 * Umami tracker functions:
 * to tracks an event with a custom event type.
 *
 * @docs
 * https://umami.is/docs/track-events
 * https://umami.is/docs/tracker-functions
 */
const trackEventToUmami = ({ eventValue, eventType, url, websiteId }: TrackEventToUmamiArguments): void => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (window.umami && typeof window.umami.trackEvent === "function") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    window.umami.trackEvent(eventValue, eventType, url, websiteId);
  }
};

export { UMAMI_WEBSITE_ID, UMAMI_SRC, trackEventToUmami };
