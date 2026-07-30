import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LOCALE } from "@/lib/content";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: `/${DEFAULT_LOCALE}` });
  },
});
