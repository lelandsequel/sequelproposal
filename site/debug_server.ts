import { spawn } from "bun";

const proc = spawn(["bun", "run", "dev"], {
  cwd: "/home/workspace/SEO/sequelproposal-repo/site",
  env: { ...process.env, NODE_ENV: "development" },
  stdout: "pipe",
  stderr: "pipe",
});

async function check() {
  await new Promise(r => setTimeout(r, 5000)); // wait for server boot
  
  try {
    const res = await fetch("http://localhost:50090/src/styles.css");
    console.log("Status:", res.status);
    console.log("Content-Type:", res.headers.get("content-type"));
    const text = await res.text();
    console.log("Preview:", text.slice(0, 100));
  } catch (e) {
    console.error("Fetch failed:", e);
  }
  
  proc.kill();
}

check();
