import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.resolve(__dirname, '../src');
const PUBLIC_DIR = path.resolve(SRC_DIR, 'public');
const README_PATH = path.resolve(__dirname, '../README.md');

function generateTree(dir, depth = 0, prefix = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true })
    .filter(item => {
      const fullPath = path.join(dir, item.name);
      return fullPath !== PUBLIC_DIR && item.name !== '.DS_Store';
    })
    .sort((a, b) => {
      // Directories first, then files alphabetically
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

  let output = '';
  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    output += `${prefix}${connector}${item.name}\n`;

    if (item.isDirectory()) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      output += generateTree(path.join(dir, item.name), depth + 1, newPrefix);
    }
  });
  return output;
}

try {
  const treeStructure = 'src/\n' + generateTree(SRC_DIR);
  let readme = fs.readFileSync(README_PATH, 'utf-8');

  // Find the Project structure section and its following code block
  // This regex targets the first code block after "## Project structure"
  const regex = /(### Website layout[\s\S]*?```)[\s\S]*?(```)/;

  if (regex.test(readme)) {
    readme = readme.replace(regex, `$1\n${treeStructure}$2`);
    fs.writeFileSync(README_PATH, readme);
    console.log('Successfully updated README.md with project structure.');
  } else {
    console.error('Could not find the "## Project structure" section with a code block in README.md');
  }
} catch (error) {
  console.error('Error generating structure:', error);
  process.exit(1);
}
