import * as fs from 'node:fs';
const ROOT = 'C:/Users/aboha/OneDrive/Desktop/qstemora-club';
const pages = ['index.html','subjects.html','subject.html','lesson.html','about.html','team.html','partners.html'];

const LOC = 'https://www.google.com/maps/@26.24426,32.7407129,16z?authuser=0&amp;entry=ttu&amp;g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D';
const IG = 'https://www.instagram.com/qena_student_club?utm_source=qr';
const FB = 'https://www.facebook.com/share/1B1s3pP32Y/';

const reps = [
  ['https://maps.google.com/?q=STEM+Qena+School', LOC],
  ['tel:+201000000000', 'tel:01123389108'],
  ['mailto:info@qstemora.club', 'mailto:qenastudentclubs@gmail.com'],
  ['https://instagram.com"', IG + '"'],
  ['https://facebook.com"', FB + '"'],
];

for (const p of pages) {
  let h = fs.readFileSync(ROOT + '/' + p, 'utf8');
  const counts = {};
  for (const [from, to] of reps) {
    const n = h.split(from).length - 1;
    counts[from] = n;
    h = h.split(from).join(to);
  }
  fs.writeFileSync(ROOT + '/' + p, h);
  console.log(p, JSON.stringify(counts));
}
