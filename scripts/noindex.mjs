// Inject a noindex directive into the StatiCrypt gate page (the outer HTML that
// crawlers actually receive — the inner app stays encrypted and unreadable to them).
// Runs as `postencrypt`, after the page has been encrypted.
import { readFileSync, writeFileSync } from 'node:fs'

const file = 'dist/index.html'
const meta = '<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />'

let html = readFileSync(file, 'utf8')

if (html.includes('name="robots"')) {
  console.log('noindex meta already present in', file)
} else {
  html = html.replace(/<head([^>]*)>/i, (m) => `${m}\n    ${meta}`)
  writeFileSync(file, html)
  console.log('Injected noindex meta into', file)
}
