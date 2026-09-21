const { execSync } = require("node:child_process");

function run(command) {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: "inherit" });
}

run("npm version patch -w @fe-design-systems/tokens --no-git-tag-version");
run("npm version patch -w @fe-design-systems/react --no-git-tag-version");

run("npm run build");

run("git add .");
run('git commit -m "chore: release packages"');

const version = execSync("node -p \"require('./packages/react/package.json').version\"").toString().trim();

run(`git tag v${version}`);
run("git push origin main --tags");
