// ==========================================================================
// QSTEMora Club - Client Application Engine (static-content build)
// ==========================================================================
// All page content (subjects, lessons, team, partners, schedule) now lives
// directly in the HTML files. This script only handles shared UI behaviour:
//   - mobile menu, navbar highlight, footer contact links
//   - the JOIN / partnership modals
//   - member & partner detail modals, filled from each card's data-* attributes
// There is no data fetch and no fallback store any more.
// ==========================================================================
window.QSC_CONFIG = {
  clubName: "QSTEMora Club (QSC)",
  schoolName: "STEM Qena School, Egypt",
  whatsAppCommunityLink: "https://chat.whatsapp.com/E1pwVvI5aiGCjrFiMs1yQ0",
  contactEmail: "qenastudentclubs@gmail.com",
  contactPhone: "01123389108",
  schoolLocationName: "STEM Qena School Hall"
};

const App = {
  init() {
    this.bindGlobalNavigation();
    this.highlightNav();
  },

  // Highlight the current page in the navbar.
  highlightNav() {
    const path = window.location.pathname.toLowerCase();
    let pageKey = 'home';
    if (path.endsWith('subjects.html') || path.endsWith('subject.html') || path.endsWith('lesson.html')) pageKey = 'subjects';
    else if (path.endsWith('about.html')) pageKey = 'about';
    else if (path.endsWith('team.html')) pageKey = 'team';
    else if (path.endsWith('partners.html')) pageKey = 'partners';

    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-page') === pageKey) {
        link.classList.add('text-[#F5BC6B]', 'font-semibold', 'active');
        link.classList.remove('text-slate-300');
      } else {
        link.classList.remove('text-[#F5BC6B]', 'font-semibold', 'active');
        link.classList.add('text-slate-300');
      }
    });
  },

  bindGlobalNavigation() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    if (window.QSC_CONFIG) {
      const emailLink = document.getElementById('footerEmailLink');
      if (emailLink && window.QSC_CONFIG.contactEmail) emailLink.href = `mailto:${window.QSC_CONFIG.contactEmail}`;
      const phoneLink = document.getElementById('footerPhoneLink');
      if (phoneLink && window.QSC_CONFIG.contactPhone) phoneLink.href = `tel:${window.QSC_CONFIG.contactPhone.replace(/\s+/g, '')}`;
    }

    document.querySelectorAll('.btn-join-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); this.openJoinModal(); });
    });
    document.querySelectorAll('.btn-partner-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); this.openPartnerFormModal(); });
    });

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.closeAllModals(); });

    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) backdrop.addEventListener('click', (e) => { if (e.target === backdrop) this.closeAllModals(); });
  },

  // ---- Member detail modal (content read from the clicked card's data-*) ----
  openMemberStatic(el) {
    const d = el.dataset;
    this.showModal(`
      <div class="p-6 md:p-8 space-y-6 text-left">
        <div class="flex items-start justify-between border-b border-[#163E60] pb-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#F5BC6B] px-2.5 py-0.5 bg-[#F5BC6B]/10 rounded-full">${d.tag || ''}</span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-1">${d.name || ''}</h2>
            <div class="text-sm text-[#38B2AC] font-semibold">${d.role || ''}</div>
          </div>
          <button onclick="App.closeAllModals()" class="text-slate-400 hover:text-white text-2xl p-1">&times;</button>
        </div>
        <div class="bg-[#081E2D] rounded-xl p-5 border border-[#163E60] space-y-3">
          <p class="text-slate-300 text-base leading-relaxed">${d.bio || ''}</p>
          <div class="text-xs text-slate-400 pt-2 border-t border-[#163E60] flex items-center gap-2">
            <span>📍 Governorate:</span><strong class="text-white">${d.governorate || ''}, Egypt</strong>
          </div>
        </div>
        <div class="flex justify-end">
          <button onclick="App.closeAllModals()" class="btn-gold text-xs px-6 py-2">Close</button>
        </div>
      </div>
    `);
  },

  // ---- Partner detail modal (content read from the clicked card's data-*) ----
  openPartnerStatic(el) {
    const d = el.dataset;
    this.showModal(`
      <div class="p-6 md:p-8 space-y-6 text-left">
        <div class="flex items-start justify-between border-b border-[#163E60] pb-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#38B2AC] px-2.5 py-0.5 bg-[#38B2AC]/10 rounded-full">${d.partnerType || ''}</span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-1">${d.name || ''}</h2>
            <div class="text-sm text-[#F5BC6B] font-semibold">${d.role || ''}</div>
          </div>
          <button onclick="App.closeAllModals()" class="text-slate-400 hover:text-white text-2xl p-1">&times;</button>
        </div>
        <div class="bg-[#081E2D] rounded-xl p-5 border border-[#163E60] space-y-3">
          <p class="text-slate-300 text-base leading-relaxed">${d.info || ''}</p>
          <div class="text-xs text-slate-400 pt-2 border-t border-[#163E60] flex items-center gap-2">
            <span>📍 Location:</span><strong class="text-white">${d.location || ''}</strong>
          </div>
        </div>
        <div class="flex justify-between items-center pt-2">
          <button onclick="App.openPartnerFormModal()" class="btn-gold text-xs px-5 py-2">Propose Collaboration</button>
          <button onclick="App.closeAllModals()" class="btn-gold-outline text-xs px-4 py-2">Close</button>
        </div>
      </div>
    `);
  },

  openJoinModal() {
    const link = (window.QSC_CONFIG && window.QSC_CONFIG.whatsAppCommunityLink) || '';
    this.showModal(`
      <div class="p-6 md:p-8 space-y-6 text-center">
        <div class="flex justify-end">
          <button onclick="App.closeAllModals()" class="text-slate-400 hover:text-white text-2xl p-1">&times;</button>
        </div>
        <div class="w-16 h-16 bg-[#2ECC71]/20 rounded-full flex items-center justify-center mx-auto text-3xl text-[#2ECC71]">💬</div>
        <div>
          <div class="letter-spaced-title text-sm mb-1">Q S C &nbsp; C O M M U N I T Y</div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-white">Join QSTEMora on WhatsApp</h2>
          <p class="text-sm text-slate-300 mt-2 max-w-md mx-auto">Connect directly with Senior '28 founders, mentors, and STEM students from all 27 governorates in Egypt.</p>
        </div>
        <div class="bg-[#081E2D] p-4 rounded-xl border border-[#163E60] text-xs text-slate-400 space-y-2 text-left">
          <div class="flex items-center gap-2"><span class="text-[#2ECC71]">✓</span> Instant School Hall session announcements & updates</div>
          <div class="flex items-center gap-2"><span class="text-[#2ECC71]">✓</span> Direct Q&A with top subject mentors & teachers</div>
          <div class="flex items-center gap-2"><span class="text-[#2ECC71]">✓</span> New PDF and PPT drop alerts</div>
        </div>
        <div class="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="${link}" target="_blank" onclick="App.closeAllModals()" class="btn-gold text-sm py-3 px-8">OPEN WHATSAPP COMMUNITY ↗</a>
          <button onclick="App.closeAllModals()" class="btn-gold-outline text-sm py-2.5 px-6">Maybe Later</button>
        </div>
      </div>
    `);
  },

  openPartnerFormModal() {
    this.showModal(`
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
            <input type="text" id="partnerOrg" name="organization" required placeholder="e.g. STEM Egypt Alliance" class="w-full bg-[#071A26] border border-[#163E60] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5BC6B]">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Contact Person</label>
              <input type="text" id="partnerContact" name="contactPerson" required placeholder="Representative Name" class="w-full bg-[#071A26] border border-[#163E60] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5BC6B]">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Official Email</label>
              <input type="email" id="partnerEmail" name="email" required placeholder="contact@partner.org" class="w-full bg-[#071A26] border border-[#163E60] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5BC6B]">
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Proposed Collaboration Details</label>
            <textarea rows="3" id="partnerDetails" name="details" placeholder="Tell us how we can collaborate to empower Egyptian STEM students..." class="w-full bg-[#071A26] border border-[#163E60] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5BC6B]"></textarea>
          </div>
          <div class="pt-2">
            <button type="submit" id="partnerSubmitBtn" class="w-full btn-gold text-base py-3">SUBMIT PARTNERSHIP REQUEST</button>
            <p id="partnerFormMsg" class="text-xs mt-2 text-center hidden"></p>
          </div>
        </form>
      </div>
    `);
  },

  // Sends the partnership request straight to the club inbox in the background
  // (no email app opens for the visitor). We post the form to FormSubmit.co, a
  // free relay service that forwards the message to contactEmail.
  async handlePartnerSubmit(e) {
    e.preventDefault();
    const val = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    const org = val('partnerOrg');
    const contact = val('partnerContact');
    const email = val('partnerEmail');
    const details = val('partnerDetails');

    const to = (window.QSC_CONFIG && window.QSC_CONFIG.contactEmail) || 'qenastudentclubs@gmail.com';
    const btn = document.getElementById('partnerSubmitBtn');
    const msg = document.getElementById('partnerFormMsg');
    const showMsg = (text, colorClass) => {
      if (!msg) return;
      msg.textContent = text;
      msg.className = 'text-xs mt-2 text-center ' + colorClass;
      msg.classList.remove('hidden');
    };

    if (btn) { btn.disabled = true; btn.textContent = 'SENDING…'; }

    try {
      // Stop waiting after 15s so the button can't get stuck on "SENDING…" forever.
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 15000);
      const res = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(to), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        signal: ctrl.signal,
        body: JSON.stringify({
          _subject: 'Partnership Request — ' + (org || 'New'),
          _template: 'table',
          _captcha: 'false',
          'Organization / School': org,
          'Contact Person': contact,
          'Official Email': email,
          'Proposed Collaboration': details
        })
      });
      clearTimeout(timer);
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === 'true' || data.success === true)) {
        this.showModal(`
          <div class="p-8 md:p-10 text-center space-y-4">
            <div class="w-16 h-16 bg-[#2ECC71]/20 rounded-full flex items-center justify-center mx-auto text-3xl text-[#2ECC71]">✓</div>
            <h2 class="text-2xl font-extrabold text-white">Request Sent!</h2>
            <p class="text-sm text-slate-300 max-w-md mx-auto">Thank you, ${(contact || 'friend').replace(/[<>&]/g, '')}. Your partnership request has been delivered to the QSTEMora Club team. We'll reply to <strong class="text-[#F5BC6B]">${(email || '').replace(/[<>&]/g, '')}</strong> soon.</p>
            <button onclick="App.closeAllModals()" class="btn-gold text-sm px-8 py-2.5">Close</button>
          </div>
        `);
      } else {
        throw new Error(data.message || 'Relay rejected the request.');
      }
    } catch (err) {
      if (btn) { btn.disabled = false; btn.textContent = 'SUBMIT PARTNERSHIP REQUEST'; }
      showMsg('Sorry, the automatic send failed (check your connection). You can email us directly at ' + to + '.', 'text-[#F5BC6B]');
    }
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
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
