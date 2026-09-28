
function readInput(fallback) {
  if (fallback != null && String(fallback).length) return String(fallback);
  if (process.stdin && process.stdin.isTTY) return "";
  try {
    const fs = require("fs");
    if (typeof fs.readFileSync === "function") {
      // Non-blocking when no piped data: use readFileSync only if fd 0 has size or isn't a TTY.
      return fs.readFileSync(0, "utf8");
    }
  } catch (_) {}
  return "";
}

const crypto = require("crypto");
function id(size = 16) { return crypto.randomBytes(size).toString("hex"); }
function ulike() {
  const t = Date.now().toString(36);
  return t + "-" + crypto.randomBytes(6).toString("hex");
}
function run(argv) {
  if (argv[0] === "ulike") return ulike();
  return id(Number(argv[0] || 16));
}

module.exports = { readInput, id, ulike, run };
