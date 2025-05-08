import { build } from "https://deno.land/x/dnt/mod.ts";

await build({
  entryPoints: ["./src/index.ts"],
  outDir: "./build",
  shims: {
    deno: true,
  },
  package: {
    name: "@pphatdev/user-form-protection",
    version: "0.1.1",
    description: "Utility functions for input validation and formatting in web forms.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/pphatlabs/user-form-protection.git",
    },
    bugs: {
      url: "https://github.com/pphatlabs/user-form-protection/issues",
    },
    homepage: "https://github.com/pphatlabs/user-form-protection#readme",
  },
  compilerOptions: {
    lib: ["dom", "esnext"],
  },
});

// Post-build steps
Deno.copyFileSync("README.md", "build/README.md");
Deno.copyFileSync("LICENSE", "build/LICENSE");