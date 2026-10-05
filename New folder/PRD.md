# QSTEMora — Product Requirements Document

## 1. Overview

QSTEMora is the website for a student-run STEM club (Qena Student Club / QSC) built by
and for Senior-26 STEM students in Qena, Egypt. It centralizes study materials for every
subject, session scheduling, and club identity pages (team, partners, about).

- **Audience:** STEM students, first secondary (Grade 1) only for the initial launch.
- **Access:** Fully public. No login, no accounts.
- **Owner/maintainer:** One person (the founder) builds and maintains the site; the wider
  team contributes content, not code.
- **Language:** English interface.
- **Timeline:** Build starts imminently, with the subject/page structure in place first and
  content (files, links, schedule) added progressively afterward.

## 2. Problem / Goal

Students across Egyptian governorates studying the STEM curriculum lack an easy, organized
place to find revised, high-quality explanations and materials per subject and learning
outcome (LO). QSTEMora collects and organizes this content in one public site.

## 3. Content Model

### 3.1 Subjects
A fixed set of subjects, each belonging to a category:

| Category | Subjects |
|---|---|
| Scientific | Geology, Math, Chemistry, Biology, Mechanics, Physics, CS |
| Literary | Française, Deutsch, Arabic, Religion, Social Studies, English |
| Other | Capstone, Opportunities, Arduino |

- **Religion** is the one subject with a further split: **Islam** / **Christian** branches,
  to respect religious differences among students.
- **Opportunities** is not curriculum content — it's guidance content (how to do well in
  competitions/opportunities). It reuses the exact same page structure as a subject's LOs,
  just under a different label ("Lesson" instead of "L.O").
- Grades 2 and 3 are out of scope for v1; the data model should not hard-block adding them
  later.

### 3.2 Learning Outcomes (LOs)
Each subject (except the "Other" group, which uses its own simpler lessons) is broken into
LOs, using the real ministry curriculum codes as unique IDs (e.g. `CH.1.04`, `BI.1.02`,
`PH.1.08`). Each LO stores only:
- Code / ID
- Title
- Week(s) it's taught
- Slots for **Videos**, **Files**, **Test Banks** (each a list of Google Drive links)

No other curriculum detail (concepts, skills, essential questions, capstone connections,
etc.) is stored — that level of detail belongs to teachers' internal planning docs, not the
student-facing site.

An LO with all three slots empty is treated as "not uploaded yet."

### 3.3 Hosting of materials
All videos, files, and test banks are hosted on **Google Drive**; the site stores and
displays the share links only. The team (not just the founder) is responsible for keeping
links valid.

## 4. Site Structure / Pages

| Page | Purpose |
|---|---|
| **Home** | Hero, About preview, Subjects preview grid, This Week's Sessions, Team preview, Partners preview |
| **Subjects** | Grid of subject cards, filterable by Category (All / Scientific / Literary / Other) and by Semester |
| **Subject page** | For a chosen subject: list of its LOs (or, for Religion, a branch-selection step first) |
| **LO page** | One LO's Videos, Files, and Test Banks, shown together on one page (not as three separate clicks) |
| **About** | Club story/mission (from the About Us copy) |
| **Team members** | Grid of team member cards (name + role) |
| **Partners** | Grid of partner cards + a "Do a partnership" call-to-action |
| **JOIN** (button, not a page) | Links out to the club's WhatsApp community |

### 4.1 Navigation
Home · Subjects · About · Team members · Partners · JOIN (button)

### 4.2 Schedule
"This Week's Sessions" is shown on the Home page directly under the hero — not a separate
page. It should be editable by the team without touching code (see §6).

## 5. Key Decisions & Rationale

- **One LO page, not three clicks.** Videos, Files, and Test Banks appear as sections on a
  single LO page rather than three separate sub-pages, to reduce navigation friction.
- **`branches` as a general subject property**, not a Religion-only special case. Any
  subject can optionally define branches; only Religion currently uses this. Keeps the data
  model uniform if another subject needs branching later.
- **LOs shown even before content is uploaded**, styled as "not uploaded yet" rather than
  hidden behind a generic "coming soon" screen — so students can see the full syllabus is
  planned, and cards light up automatically once a link is added.
- **No custom accounts/login system.** Content is managed through a shared, permissioned
  Google Sheet (or directly in the data file) rather than a built admin panel, since the
  founder is a solo, non-expert-JS developer and a login system would be a disproportionate
  amount of risk and effort for the team's actual need (adding links).
- **Semester filter lives on the subject/LO level**, not the top-level Subjects grid, since
  a subject exists across both semesters.

## 6. Content Management Workflow

1. Content (title, week, subject) is defined in the data file (`data.json`), pre-populated
   from the real ministry curriculum.
2. To publish a video/file/test bank: team member uploads to Google Drive, sets sharing to
   "Anyone with the link," and adds the link into the relevant LO's `videos` / `files` /
   `testBanks` array.
3. The schedule is maintained the same way — a simple structured list the founder or a
   teammate edits directly (starting as a JSON array or Sheet-backed list), not hardcoded
   per week into the HTML.
4. No code changes are required for routine content updates.

## 7. Non-Goals (v1)

- No student accounts, login, or personalized progress tracking.
- No in-house file/video hosting (Google Drive is the source of truth).
- No Grade 2/3 content.
- No online-solvable test banks (PDF only for now).
- No admin panel / custom CMS.

## 8. Open Items

- Confirm whether **English** (curriculum LOs received, but absent from the original
  Subjects page design) should be added to the public subject grid.
- Confirm whether **CS** should be recategorized from "Literary" to "Scientific" (appears
  to be a design classification slip).
- Deployment target: GitHub Pages.
