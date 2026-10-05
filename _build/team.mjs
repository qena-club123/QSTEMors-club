import * as fs from 'node:fs';

const ROOT = 'C:/Users/aboha/OneDrive/Desktop/qstemora-club';
const dir = fs.readdirSync(ROOT + '/team_images');
const imgs = dir.filter(f => /\.(jpe?g|png|webp)$/i.test(f) && f !== '5559199537596042.jpg');

function titleCase(s) {
  return s.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase());
}

function parse(fn) {
  const base = fn.replace(/\.[^.]+$/, '');
  let parts = base.split(/\s*_\s*/).map(p => p.replace(/\s+/g, ' ').trim()).filter(Boolean);
  parts = parts.filter(p => !/s.nior\s*28/i.test(p));
  const name = titleCase(parts[0] || '');
  let role = parts.slice(1).join(' & ');
  role = titleCase(role).replace(/Designe\b/gi, 'Design');
  return { fn, name, role };
}

const people = imgs.map(parse);

// Rank: founders -> leaders -> capstone advisors -> everyone else; then A-Z by name.
function rank(p) {
  const r = p.role.toLowerCase();
  if (r.includes('founder')) return 0;
  if (r.includes('leader')) return 1;
  if (r.includes('capstone advisor')) return 2;
  return 3;
}
people.sort((a, b) => (rank(a) - rank(b)) || a.name.localeCompare(b.name));

function escAttr(s) { return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function escText(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function card(p, indent) {
  const src = 'team_images/' + encodeURIComponent(p.fn);
  return [
    `${indent}<!-- 👤 ${escText(p.name)} — ${escText(p.role)} (Seniors '28). To change the photo, replace the file in team_images/ and update the src below. -->`,
    `${indent}<div class="member-card group">`,
    `${indent}  <div class="image-wrapper">`,
    `${indent}    <img src="${src}" alt="${escAttr(p.name)}" class="team-photo w-full aspect-square object-contain rounded-lg" loading="lazy">`,
    `${indent}  </div>`,
    `${indent}  <div class="card-badge-footer">`,
    `${indent}    <div class="member-name">${escText(p.name)}</div>`,
    `${indent}    <div class="member-info">${escText(p.role)}</div>`,
    `${indent}  </div>`,
    `${indent}</div>`
  ].join('\n');
}

// ---------- Replace the s28 grid in team.html (depth-matched) ----------
function replaceGrid(html, openLineMarker, cardsHtml) {
  const startIdx = html.indexOf(openLineMarker);
  if (startIdx === -1) throw new Error('grid open not found: ' + openLineMarker);
  // find the end of the opening tag line
  const openTagEnd = html.indexOf('>', startIdx) + 1;
  // walk divs from openTagEnd
  let i = openTagEnd, depth = 1;
  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) { depth++; i = nextOpen + 4; }
    else { depth--; i = nextClose + 6; }
  }
  const innerStart = openTagEnd;
  const innerEnd = i - 6; // start of matching </div>
  return html.slice(0, innerStart) + '\n' + cardsHtml + '\n    ' + html.slice(innerEnd);
}

const teamCards = people.map(p => card(p, '        ')).join('\n');
let teamHtml = fs.readFileSync(ROOT + '/team.html', 'utf8');
teamHtml = replaceGrid(teamHtml, '<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left team-branch" data-branch="s28" id="teamGrid">', teamCards);
fs.writeFileSync(ROOT + '/team.html', teamHtml);

// ---------- index.html #homeTeamGrid preview (first 6) ----------
const homeCards = people.slice(0, 6).map(p => card(p, '        ')).join('\n');
let indexHtml = fs.readFileSync(ROOT + '/index.html', 'utf8');
indexHtml = replaceGrid(indexHtml, '<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="homeTeamGrid">', homeCards);
fs.writeFileSync(ROOT + '/index.html', indexHtml);

console.log('s28 members (' + people.length + '):');
people.forEach((p, n) => console.log((n + 1) + '. ' + p.name + ' — ' + p.role));
