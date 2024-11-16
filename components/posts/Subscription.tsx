import Link from "next/link";

const SubscriptionLink = () => (
  <p className="text-tertiary-light dark:text-tertiary-dark mt-8 text-base">
    Subscribe to my{" "}
    <Link
      href="https://blog.vgnshiyer.dev/feed.xml"
      className="text-contrast-light dark:text-contrast-dark hover:underline"
    >
      RSS feed
    </Link>{" "}
    to get notified about new posts.
  </p>
);

export default SubscriptionLink;