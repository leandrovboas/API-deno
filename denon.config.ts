import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run src/server.ts",
      desc: "run my serve.ts file",
      allow: [
        "net",
        "read",
        "write",
        "env",
        "plugin",
      ],
      unstable: true,
      tsconfig: "tsconfig.json"
    },
    debug: {
      cmd: "deno run --inspect-brk -A src/server.ts",
      desc: "run my debug",
      allow: [
        "net",
        "read",
        "write",
        "env",
        "plugin",
      ],
      unstable: true,
      tsconfig: "tsconfig.json"
    },
  },
};

export default config;
