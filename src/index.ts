import * as boxen from 'boxen';
import * as chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';

// Define options for Boxen
const options = {
  BorderStyle: 'round',
  margin: 1,
  padding: 1
};

// Text + chalk definitions
const data = {
  github: chalk.cyan('https://github.com/duy-tung'),
  handle: chalk.cyan('duy-tung'),
  labelCard: chalk.white.bold('      Card:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  npx: chalk.white('npx duy-tung')
};

// Actual strings we're going to output
const newline = '\n';
const githubing = `${data.labelGitHub}  ${data.github}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = githubing + newline + carding;

fs.writeFileSync(
  path.join(__dirname, '/output'),
  chalk.green(boxen(output, options))
);
