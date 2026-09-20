import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('..', import.meta.url));
const out = resolve(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const entry of ['index.html', 'styles.css', 'script.js', 'assets']) {
  await cp(resolve(root, entry), resolve(out, entry), { recursive: true });
}
console.log('Built static website → dist/');
