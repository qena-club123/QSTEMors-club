# QSTEMora — Site Structure & Data Spec

Companion to `PRD.md`. This file is for whoever is building/editing the site (mainly the
founder, since he's doing this largely solo and isn't strong in JavaScript).

## 1. File layout

```
index.html          Home
subjects.html        Subjects grid (category + semester filters)
subject.html         One subject's LOs (?s=chemistry) — or branch picker for Religion
lesson.html          One LO's Videos / Files / Test Banks (?id=CH.1.04)
about.html
team.html
partners.html
assets/
  style.css
  app.js             All JS lives here — small, shared across pages
data/
  data.json           All subjects + lessons (see below)
  schedule.json        This week's sessions (kept separate — changes weekly)
```

Each HTML page is a shell; `app.js` reads `data.json` (via `fetch`), reads the query
string, and renders the right cards into the page. This means `subject.html` and
`lesson.html` are single templates reused for every subject/LO — not one file per subject.

## 2. `data.json` shape

```json
{
  "meta": { "grade": 1 },
  "subjects": [
    {
      "id": "chemistry",
      "name": "Chemistry",
      "category": "scientific",
      "branches": [],
      "lessonLabel": "L.O"
    },
    {
      "id": "religion",
      "name": "Religion",
      "category": "literary",
      "branches": [
        { "id": "islam", "name": "Islam" },
        { "id": "christian", "name": "Christian" }
      ]
    },
    {
      "id": "opportunities",
      "name": "Opportunities",
      "category": "other",
      "branches": [],
      "lessonLabel": "Lesson"
    }
  ],
  "lessons": [
    {
      "id": "CH.1.04",
      "subject": "chemistry",
      "branch": null,
      "weeks": "07-08",
      "title": "Develop operational definitions of chemical elements",
      "videos": [],
      "files": [],
      "testBanks": []
    }
  ]
}
```

Rules:
- `lessons[].id` is the real ministry LO code (already globally unique) — use it as-is,
  don't invent new IDs.
- `lessons[].subject` matches a `subjects[].id`.
- `branches: []` (empty) means: go straight from the subject page to its LOs. A non-empty
  `branches` list means: show a branch-selection step first (currently only Religion).
  This is a general subject property, not a Religion-specific code path.
- `videos` / `files` / `testBanks` are arrays of Google Drive share links (strings). All
  three empty = "not uploaded yet" on the LO card.
- `lessonLabel` overrides the displayed word "L.O" (e.g. Opportunities shows "Lesson").

A real, pre-filled `data.json` (93 lessons across 16 subjects, Grade 1 / Semester 1, built
from the actual ministry curriculum documents) has already been generated — see the earlier
file from this conversation. Only the link arrays need to be filled in as content goes up.

## 3. `schedule.json` shape

```json
{
  "sessions": [
    { "day": "Tuesday", "time": "17:00", "subject": "Physics", "host": "Name", "link": "https://meet..." }
  ]
}
```

Rendered on the Home page as "This Week's Sessions." Today's/next session should be
visually highlighted; sessions already passed can be hidden or dimmed. If the array is
empty, the whole block is hidden rather than shown empty.

## 4. Editing content (no-code workflow)

1. Open `data.json` (or its Google Sheet–synced equivalent, if/when that's set up).
2. Find the lesson by its code (e.g. `CH.1.04`).
3. Add the Google Drive share link into the right array:
   ```json
   "videos": ["https://drive.google.com/file/d/XXXXXXXX/view"]
   ```
4. Save and push to GitHub — GitHub Pages redeploys automatically.
5. Same process for `schedule.json` each week.

## 5. Pages: what each one renders

- **subjects.html** — reads `subjects[]`, groups by `category`, applies the selected
  category/semester filter, renders a card grid.
- **subject.html** — reads `?s=<subject id>`. If `branches` is non-empty and no branch is
  selected yet, render the branch picker. Otherwise render the LO list for that subject
  (dimmed + "Not uploaded yet" for LOs with empty slots).
- **lesson.html** — reads `?id=<LO code>`. Renders the Videos / Files / Test Banks sections
  in one scroll (not three separate clicks).
- **team.html / partners.html** — static card grids from `data.json` (or a small
  `team.json` / `partners.json` if kept separate).

## 6. Responsive notes

- Subjects grid: 2 columns on mobile, 3 on tablet/desktop.
- Category filter: sidebar on desktop, horizontal scrollable chips on mobile.
- Nav collapses to a hamburger menu on mobile; the JOIN button stays visible outside it.
- Team/Partners grids: 2 columns on mobile.

## 7. Deployment

GitHub repository → GitHub Pages, serving the static files directly (no build step
required for a plain HTML/CSS/JS site like this one).
