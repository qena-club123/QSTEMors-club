// ==========================================================================
// QSTEMora Club - Unified Client Application Engine (Editable & Clean)
// ==========================================================================
// 💡 BEGINNER CONFIGURATION SETTINGS:
// You can edit the contact info, WhatsApp link, and school hall name below:
// ==========================================================================
window.QSC_CONFIG = {
  clubName: "QSTEMora Club (QSC)",
  schoolName: "STEM Qena School, Egypt",
  whatsAppCommunityLink: "https://chat.whatsapp.com/sample-qsc-community",
  contactEmail: "info@qstemora.club",
  contactPhone: "+20 100 000 0000",
  schoolLocationName: "STEM Qena School Hall"
};

const App = {
  data: null,
  schedule: null,
  activeCategory: 'all',
  activeSemester: 'all',
  searchQuery: '',

  // Initialize Application
  async init() {
    await this.loadData();
    this.bindGlobalNavigation();
    this.routePage();
  },

  // ----------------------------------------------------
  // DATA LOADER (Fetch with Fallback Protection)
  // ----------------------------------------------------
  async loadData() {
    try {
      const [dataRes, schedRes] = await Promise.all([
        fetch('data/data.json'),
        fetch('data/schedule.json')
      ]);

      if (dataRes.ok) this.data = await dataRes.json();
      if (schedRes.ok) this.schedule = await schedRes.json();
    } catch (e) {
      console.warn('Direct fetch failed (likely local file:// protocol), using fallback store.', e);
    }

    // Safety fallback data if running without local HTTP server
    if (!this.data && typeof FallbackClubData !== 'undefined') {
      this.data = FallbackClubData;
    }
    if (!this.schedule && typeof FallbackScheduleData !== 'undefined') {
      this.schedule = FallbackScheduleData;
    }
  },

  // ----------------------------------------------------
  // PAGE ROUTER & DETECTOR
  // ----------------------------------------------------
  routePage() {
    const path = window.location.pathname.toLowerCase();
    const isHome = path.endsWith('index.html') || path.endsWith('/') || path === '';
    const isSubjects = path.endsWith('subjects.html');
    const isSubject = path.endsWith('subject.html');
    const isLesson = path.endsWith('lesson.html');
    const isAbout = path.endsWith('about.html');
    const isTeam = path.endsWith('team.html');
    const isPartners = path.endsWith('partners.html');

    // Highlight current page in navbar
    let pageKey = 'home';
    if (isSubjects || isSubject || isLesson) pageKey = 'subjects';
    else if (isAbout) pageKey = 'about';
    else if (isTeam) pageKey = 'team';
    else if (isPartners) pageKey = 'partners';

    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-page') === pageKey) {
        link.classList.add('text-[#F5BC6B]', 'font-semibold', 'active');
        link.classList.remove('text-slate-300');
      } else {
        link.classList.remove('text-[#F5BC6B]', 'font-semibold', 'active');
        link.classList.add('text-slate-300');
      }
    });

    if (isSubjects) {
      this.initSubjectsCatalog();
    } else if (isSubject) {
      this.initSubjectPage();
    } else if (isLesson) {
      this.initLessonPage();
    } else if (isAbout) {
      this.initAboutPage();
    } else if (isTeam) {
      this.initTeamPage();
    } else if (isPartners) {
      this.initPartnersPage();
    } else {
      this.initHomePage();
    }
  },

  // ----------------------------------------------------
  // 1. HOME PAGE CONTROLLER
  // ----------------------------------------------------
  initHomePage() {
    this.renderScheduleSection();
    this.renderHomeSubjectsPreview();
    this.renderHomeTeamPreview();
    this.renderHomePartnersPreview();

    // Home semester selector
    const semSelect = document.getElementById('homeSemesterSelect');
    if (semSelect) {
      semSelect.addEventListener('change', (e) => {
        this.renderHomeSubjectsPreview(e.target.value);
      });
    }
  },

  // Render "This Week's Sessions" for in-person school students at School Hall
  renderScheduleSection() {
    const container = document.getElementById('scheduleContainer');
    const section = document.getElementById('scheduleSection');
    if (!container || !section) return;

    const sessions = (this.schedule && this.schedule.sessions) || [];
    if (sessions.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    container.innerHTML = sessions.map((session, index) => {
      const isNext = index === 0;
      const location = session.location || "School Main Hall (STEM Qena)";
      const target = session.target || "STEM Qena Students Only";

      return `
        <div class="schedule-card ${isNext ? 'active-session' : ''}">
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider ${isNext ? 'text-[#F5BC6B]' : 'text-[#38B2AC]'}">
                ${session.day} • ${session.time}
              </span>
            </div>
            <span class="text-[10px] uppercase font-bold bg-[#0E293E] text-[#2ECC71] border border-[#2ECC71]/30 px-2 py-0.5 rounded-full">
              In-Person
            </span>
          </div>

          <h3 class="text-lg font-bold text-white mb-1">${session.subject}</h3>
          <p class="text-xs text-slate-300 font-medium mb-3 line-clamp-2">${session.topic}</p>
          
          <div class="space-y-2 pt-2 border-t border-[#143B5C]/60 text-xs">
            <div class="flex items-center gap-1.5 text-[#F5BC6B] font-semibold">
              <span>📍</span>
              <span class="truncate">${location}</span>
            </div>
            <div class="flex items-center justify-between text-slate-400">
              <span>Presenter: <strong class="text-slate-200">${session.host}</strong></span>
            </div>
            <div class="pt-1">
              <span class="inline-block bg-[#071A26] border border-[#163E60] text-slate-300 text-[10px] font-semibold px-2 py-0.5 rounded">
                🔒 ${target}
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  // Render preview grid of subjects on Home
  renderHomeSubjectsPreview(semester = 'all') {
    const grid = document.getElementById('homeSubjectsGrid');
    if (!grid || !this.data) return;

    const subjects = this.data.subjects.filter(s => {
      return semester === 'all' || s.semesters.includes(semester);
    }).slice(0, 8);

    grid.innerHTML = subjects.map(subject => this.renderSubjectCardHtml(subject)).join('');
  },

  renderHomeTeamPreview() {
    const grid = document.getElementById('homeTeamGrid');
    if (!grid || !this.data) return;

    const preview = (this.data.teamMembers || []).slice(0, 6);
    grid.innerHTML = preview.map((m, idx) => this.renderMemberCardHtml(m, idx)).join('');
  },

  renderHomePartnersPreview() {
    const grid = document.getElementById('homePartnersGrid');
    if (!grid || !this.data) return;

    const preview = (this.data.partners || []).slice(0, 6);
    grid.innerHTML = preview.map(p => this.renderPartnerCardHtml(p)).join('');
  },

  // ----------------------------------------------------
  // 2. SUBJECTS CATALOG PAGE CONTROLLER (16 Subjects)
  // ----------------------------------------------------
  initSubjectsCatalog() {
    this.renderSubjectsCatalog();

    // Category filter pills
    document.querySelectorAll('.category-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.category-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeCategory = btn.getAttribute('data-category');
        this.renderSubjectsCatalog();
      });
    });

    // Semester dropdown
    const semSelect = document.getElementById('catalogSemesterSelect');
    if (semSelect) {
      semSelect.addEventListener('change', (e) => {
        this.activeSemester = e.target.value;
        this.renderSubjectsCatalog();
      });
    }

    // Search input
    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderSubjectsCatalog();
      });
    }
  },

  renderSubjectsCatalog() {
    const grid = document.getElementById('subjectsCatalogGrid');
    const emptyNotice = document.getElementById('subjectsEmptyNotice');
    if (!grid || !this.data) return;

    const filtered = this.data.subjects.filter(s => {
      const matchCat = this.activeCategory === 'all' || s.category.toLowerCase() === this.activeCategory.toLowerCase();
      const matchSem = this.activeSemester === 'all' || s.semesters.includes(this.activeSemester);
      const matchQuery = !this.searchQuery || s.name.toLowerCase().includes(this.searchQuery) || s.description.toLowerCase().includes(this.searchQuery);
      return matchCat && matchSem && matchQuery;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyNotice) emptyNotice.classList.remove('hidden');
    } else {
      if (emptyNotice) emptyNotice.classList.add('hidden');
      grid.innerHTML = filtered.map(subject => this.renderSubjectCardHtml(subject)).join('');
    }
  },

  // ----------------------------------------------------
  // 3. SUBJECT PAGE CONTROLLER (LO List or Branch Picker)
  // ----------------------------------------------------
  initSubjectPage() {
    const params = new URLSearchParams(window.location.search);
    const subjectId = params.get('s');
    const branchId = params.get('b');

    if (!subjectId || !this.data) {
      window.location.href = 'subjects.html';
      return;
    }

    const subject = this.data.subjects.find(s => s.id === subjectId);
    if (!subject) {
      window.location.href = 'subjects.html';
      return;
    }

    // Update Header / Title
    const titleEl = document.getElementById('subjectTitle');
    const descEl = document.getElementById('subjectDescription');
    const categoryBadge = document.getElementById('subjectCategoryBadge');

    if (titleEl) titleEl.textContent = this.formatSpaced(subject.name);
    if (descEl) descEl.textContent = subject.description;
    if (categoryBadge) {
      categoryBadge.textContent = subject.category.toUpperCase();
    }

    // CHECK IF SUBJECT HAS BRANCHES (e.g. Religion -> Islam / Christian)
    if (subject.branches && subject.branches.length > 0 && !branchId) {
      this.renderBranchPicker(subject);
      return;
    }

    // Render LOs for this subject (or selected branch)
    this.renderSubjectLOs(subject, branchId);
  },

  renderBranchPicker(subject) {
    const branchContainer = document.getElementById('branchPickerContainer');
    const losContainer = document.getElementById('losContainer');
    const semesterWrapper = document.getElementById('subjectSemesterWrapper');

    if (branchContainer) branchContainer.classList.remove('hidden');
    if (losContainer) losContainer.classList.add('hidden');
    if (semesterWrapper) semesterWrapper.classList.add('hidden');

    const branchGrid = document.getElementById('branchGrid');
    if (!branchGrid) return;

    branchGrid.innerHTML = subject.branches.map(branch => {
      const icon = branch.id === 'islam' ? Assets.islamQuran : Assets.christianCross;
      return `
        <a href="subject.html?s=${subject.id}&b=${branch.id}" class="figma-detail-card group">
          <div class="card-title">${branch.name}</div>
          <div class="w-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
            ${icon}
          </div>
          <div class="text-xs text-[#F5BC6B] mt-3 font-semibold flex items-center gap-1">
            Explore Study Units →
          </div>
        </a>
      `;
    }).join('');
  },

  renderSubjectLOs(subject, branchId = null) {
    const branchContainer = document.getElementById('branchPickerContainer');
    const losContainer = document.getElementById('losContainer');
    const semesterWrapper = document.getElementById('subjectSemesterWrapper');
    const branchBreadcrumb = document.getElementById('subjectBranchBreadcrumb');

    if (branchContainer) branchContainer.classList.add('hidden');
    if (losContainer) losContainer.classList.remove('hidden');
    if (semesterWrapper) semesterWrapper.classList.remove('hidden');

    if (branchId && branchBreadcrumb) {
      branchBreadcrumb.classList.remove('hidden');
      branchBreadcrumb.textContent = `> ${branchId.toUpperCase()}`;
    }

    const semSelect = document.getElementById('subjectSemesterSelect');
    const currentSem = semSelect ? semSelect.value : 'all';

    if (semSelect) {
      semSelect.onchange = () => this.renderSubjectLOs(subject, branchId);
    }

    const allLessons = this.data.lessons || [];
    const subjectLessons = allLessons.filter(l => {
      const matchSubject = l.subject === subject.id;
      const matchBranch = branchId ? l.branch === branchId : true;
      const matchSem = currentSem === 'all' || l.semester === currentSem;
      return matchSubject && matchBranch && matchSem;
    });

    const grid = document.getElementById('subjectLOsGrid');
    const emptyNotice = document.getElementById('subjectLOsEmpty');
    if (!grid) return;

    if (subjectLessons.length === 0) {
      grid.innerHTML = '';
      if (emptyNotice) emptyNotice.classList.remove('hidden');
      return;
    }

    if (emptyNotice) emptyNotice.classList.add('hidden');

    grid.innerHTML = subjectLessons.map(lo => {
      const hasVideos = lo.videos && lo.videos.length > 0;
      const hasFiles = lo.files && lo.files.length > 0;
      const hasTests = lo.testBanks && lo.testBanks.length > 0;
      const isUploaded = hasVideos || hasFiles || hasTests;

      const resourceSummary = [];
      if (hasVideos) resourceSummary.push(`${lo.videos.length} Videos`);
      if (hasFiles) resourceSummary.push(`${lo.files.length} Files`);
      if (hasTests) resourceSummary.push(`${lo.testBanks.length} Tests`);

      return `
        <a href="lesson.html?id=${lo.id}" class="lo-card ${isUploaded ? '' : 'unuploaded'} group">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-xs font-bold uppercase tracking-wider text-[#F5BC6B] bg-[#F5BC6B]/10 px-3 py-1 rounded-full border border-[#F5BC6B]/20">
                ${lo.id}
              </span>
              <span class="${isUploaded ? 'badge-uploaded' : 'badge-pending'}">
                ${isUploaded ? '● Available' : 'Not uploaded yet'}
              </span>
            </div>

            <h3 class="text-base md:text-lg font-bold text-white group-hover:text-[#F5BC6B] transition-colors mb-2">
              ${lo.title}
            </h3>
            
            <p class="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
              ${lo.description || 'Curated STEM syllabus learning outcome and study resources.'}
            </p>
          </div>

          <div class="pt-3 border-t border-[#163E60] flex items-center justify-between text-xs text-slate-400">
            <span class="font-medium">
              ${lo.weeks ? `Weeks: ${lo.weeks}` : 'Semester ' + (lo.semester || '1')}
            </span>
            <span class="text-[#38B2AC] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              ${isUploaded ? resourceSummary.join(' • ') : 'View Outline →'}
            </span>
          </div>
        </a>
      `;
    }).join('');
  },

  // ----------------------------------------------------
  // 4. LESSON PAGE CONTROLLER (Videos, Files, Test Banks in ONE SCROLL)
  // ----------------------------------------------------
  initLessonPage() {
    const params = new URLSearchParams(window.location.search);
    const lessonId = params.get('id');

    if (!lessonId || !this.data) {
      window.location.href = 'subjects.html';
      return;
    }

    const lesson = (this.data.lessons || []).find(l => l.id.toLowerCase() === lessonId.toLowerCase());
    if (!lesson) {
      alert('Lesson outcome not found.');
      window.location.href = 'subjects.html';
      return;
    }

    const subject = this.data.subjects.find(s => s.id === lesson.subject) || {
      id: lesson.subject,
      name: lesson.subject,
      category: 'Curriculum'
    };

    const breadcrumbSubject = document.getElementById('breadcrumbSubject');
    const breadcrumbLO = document.getElementById('breadcrumbLO');
    const backBtn = document.getElementById('lessonBackBtn');
    const lessonCodeTitle = document.getElementById('lessonCodeTitle');
    const lessonMainTitle = document.getElementById('lessonMainTitle');
    const lessonDescription = document.getElementById('lessonDescription');
    const lessonMetaBadge = document.getElementById('lessonMetaBadge');

    if (breadcrumbSubject) {
      breadcrumbSubject.textContent = subject.name;
      breadcrumbSubject.href = `subject.html?s=${subject.id}${lesson.branch ? '&b=' + lesson.branch : ''}`;
    }
    if (breadcrumbLO) breadcrumbLO.textContent = lesson.id;
    if (backBtn) backBtn.href = `subject.html?s=${subject.id}${lesson.branch ? '&b=' + lesson.branch : ''}`;
    if (lessonCodeTitle) lessonCodeTitle.textContent = `${subject.name} > ${lesson.id}`;
    if (lessonMainTitle) lessonMainTitle.textContent = lesson.title;
    if (lessonDescription) lessonDescription.textContent = lesson.description || 'Access all official study videos, PPT slides, and test banks below.';
    if (lessonMetaBadge) {
      lessonMetaBadge.textContent = `${lesson.weeks ? 'Weeks ' + lesson.weeks : 'Semester ' + lesson.semester} • Grade 1 STEM`;
    }

    // Render all 3 sections on one single page in one scroll
    this.renderLessonVideos(lesson);
    this.renderLessonFiles(lesson);
    this.renderLessonTestBanks(lesson);
  },

  renderLessonVideos(lesson) {
    const container = document.getElementById('videosListContainer');
    const countBadge = document.getElementById('videosCountBadge');
    if (!container) return;

    const videos = lesson.videos || [];
    if (countBadge) countBadge.textContent = `${videos.length} Lectures`;

    if (videos.length === 0) {
      container.innerHTML = `
        <div class="empty-resource-box">
          <div class="text-3xl mb-2">🎬</div>
          <h4 class="font-bold text-white text-sm mb-1">No video lectures uploaded yet</h4>
          <p class="text-xs text-slate-400">Our Senior '26 team and teachers are currently recording and editing lessons for ${lesson.id}.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = videos.map(video => {
      const title = typeof video === 'string' ? `${lesson.id} Lecture Video` : video.title;
      const url = typeof video === 'string' ? video : video.url;
      const duration = (video && video.duration) || 'Full Explanation';
      const speaker = (video && video.speaker) || "Senior '26 Leads";

      return `
        <div class="resource-item">
          <div>
            <h4 class="font-bold text-white text-base md:text-lg mb-1">${title}</h4>
            <div class="text-xs text-slate-400 flex items-center gap-3">
              <span>⏱ ${duration}</span>
              <span>•</span>
              <span>🎙 Presented by: <strong class="text-slate-200">${speaker}</strong></span>
            </div>
          </div>
          <a href="${url}" target="_blank" class="btn-gold text-xs px-5 py-2.5 flex-shrink-0">
            ▶ Watch on Drive
          </a>
        </div>
      `;
    }).join('');
  },

  renderLessonFiles(lesson) {
    const container = document.getElementById('filesListContainer');
    const countBadge = document.getElementById('filesCountBadge');
    if (!container) return;

    const files = lesson.files || [];
    if (countBadge) countBadge.textContent = `${files.length} Files`;

    if (files.length === 0) {
      container.innerHTML = `
        <div class="empty-resource-box">
          <div class="text-3xl mb-2">📁</div>
          <h4 class="font-bold text-white text-sm mb-1">No slide decks uploaded yet</h4>
          <p class="text-xs text-slate-400">PowerPoint presentations and summary PDFs will be added here once vetted.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = files.map(file => {
      const title = typeof file === 'string' ? `${lesson.id} Master Study File` : file.title;
      const url = typeof file === 'string' ? file : file.url;
      const format = (file && file.format) || 'PDF / PPTX';
      const size = (file && file.size) || 'Verified File';

      return `
        <div class="resource-item">
          <div>
            <h4 class="font-bold text-white text-base md:text-lg mb-1">${title}</h4>
            <div class="text-xs text-slate-400 flex items-center gap-3">
              <span class="bg-[#163E60] text-slate-200 font-bold px-2 py-0.5 rounded text-[11px]">${format}</span>
              <span>•</span>
              <span>File Size: ${size}</span>
            </div>
          </div>
          <a href="${url}" target="_blank" class="btn-cyan-back text-xs px-5 py-2.5 flex-shrink-0">
            📥 View & Download
          </a>
        </div>
      `;
    }).join('');
  },

  renderLessonTestBanks(lesson) {
    const container = document.getElementById('testBanksListContainer');
    const countBadge = document.getElementById('testBanksCountBadge');
    if (!container) return;

    const testBanks = lesson.testBanks || [];
    if (countBadge) countBadge.textContent = `${testBanks.length} Question Banks`;

    if (testBanks.length === 0) {
      container.innerHTML = `
        <div class="empty-resource-box">
          <div class="text-3xl mb-2">📝</div>
          <h4 class="font-bold text-white text-sm mb-1">No question banks uploaded yet</h4>
          <p class="text-xs text-slate-400">University reference problems and MCQs for ${lesson.id} are being compiled.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = testBanks.map(tb => {
      const title = typeof tb === 'string' ? `${lesson.id} Reference Question Bank` : tb.title;
      const url = typeof tb === 'string' ? tb : tb.url;
      const count = (tb && tb.questionsCount) ? `${tb.questionsCount} Questions` : 'Comprehensive Exam Bank';
      const difficulty = (tb && tb.difficulty) || 'Standard';

      return `
        <div class="resource-item">
          <div>
            <h4 class="font-bold text-white text-base md:text-lg mb-1">${title}</h4>
            <div class="text-xs text-slate-400 flex items-center gap-3">
              <span>📊 ${count}</span>
              <span>•</span>
              <span>Difficulty: <strong class="text-[#F5BC6B]">${difficulty}</strong></span>
            </div>
          </div>
          <a href="${url}" target="_blank" class="btn-drive-action text-xs px-5 py-2.5 flex-shrink-0">
            📄 Open Test Bank
          </a>
        </div>
      `;
    }).join('');
  },

  // ----------------------------------------------------
  // 5. ABOUT, TEAM & PARTNERS PAGE CONTROLLERS
  // ----------------------------------------------------
  initAboutPage() {
    if (!this.data || !this.data.about) return;
    const about = this.data.about;

    const storyEl = document.getElementById('aboutFullStory');
    if (storyEl) storyEl.textContent = about.fullStory;

    const statsGrid = document.getElementById('aboutStatsGrid');
    if (statsGrid && about.stats) {
      statsGrid.innerHTML = about.stats.map(s => `
        <div class="bg-[#0C2337] border border-[#163E60] rounded-xl p-4 text-center">
          <div class="text-2xl md:text-3xl font-extrabold text-[#F5BC6B]">${s.value}</div>
          <div class="text-xs text-slate-400 mt-1">${s.label}</div>
        </div>
      `).join('');
    }
  },

  initTeamPage() {
    const grid = document.getElementById('teamGrid');
    if (!grid || !this.data) return;

    const team = this.data.teamMembers || [];
    grid.innerHTML = team.map((member, idx) => this.renderMemberCardHtml(member, idx)).join('');
  },

  initPartnersPage() {
    const grid = document.getElementById('partnersGrid');
    if (!grid || !this.data) return;

    const partners = this.data.partners || [];
    grid.innerHTML = partners.map(partner => this.renderPartnerCardHtml(partner)).join('');
  },

  // ----------------------------------------------------
  // HTML CARD TEMPLATES
  // ----------------------------------------------------
  renderSubjectCardHtml(subject) {
    const icon = (Assets.subjects && Assets.subjects[subject.id]) || Assets.subjects.math;
    return `
      <a href="subject.html?s=${subject.id}" class="subject-card group">
        <div class="transform group-hover:scale-110 transition-transform duration-300">
          ${icon}
        </div>
        <div class="subject-title">${subject.name}</div>
        <div class="text-xs text-slate-400 mt-1 capitalize">
          ${subject.category} • Sem ${subject.semesters.join(' & ')}
        </div>
      </a>
    `;
  },

  renderMemberCardHtml(member, idx) {
    return `
      <div class="member-card cursor-pointer group" onclick="App.openMemberModal(${member.id})">
        <div class="image-wrapper">
          ${Assets.memberAvatar(idx)}
        </div>
        <div class="card-badge-footer">
          <div class="member-name">${member.name}</div>
          <div class="member-info">${member.role}</div>
        </div>
      </div>
    `;
  },

  renderPartnerCardHtml(partner) {
    return `
      <div class="member-card cursor-pointer group" onclick="App.openPartnerModal(${partner.id})">
        <div class="image-wrapper">
          ${Assets.partnerSilhouette}
        </div>
        <div class="card-badge-footer">
          <div class="member-name">${partner.name}</div>
          <div class="member-info">${partner.role}</div>
        </div>
      </div>
    `;
  },

  // ----------------------------------------------------
  // GLOBAL MODALS & EVENTS
  // ----------------------------------------------------
  bindGlobalNavigation() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Bind footer dynamic config
    if (window.QSC_CONFIG) {
      const emailLink = document.getElementById('footerEmailLink');
      if (emailLink && window.QSC_CONFIG.contactEmail) {
        emailLink.href = `mailto:${window.QSC_CONFIG.contactEmail}`;
      }
      const phoneLink = document.getElementById('footerPhoneLink');
      if (phoneLink && window.QSC_CONFIG.contactPhone) {
        phoneLink.href = `tel:${window.QSC_CONFIG.contactPhone.replace(/\s+/g, '')}`;
      }
    }

    document.querySelectorAll('.btn-join-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openJoinModal();
      });
    });

    document.querySelectorAll('.btn-partner-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openPartnerFormModal();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeAllModals();
    });

    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.closeAllModals();
      });
    }
  },

  openJoinModal() {
    const link = (window.QSC_CONFIG && window.QSC_CONFIG.whatsAppCommunityLink) || this.whatsAppCommunityLink;
    const modalBody = `
      <div class="p-6 md:p-8 space-y-6 text-center">
        <div class="flex justify-end">
          <button onclick="App.closeAllModals()" class="text-slate-400 hover:text-white text-2xl p-1">&times;</button>
        </div>
        
        <div class="w-16 h-16 bg-[#2ECC71]/20 rounded-full flex items-center justify-center mx-auto text-3xl text-[#2ECC71]">
          💬
        </div>

        <div>
          <div class="letter-spaced-title text-sm mb-1">Q S C &nbsp; C O M M U N I T Y</div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-white">Join QSTEMora on WhatsApp</h2>
          <p class="text-sm text-slate-300 mt-2 max-w-md mx-auto">
            Connect directly with Senior '26 founders, mentors, and STEM students from all 27 governorates in Egypt.
          </p>
        </div>

        <div class="bg-[#081E2D] p-4 rounded-xl border border-[#163E60] text-xs text-slate-400 space-y-2 text-left">
          <div class="flex items-center gap-2">
            <span class="text-[#2ECC71]">✓</span> Instant School Hall session announcements & updates
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[#2ECC71]">✓</span> Direct Q&A with top subject mentors & teachers
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[#2ECC71]">✓</span> New PDF and PPT drop alerts
          </div>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="${link}" target="_blank" onclick="App.closeAllModals()" class="btn-gold text-sm py-3 px-8">
            OPEN WHATSAPP COMMUNITY ↗
          </a>
          <button onclick="App.closeAllModals()" class="btn-gold-outline text-sm py-2.5 px-6">
            Maybe Later
          </button>
        </div>
      </div>
    `;
    this.showModal(modalBody);
  },

  openPartnerFormModal() {
    const modalBody = `
      <div class="p-6 md:p-8 space-y-5 text-left">
        <div class="flex items-start justify-between border-b border-[#163E60] pb-4">
          <div>
            <div class="letter-spaced-title text-sm">C O L L A B O R A T I O N</div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-1">Do a Partnership</h2>
            <p class="text-xs text-slate-400 mt-1">Partner with QSTEMora Club to sponsor STEM competitions, provide kits, or host academic workshops.</p>
          </div>
          <button onclick="App.closeAllModals()" class="text-slate-400 hover:text-white text-2xl p-1">&times;</button>
        </div>

        <form id="partnerForm" onsubmit="App.handlePartnerSubmit(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Organization / School Name</label>
            <input type="text" required placeholder="e.g. STEM Egypt Alliance" class="w-full bg-[#071A26] border border-[#163E60] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5BC6B]">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Contact Person</label>
              <input type="text" required placeholder="Representative Name" class="w-full bg-[#071A26] border border-[#163E60] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5BC6B]">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Official Email</label>
              <input type="email" required placeholder="contact@partner.org" class="w-full bg-[#071A26] border border-[#163E60] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5BC6B]">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Proposed Collaboration Details</label>
            <textarea rows="3" placeholder="Tell us how we can collaborate to empower Egyptian STEM students..." class="w-full bg-[#071A26] border border-[#163E60] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5BC6B]"></textarea>
          </div>

          <div class="pt-2">
            <button type="submit" class="w-full btn-gold text-base py-3">SUBMIT PARTNERSHIP REQUEST</button>
          </div>
        </form>
      </div>
    `;
    this.showModal(modalBody);
  },

  handlePartnerSubmit(e) {
    e.preventDefault();
    this.closeAllModals();
    alert('🤝 Thank you! Your partnership request has been submitted.');
  },

  openMemberModal(memberId) {
    if (!this.data) return;
    const member = (this.data.teamMembers || []).find(m => m.id === memberId);
    if (!member) return;

    const modalBody = `
      <div class="p-6 md:p-8 space-y-6 text-left">
        <div class="flex items-start justify-between border-b border-[#163E60] pb-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#F5BC6B] px-2.5 py-0.5 bg-[#F5BC6B]/10 rounded-full">${member.tag}</span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-1">${member.name}</h2>
            <div class="text-sm text-[#38B2AC] font-semibold">${member.role}</div>
          </div>
          <button onclick="App.closeAllModals()" class="text-slate-400 hover:text-white text-2xl p-1">&times;</button>
        </div>

        <div class="bg-[#081E2D] rounded-xl p-5 border border-[#163E60] space-y-3">
          <p class="text-slate-300 text-base leading-relaxed">${member.bio}</p>
          <div class="text-xs text-slate-400 pt-2 border-t border-[#163E60] flex items-center gap-2">
            <span>📍 Governorate:</span>
            <strong class="text-white">${member.governorate}, Egypt</strong>
          </div>
        </div>

        <div class="flex justify-end">
          <button onclick="App.closeAllModals()" class="btn-gold text-xs px-6 py-2">Close</button>
        </div>
      </div>
    `;
    this.showModal(modalBody);
  },

  openPartnerModal(partnerId) {
    if (!this.data) return;
    const partner = (this.data.partners || []).find(p => p.id === partnerId);
    if (!partner) return;

    const modalBody = `
      <div class="p-6 md:p-8 space-y-6 text-left">
        <div class="flex items-start justify-between border-b border-[#163E60] pb-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#38B2AC] px-2.5 py-0.5 bg-[#38B2AC]/10 rounded-full">${partner.partnerType}</span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-1">${partner.name}</h2>
            <div class="text-sm text-[#F5BC6B] font-semibold">${partner.role}</div>
          </div>
          <button onclick="App.closeAllModals()" class="text-slate-400 hover:text-white text-2xl p-1">&times;</button>
        </div>

        <div class="bg-[#081E2D] rounded-xl p-5 border border-[#163E60] space-y-3">
          <p class="text-slate-300 text-base leading-relaxed">${partner.info}</p>
          <div class="text-xs text-slate-400 pt-2 border-t border-[#163E60] flex items-center gap-2">
            <span>📍 Location:</span>
            <strong class="text-white">${partner.location}</strong>
          </div>
        </div>

        <div class="flex justify-between items-center pt-2">
          <button onclick="App.openPartnerFormModal()" class="btn-gold text-xs px-5 py-2">Propose Collaboration</button>
          <button onclick="App.closeAllModals()" class="btn-gold-outline text-xs px-4 py-2">Close</button>
        </div>
      </div>
    `;
    this.showModal(modalBody);
  },

  showModal(contentHtml) {
    const backdrop = document.getElementById('modalBackdrop');
    const container = document.getElementById('modalContainer');
    if (backdrop && container) {
      container.innerHTML = contentHtml;
      backdrop.classList.remove('hidden');
      backdrop.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  },

  closeAllModals() {
    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) {
      backdrop.classList.add('hidden');
      backdrop.classList.remove('flex');
      document.body.style.overflow = '';
    }
  },

  formatSpaced(text) {
    if (!text) return '';
    return text.split('').join(' ');
  }
};

// Initialize App when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
