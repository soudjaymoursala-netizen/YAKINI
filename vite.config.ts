import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

// Config Vite standard (sans wrapper tiers). Cible native : Cloudflare Workers,
// via le preset "cloudflare-module" de Nitro, chargé uniquement au build.
export default defineConfig(async ({ command }) => {
  const plugins = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
      server: { entry: "server" },
    }),
    viteReact(),
  ];

  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(
      nitro({
        preset: "cloudflare-module",
        routeRules: {
          "/**": {
            headers: {
              "X-Content-Type-Options": "nosniff",
              "X-Frame-Options": "DENY",
              "Referrer-Policy": "strict-origin-when-cross-origin",
              "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
              "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
            },
          },
        },
      }),
    );
  }

  return {
    css: { transformer: "lightningcss" as const },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-dom/client", "react/jsx-runtime", "react/jsx-dev-runtime"],
      ignoreOutdatedRequests: true,
    },
    plugins,
  };
});
