import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/products/geneie")({
  beforeLoad: async () => {
    throw redirect({ href: "https://geneie.chat/" });
  },
  component: () => null,
});
