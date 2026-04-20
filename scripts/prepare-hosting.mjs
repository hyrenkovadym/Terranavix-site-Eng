import { copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

try {
  await copyFile(indexPath, notFoundPath);
  process.stdout.write('Prepared dist/404.html for hosting fallback.\n');
} catch (error) {
  process.stderr.write(`Failed to prepare hosting artifacts: ${error.message}\n`);
  process.exitCode = 1;
}
