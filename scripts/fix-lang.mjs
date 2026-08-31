/**
 * Corrige o atributo `lang` das páginas em inglês no export estático.
 *
 * O `<html>` vive num root layout único (app/layout.tsx), então o Next emite
 * `lang="pt-BR"` em todas as rotas, inclusive `/en`. O LanguageProvider ajusta
 * isso no cliente, mas o crawler e o leitor de tela leem o HTML servido — e o
 * HTML servido precisa nascer certo. Como o site é 100% estático, reescrever o
 * atributo depois do build é a correção mais simples e determinística.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const EN_DIR = join(process.cwd(), 'out', 'en');

async function* htmlFiles(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return; // sem out/en — build sem as rotas EN
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}

let patched = 0;
for await (const file of htmlFiles(EN_DIR)) {
  const html = await readFile(file, 'utf8');
  const fixed = html.replace(/(<html[^>]*?)lang="pt-BR"/, '$1lang="en"');
  if (fixed !== html) {
    await writeFile(file, fixed, 'utf8');
    patched += 1;
  }
}

console.log(`fix-lang: ${patched} página(s) em /en marcadas como lang="en"`);
