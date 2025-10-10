#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const hooksDir = path.join(__dirname, '..', '.git', 'hooks');

if (!fs.existsSync(hooksDir)) {
  console.log('Git hooks directory not found. Skipping setup.');
  process.exit(0);
}

const preCommitHook = `#!/bin/sh
# Run lint-staged
npx lint-staged
`;

const preCommitPath = path.join(hooksDir, 'pre-commit');

try {
  fs.writeFileSync(preCommitPath, preCommitHook, { mode: 0o755 });
  console.log('Git hooks installed successfully!');
} catch (error) {
  console.error('Failed to install git hooks:', error);
  process.exit(1);
}