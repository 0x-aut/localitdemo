import type { NextConfig } from "next";
// import { withLingo } from "@lingo.dev/compiler/next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// export default async function (): Promise<NextConfig> {
//   return await withLingo(nextConfig, {
//     sourceRoot: "./app",
//     lingoDir: ".lingo",
//     sourceLocale: "en",
//     targetLocales: ["de", "fr", "ja"],
//     models: "lingo.dev",
//     buildMode: "translate",
//     dev: {
//       usePseudotranslator: false,
//     },
//   })
// }