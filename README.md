# QSTEMora Club (QSC) Website

Website for the **Qena Student Club (QSC)** built for STEM students across Egypt. Centralizes study materials for every subject, session scheduling, and club identity pages.

## 🚀 File Structure

```
├── index.html            # Home page with Hero, Schedule, Previews
├── subjects.html         # Subjects catalog (Category & Semester filters)
├── subject.html          # Dynamic Subject view (LO syllabus or Branch picker)
├── lesson.html           # Single LO page (Videos, Files, Test Banks in one scroll)
├── about.html            # About Us story and statistics
├── team.html             # Team members roster with interactive bios
├── partners.html         # Partners roster and collaboration form
├── data/
│   ├── data.json         # All 16 subjects + STEM Grade 1 Learning Outcomes
│   └── schedule.json     # Weekly live sessions schedule
├── assets/
│   ├── app.js            # Shared application script
│   ├── assets.js         # SVG graphics and badges
│   └── style.css         # Styling and design system
└── README.md
```

## 📝 How to Update Content (No Code Needed)

### Adding or Updating Video/File/Test Bank Links:
1. Open [`data/data.json`](data/data.json).
2. Find the Learning Outcome by its code (e.g. `CH.1.04`, `PH.1.01`).
3. Add the Google Drive share link into the relevant array (`videos`, `files`, or `testBanks`):
   ```json
   "videos": [
     {
       "title": "Lesson Title",
       "url": "https://drive.google.com/file/d/...",
       "duration": "25 mins",
       "speaker": "Presenter Name"
     }
   ]
   ```
4. Save and commit/push to GitHub. GitHub Pages updates automatically.

### Updating Weekly Live Sessions:
1. Open [`data/schedule.json`](data/schedule.json).
2. Add or edit sessions in the `sessions` array.

