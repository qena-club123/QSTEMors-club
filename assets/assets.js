// QSTEMora Club - Vector Artwork and Asset Library

const Assets = {
  // Main Brand Crest / Logo
  logo: `
    <img src="assets/images/logo.jpg" alt="QSTEMora Club Logo" class="w-11 h-11 rounded-full object-cover shadow-[0_0_12px_rgba(245,188,107,0.4)] border border-[#F5BC6B]/40 group-hover:scale-105 transition-transform duration-300" />
  `,

  // Hero Section Radiant Golden Temple with Sunrays, Temple Columns, Open Book, and Students
  heroIllustration: `
    <div class="relative flex items-center justify-center">
      <!-- Ambient Glow Behind Hero Crest -->
      <div class="absolute w-72 h-72 md:w-96 md:h-96 bg-[#F5BC6B]/20 rounded-full blur-3xl pointer-events-none"></div>
      <img src="assets/images/hero-crest.png" alt="Qena STEM Aura Knowledge Temple" class="relative z-10 w-full max-w-[420px] md:max-w-[480px] h-auto mx-auto object-contain filter drop-shadow-[0_15px_35px_rgba(245,188,107,0.3)] animate-float" />
    </div>
  `,

  // Teamwork Circle Puzzle Illustration (Used on Home & About Us pages)
  teamworkPuzzle: `
    <div class="relative flex items-center justify-center p-2">
      <div class="w-full max-w-[320px] md:max-w-[380px] aspect-square rounded-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-4 border-[#38B2AC]/40 hover:scale-105 transition-transform duration-500 bg-[#A8DADC]">
        <img src="assets/images/about-puzzle.jpg" alt="Collaborative STEM Teamwork Puzzle" class="w-full h-full object-cover" />
      </div>
    </div>
  `,

  // Coming Soon Hand-Held Sign Artwork (From Figma Detail Screens)
  comingSoonSign: `
    <svg viewBox="0 0 240 240" class="w-36 h-36 md:w-44 md:h-44 mx-auto filter drop-shadow-md">
      <!-- White Signboard -->
      <rect x="50" y="25" width="140" height="90" rx="8" fill="#FFFFFF" stroke="#000000" stroke-width="4" />
      <text x="120" y="65" font-family="'Poppins', sans-serif" font-weight="900" font-size="21" fill="#000000" text-anchor="middle" letter-spacing="0.5">COMING</text>
      <text x="120" y="90" font-family="'Poppins', sans-serif" font-weight="900" font-size="21" fill="#000000" text-anchor="middle" letter-spacing="0.5">SOON</text>
      <line x1="65" y1="98" x2="175" y2="98" stroke="#000000" stroke-width="2.5" />
      <text x="120" y="110" font-family="'Poppins', sans-serif" font-weight="700" font-size="10" fill="#000000" text-anchor="middle" letter-spacing="1">STAY TUNED</text>
      
      <!-- Wooden Stick Handle -->
      <rect x="115" y="115" width="10" height="65" fill="#D2B48C" stroke="#000000" stroke-width="2.5" />
      
      <!-- Hand holding stick -->
      <path d="M120 185 C140 185 160 215 180 240 L80 240 C100 215 110 185 120 185 Z" fill="#0E1B26" />
      <rect x="95" y="180" width="48" height="12" rx="3" fill="#FFFFFF" stroke="#000000" stroke-width="2" />
      <ellipse cx="118" cy="165" rx="18" ry="14" fill="#FBD5B5" stroke="#000000" stroke-width="3" />
      <path d="M106 156 Q118 152 130 156" stroke="#000000" stroke-width="2.5" fill="none" />
      <path d="M106 165 Q118 161 130 165" stroke="#000000" stroke-width="2.5" fill="none" />
      <path d="M106 174 Q118 170 130 174" stroke="#000000" stroke-width="2.5" fill="none" />
    </svg>
  `,

  // Religion: Islam - Holy Quran Artwork (From Figma Religion Screen)
  islamQuran: `
    <svg viewBox="0 0 240 240" class="w-40 h-40 md:w-48 md:h-48 mx-auto filter drop-shadow-md">
      <g transform="rotate(-6 120 120)">
        <rect x="70" y="35" width="100" height="135" rx="8" fill="#1B4D3E" stroke="#F5BC6B" stroke-width="4" />
        <rect x="76" y="41" width="88" height="123" rx="5" fill="#153E32" stroke="#F5BC6B" stroke-width="2" stroke-dasharray="4,2" />
        <circle cx="120" cy="102" r="24" fill="#F5BC6B" stroke="#B8860B" stroke-width="2" />
        <circle cx="120" cy="102" r="19" fill="#153E32" stroke="#F5BC6B" stroke-width="1.5" />
        <polygon points="120,86 124,96 135,96 126,102 129,112 120,106 111,112 114,102 105,96 116,96" fill="#F5BC6B" />
        <polygon points="80,45 92,45 80,57" fill="#F5BC6B" />
        <polygon points="160,45 148,45 160,57" fill="#F5BC6B" />
        <polygon points="80,159 92,159 80,147" fill="#F5BC6B" />
        <polygon points="160,159 148,159 160,147" fill="#F5BC6B" />
      </g>
      <ellipse cx="65" cy="80" rx="14" ry="18" fill="#F5CBA7" stroke="#333" stroke-width="2" transform="rotate(35 65 80)" />
      <circle cx="68" cy="74" r="5" fill="#F5CBA7" stroke="#333" stroke-width="1.5" />
      <circle cx="68" cy="84" r="5" fill="#F5CBA7" stroke="#333" stroke-width="1.5" />
      <path d="M40 70 L60 85 L45 110 L25 95 Z" fill="#ECEFF1" />
      <ellipse cx="170" cy="155" rx="16" ry="18" fill="#F5CBA7" stroke="#333" stroke-width="2" transform="rotate(-30 170 155)" />
      <path d="M175 160 L200 170 L190 200 L165 190 Z" fill="#ECEFF1" />
    </svg>
  `,

  // Religion: Christian - Cross & Reaching Hands (From Figma Religion Screen)
  christianCross: `
    <svg viewBox="0 0 240 240" class="w-40 h-40 md:w-48 md:h-48 mx-auto filter drop-shadow-md">
      <g stroke="#FFFFFF" stroke-width="1.5" opacity="0.75">
        <line x1="120" y1="25" x2="120" y2="45" />
        <line x1="85" y1="40" x2="98" y2="53" />
        <line x1="155" y1="40" x2="142" y2="53" />
        <line x1="65" y1="75" x2="85" y2="75" />
        <line x1="175" y1="75" x2="155" y2="75" />
        <line x1="85" y1="110" x2="98" y2="97" />
        <line x1="155" y1="110" x2="142" y2="97" />
      </g>
      <polygon points="112,45 128,45 128,68 152,68 152,82 128,82 128,145 112,145 112,82 88,82 88,68 112,68" fill="#0A1926" stroke="#FFFFFF" stroke-width="2.5" />
      <g fill="#0A1926" stroke="#FFFFFF" stroke-width="1.5">
        <path d="M85 140 C85 115 100 115 105 135 L108 175 L85 175 Z" />
        <path d="M72 148 C72 130 84 130 88 150 L95 180 L75 180 Z" />
        <path d="M60 160 C60 145 72 145 76 162 L82 185 L65 185 Z" />
        <path d="M60 185 L105 185 L95 230 L50 230 Z" />
      </g>
      <g fill="#0A1926" stroke="#FFFFFF" stroke-width="1.5">
        <path d="M155 140 C155 115 140 115 135 135 L132 175 L155 175 Z" />
        <path d="M168 148 C168 130 156 130 152 150 L145 180 L165 180 Z" />
        <path d="M180 160 C180 145 168 145 164 162 L158 185 L175 185 Z" />
        <path d="M135 185 L180 185 L190 230 L145 230 Z" />
      </g>
    </svg>
  `,

  // Resource: Videos - Clapperboard & Play Icon (From Figma L.O Material Screen)
  videosClapper: `
    <svg viewBox="0 0 240 240" class="w-36 h-36 md:w-44 md:h-44 mx-auto filter drop-shadow-md">
      <g transform="rotate(-8 120 70)">
        <polygon points="45,45 195,45 195,65 45,65" fill="#1C2D3D" stroke="#000000" stroke-width="3" />
        <polygon points="65,46 80,46 65,64 50,64" fill="#FFFFFF" />
        <polygon points="105,46 120,46 105,64 90,64" fill="#FFFFFF" />
        <polygon points="145,46 160,46 145,64 130,64" fill="#FFFFFF" />
        <polygon points="185,46 194,46 180,64 170,64" fill="#FFFFFF" />
      </g>
      <rect x="52" y="75" width="136" height="110" rx="8" fill="#0A1826" stroke="#000000" stroke-width="4" />
      <rect x="68" y="92" width="104" height="76" rx="6" fill="#152636" stroke="#2596be" stroke-width="2" />
      <polygon points="112,112 136,130 112,148" fill="#4FD1C5" stroke="#FFFFFF" stroke-width="2" filter="drop-shadow(0 0 8px rgba(79, 209, 197, 0.6))" />
    </svg>
  `,

  // Resource: Files - Clipboard & Lecture Notes (From Figma L.O Material Screen)
  filesNotes: `
    <svg viewBox="0 0 240 240" class="w-36 h-36 md:w-44 md:h-44 mx-auto filter drop-shadow-md">
      <rect x="65" y="45" width="110" height="150" rx="10" fill="#0F202E" stroke="#000000" stroke-width="4" />
      <rect x="80" y="60" width="80" height="110" rx="4" fill="#FFFFFF" stroke="#000000" stroke-width="3" />
      <rect x="100" y="50" width="40" height="16" rx="4" fill="#B0BEC5" stroke="#000000" stroke-width="2.5" />
      <circle cx="120" cy="58" r="3" fill="#37474F" />
      <line x1="92" y1="85" x2="148" y2="85" stroke="#0F202E" stroke-width="5" stroke-linecap="round" />
      <line x1="92" y1="105" x2="148" y2="105" stroke="#0F202E" stroke-width="5" stroke-linecap="round" />
      <line x1="92" y1="125" x2="148" y2="125" stroke="#0F202E" stroke-width="5" stroke-linecap="round" />
      <line x1="92" y1="145" x2="130" y2="145" stroke="#0F202E" stroke-width="5" stroke-linecap="round" />
    </svg>
  `,

  // Resource: Test Banks - Hands Answering Exam Paper with Pencil (From Figma L.O Material Screen)
  testBanksExam: `
    <svg viewBox="0 0 240 240" class="w-36 h-36 md:w-44 md:h-44 mx-auto filter drop-shadow-md">
      <g transform="rotate(-4 110 120)">
        <rect x="50" y="38" width="90" height="135" rx="5" fill="#FFFFFF" stroke="#333333" stroke-width="3" />
        <line x1="60" y1="52" x2="95" y2="52" stroke="#2B6CB0" stroke-width="3" stroke-linecap="round" />
        <line x1="105" y1="52" x2="130" y2="52" stroke="#718096" stroke-width="2" />
        <circle cx="66" cy="70" r="3.5" fill="#333" />
        <circle cx="80" cy="70" r="3.5" fill="none" stroke="#333" stroke-width="1.5" />
        <circle cx="94" cy="70" r="3.5" fill="none" stroke="#333" stroke-width="1.5" />
        <circle cx="108" cy="70" r="3.5" fill="none" stroke="#333" stroke-width="1.5" />
        <circle cx="66" cy="85" r="3.5" fill="none" stroke="#333" stroke-width="1.5" />
        <circle cx="80" cy="85" r="3.5" fill="#333" />
        <circle cx="94" cy="85" r="3.5" fill="none" stroke="#333" stroke-width="1.5" />
        <circle cx="108" cy="85" r="3.5" fill="none" stroke="#333" stroke-width="1.5" />
        <circle cx="66" cy="100" r="3.5" fill="none" stroke="#333" stroke-width="1.5" />
        <circle cx="80" cy="100" r="3.5" fill="none" stroke="#333" stroke-width="1.5" />
        <circle cx="94" cy="100" r="3.5" fill="#333" />
        <circle cx="108" cy="100" r="3.5" fill="none" stroke="#333" stroke-width="1.5" />
      </g>
      <g transform="rotate(8 160 120)">
        <rect x="120" y="42" width="80" height="130" rx="5" fill="#F7FAFC" stroke="#4A5568" stroke-width="2.5" />
        <line x1="130" y1="58" x2="188" y2="58" stroke="#4A5568" stroke-width="2" />
        <line x1="130" y1="72" x2="188" y2="72" stroke="#A0AEC0" stroke-width="1.5" />
        <line x1="130" y1="84" x2="188" y2="84" stroke="#A0AEC0" stroke-width="1.5" />
        <line x1="130" y1="96" x2="175" y2="96" stroke="#A0AEC0" stroke-width="1.5" />
      </g>
      <ellipse cx="60" cy="155" rx="16" ry="12" fill="#FBD5B5" stroke="#333" stroke-width="2" />
      <ellipse cx="170" cy="150" rx="16" ry="14" fill="#FBD5B5" stroke="#333" stroke-width="2" transform="rotate(-20 170 150)" />
      <polygon points="142,118 147,126 182,75 177,67" fill="#F6E05E" stroke="#333" stroke-width="1.5" />
      <rect x="178" y="65" width="8" height="6" fill="#FEB2B2" stroke="#333" stroke-width="1" />
    </svg>
  `,

  // 16 Custom Subject Visual Badges accurately styled to Figma screenshots
  subjects: {
    geology: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <defs>
          <linearGradient id="volcanoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#E74C3C" />
            <stop offset="40%" stop-color="#D35400" />
            <stop offset="100%" stop-color="#5D4037" />
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="100" rx="45" ry="12" fill="#3E2723" />
        <polygon points="60,35 25,95 95,95" fill="url(#volcanoGrad)" />
        <polygon points="60,35 48,95 72,95" fill="#E67E22" />
        <path d="M50 35 Q60 15 70 35 Q65 42 60 38 Q55 42 50 35 Z" fill="#F1C40F" />
        <circle cx="60" cy="20" r="4" fill="#E74C3C" />
        <circle cx="50" cy="15" r="3" fill="#F39C12" />
        <circle cx="70" cy="17" r="3.5" fill="#F1C40F" />
      </svg>
    `,

    math: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <rect x="30" y="25" width="60" height="70" rx="8" fill="#ECEFF1" stroke="#37474F" stroke-width="3" />
        <rect x="38" y="33" width="44" height="18" rx="3" fill="#80CBC4" stroke="#004D40" stroke-width="1.5" />
        <text x="60" y="47" font-family="monospace" font-weight="bold" font-size="11" fill="#004D40" text-anchor="middle">8 x ∞ = π</text>
        <circle cx="45" cy="60" r="4" fill="#37474F" />
        <circle cx="60" cy="60" r="4" fill="#37474F" />
        <circle cx="75" cy="60" r="4" fill="#FF7043" />
        <circle cx="45" cy="72" r="4" fill="#37474F" />
        <circle cx="60" cy="72" r="4" fill="#37474F" />
        <circle cx="75" cy="72" r="4" fill="#42A5F5" />
        <circle cx="45" cy="84" r="4" fill="#37474F" />
        <circle cx="60" cy="84" r="4" fill="#66BB6A" />
        <circle cx="75" cy="84" r="4" fill="#FFA726" />
        <text x="18" y="35" font-weight="bold" font-size="14" fill="#F7B731">∑</text>
        <text x="96" y="40" font-weight="bold" font-size="14" fill="#48DBFB">√</text>
        <text x="16" y="85" font-weight="bold" font-size="16" fill="#FF6B6B">∫</text>
      </svg>
    `,

    chemistry: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <defs>
          <linearGradient id="chemPotion" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2ECC71" />
            <stop offset="100%" stop-color="#16A085" />
          </linearGradient>
        </defs>
        <path d="M54 25 L66 25 L66 45 L90 85 C94 92 88 100 80 100 L40 100 C32 100 26 92 30 85 L54 45 Z" fill="#112233" stroke="#FFF" stroke-width="3" />
        <path d="M35 88 C45 84 55 92 65 86 C75 80 82 86 85 88 L80 98 L40 98 Z" fill="url(#chemPotion)" />
        <circle cx="50" cy="75" r="4" fill="#58D68D" opacity="0.8" />
        <circle cx="65" cy="65" r="5" fill="#58D68D" opacity="0.8" />
        <path d="M52 25 Q60 5 72 18 Q85 10 92 25 Q95 40 85 45" fill="none" stroke="#2ECC71" stroke-width="3.5" stroke-linecap="round" opacity="0.9" />
        <circle cx="75" cy="18" r="3" fill="#F1C40F" />
      </svg>
    `,

    biology: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <circle cx="60" cy="60" r="48" fill="#162A3E" stroke="#38B2AC" stroke-width="1.5" />
        <rect x="35" y="90" width="50" height="8" rx="4" fill="#78909C" />
        <rect x="56" y="70" width="8" height="22" fill="#546E7A" />
        <path d="M60 70 C75 70 82 55 78 40 L70 42 C74 52 68 62 60 62 Z" fill="#90A4AE" />
        <rect x="42" y="68" width="30" height="4" fill="#CFD8DC" />
        <rect x="46" y="32" width="10" height="28" transform="rotate(-25 46 32)" fill="#37474F" rx="2" />
        <circle cx="88" cy="35" r="7" fill="#E91E63" />
        <circle cx="98" cy="48" r="5" fill="#9C27B0" />
      </svg>
    `,

    mechanics: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <line x1="25" y1="22" x2="95" y2="22" stroke="#ECEFF1" stroke-width="4" stroke-linecap="round" />
        <circle cx="60" cy="42" r="16" fill="#455A64" stroke="#F7B731" stroke-width="3" />
        <circle cx="60" cy="42" r="5" fill="#ECEFF1" />
        <line x1="60" y1="22" x2="60" y2="37" stroke="#90A4AE" stroke-width="3" />
        <line x1="44" y1="42" x2="44" y2="80" stroke="#FFEAA7" stroke-width="2.5" />
        <line x1="76" y1="42" x2="76" y2="65" stroke="#FFEAA7" stroke-width="2.5" />
        <rect x="34" y="80" width="20" height="20" rx="3" fill="#E74C3C" stroke="#C0392B" stroke-width="2" />
        <text x="44" y="94" font-family="sans-serif" font-weight="bold" font-size="10" fill="#FFF" text-anchor="middle">m</text>
        <path d="M70 65 L70 85 C70 92 82 92 82 85 L82 65" fill="none" stroke="#3498DB" stroke-width="6" stroke-linecap="round" />
      </svg>
    `,

    physics: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <circle cx="60" cy="60" r="48" fill="#1A2D42" stroke="#F5A623" stroke-width="1.5" />
        <path d="M35 55 C25 40 35 25 48 28 C52 18 70 18 75 28 C88 24 95 38 85 55 C95 65 85 80 78 80 C60 85 45 82 35 55 Z" fill="#ECEFF1" />
        <ellipse cx="60" cy="58" rx="18" ry="20" fill="#FFE0B2" />
        <ellipse cx="60" cy="60" rx="42" ry="14" fill="none" stroke="#48DBFB" stroke-width="1.5" transform="rotate(30 60 60)" stroke-dasharray="3,3" />
        <ellipse cx="60" cy="60" rx="42" ry="14" fill="none" stroke="#FF9F43" stroke-width="1.5" transform="rotate(-30 60 60)" stroke-dasharray="3,3" />
      </svg>
    `,

    cs: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <circle cx="60" cy="60" r="42" fill="none" stroke="#00ADB5" stroke-width="4" stroke-dasharray="14,8" />
        <rect x="32" y="32" width="56" height="40" rx="5" fill="#1A1A2E" stroke="#00FFF5" stroke-width="2.5" />
        <rect x="56" y="72" width="8" height="12" fill="#393E46" />
        <rect x="44" y="84" width="32" height="4" rx="2" fill="#00ADB5" />
        <text x="38" y="46" font-family="monospace" font-size="8" fill="#00FFF5">&gt; python</text>
        <text x="38" y="56" font-family="monospace" font-size="8" fill="#39FF14">&gt; def()</text>
        <text x="44" y="66" font-family="monospace" font-size="8" fill="#F7B731">return ✨</text>
      </svg>
    `,

    francaise: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <ellipse cx="60" cy="65" rx="16" ry="38" fill="#E0A96D" stroke="#8C531B" stroke-width="2" transform="rotate(15 60 65)" />
        <line x1="52" y1="45" x2="62" y2="48" stroke="#8C531B" stroke-width="2" />
        <line x1="55" y1="62" x2="65" y2="65" stroke="#8C531B" stroke-width="2" />
        <path d="M40 38 C40 22 75 20 80 34 C82 38 40 42 40 38 Z" fill="#2C3E50" />
        <g transform="translate(82, 50)">
          <rect x="0" y="0" width="2" height="35" fill="#7F8C8D" />
          <rect x="2" y="0" width="6" height="14" fill="#002395" />
          <rect x="8" y="0" width="6" height="14" fill="#FFFFFF" />
          <rect x="14" y="0" width="6" height="14" fill="#ED2939" />
        </g>
      </svg>
    `,

    deutsch: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <ellipse cx="50" cy="65" rx="18" ry="14" fill="#FFFFFF" stroke="#2C3E50" stroke-width="2" />
        <ellipse cx="60" cy="70" rx="12" ry="10" fill="#FFFFFF" stroke="#2C3E50" stroke-width="2" />
        <g transform="translate(76, 35)">
          <rect x="0" y="0" width="3" height="55" fill="#7F8C8D" rx="1" />
          <rect x="3" y="0" width="28" height="7" fill="#000000" />
          <rect x="3" y="7" width="28" height="7" fill="#DD0000" />
          <rect x="3" y="14" width="28" height="7" fill="#FFCC00" />
        </g>
      </svg>
    `,

    arabic: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <circle cx="60" cy="60" r="48" fill="#112233" stroke="#D4AF37" stroke-width="1.5" />
        <path d="M30 50 C30 25 90 25 90 50 L96 95 L84 95 L75 75 L45 75 L36 95 L24 95 Z" fill="#FFFFFF" stroke="#ECEFF1" stroke-width="1.5" />
        <ellipse cx="60" cy="40" rx="26" ry="6" fill="none" stroke="#212121" stroke-width="4.5" />
        <ellipse cx="60" cy="58" rx="15" ry="16" fill="#F5CBA7" />
        <path d="M52 66 Q60 62 68 66 Q64 74 60 74 Q56 74 52 66 Z" fill="#424242" />
      </svg>
    `,

    religion: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <circle cx="60" cy="60" r="48" fill="#0A2F1D" stroke="#D4AF37" stroke-width="1.5" />
        <path d="M35 90 L35 55 Q35 30 60 20 Q85 30 85 55 L85 90 Z" fill="#134E2E" stroke="#D4AF37" stroke-width="2" />
        <path d="M64 28 A 8 8 0 0 0 54 40 A 10 10 0 1 1 64 28 Z" fill="#F7B731" />
        <polygon points="68,36 70,40 74,40 71,43 72,47 68,44 64,47 65,43 62,40 66,40" fill="#F7B731" />
      </svg>
    `,

    socialstudies: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <circle cx="48" cy="55" r="22" fill="#2980B9" stroke="#ECF0F1" stroke-width="2" />
        <path d="M36 50 Q44 42 54 48 Q60 56 50 64 Q40 68 34 60 Z" fill="#27AE60" />
        <path d="M48 30 A 25 25 0 0 1 48 80" fill="none" stroke="#F39C12" stroke-width="3" />
        <path d="M65 40 C75 36 90 44 95 40 L90 85 C85 90 70 82 62 86 Z" fill="#F5DEB3" stroke="#D2B48C" stroke-width="2" />
      </svg>
    `,

    english: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <circle cx="60" cy="60" r="48" fill="#1A2433" stroke="#E74C3C" stroke-width="1.5" />
        <rect x="30" y="32" width="60" height="56" rx="6" fill="#FFFFFF" stroke="#333" stroke-width="2" />
        <path d="M30 45 L60 65 L90 45" fill="none" stroke="#C0392B" stroke-width="3" stroke-linecap="round" />
        <text x="60" y="75" font-family="'Poppins', sans-serif" font-weight="900" font-size="16" fill="#1E3A8A" text-anchor="middle">EN</text>
        <circle cx="95" cy="35" r="10" fill="#E74C3C" stroke="#FFF" stroke-width="2" />
        <text x="95" y="39" font-family="sans-serif" font-weight="bold" font-size="11" fill="#FFF" text-anchor="middle">A</text>
      </svg>
    `,

    capstone: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <path d="M50 35 C50 25 70 25 70 35 C70 43 64 47 64 54 L56 54 C56 47 50 43 50 35 Z" fill="#F1C40F" stroke="#F39C12" stroke-width="2" />
        <rect x="56" y="55" width="8" height="4" fill="#BDC3C7" />
        <circle cx="40" cy="80" r="10" fill="#1E3A8A" />
        <path d="M25 106 C25 93 55 93 55 106 Z" fill="#1E3A8A" />
        <circle cx="80" cy="80" r="10" fill="#0D9488" />
        <path d="M65 106 C65 93 95 93 95 106 Z" fill="#0D9488" />
      </svg>
    `,

    opportunities: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <circle cx="60" cy="60" r="44" fill="#0E2439" stroke="#E74C3C" stroke-width="2" />
        <circle cx="60" cy="60" r="30" fill="none" stroke="#E74C3C" stroke-width="2" stroke-dasharray="4,4" />
        <circle cx="60" cy="60" r="15" fill="#E74C3C" />
        <circle cx="60" cy="60" r="6" fill="#FFF" />
        <path d="M60 40 L60 15 L52 25 M60 15 L68 25" stroke="#FF5252" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M60 80 L60 105 L52 95 M60 105 L68 95" stroke="#FF5252" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M40 60 L15 60 L25 52 M15 60 L25 68" stroke="#FF5252" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M80 60 L105 60 L95 52 M105 60 L95 68" stroke="#FF5252" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `,

    arduino: `
      <svg viewBox="0 0 120 120" class="w-16 h-16 md:w-20 md:h-20 mx-auto">
        <rect x="22" y="30" width="76" height="60" rx="6" fill="#00979C" stroke="#006468" stroke-width="2.5" />
        <rect x="16" y="38" width="10" height="14" fill="#B0BEC5" stroke="#37474F" stroke-width="1" />
        <rect x="16" y="65" width="12" height="16" fill="#263238" />
        <rect x="48" y="55" width="28" height="16" rx="2" fill="#212121" />
        <circle cx="48" cy="42" r="6" fill="none" stroke="#FFF" stroke-width="2" />
        <circle cx="60" cy="42" r="6" fill="none" stroke="#FFF" stroke-width="2" />
        <text x="48" y="44" font-weight="bold" font-size="8" fill="#FFF" text-anchor="middle">-</text>
        <text x="60" y="44" font-weight="bold" font-size="8" fill="#FFF" text-anchor="middle">+</text>
      </svg>
    `
  },

  // Partner Silhouette Graphic (Accurate to Figma Page 3)
  partnerSilhouette: `
    <svg viewBox="0 0 200 160" class="w-full h-36 mx-auto object-contain">
      <circle cx="45" cy="48" r="10" fill="#0B1B2B" />
      <path d="M30 85 C30 65 60 65 60 85 L60 135 L30 135 Z" fill="#0B1B2B" />
      <circle cx="75" cy="40" r="11" fill="#13273C" />
      <path d="M58 80 C58 58 92 58 92 80 L92 140 L58 140 Z" fill="#13273C" />
      <polygon points="75,56 71,78 79,78" fill="#38B2AC" />
      <circle cx="105" cy="35" r="12" fill="#071320" />
      <path d="M85 75 C85 54 125 54 125 75 L125 145 L85 145 Z" fill="#071320" />
      <polygon points="105,52 100,76 110,76" fill="#F7B731" />
      <circle cx="135" cy="42" r="11" fill="#13273C" />
      <path d="M118 80 C118 60 152 60 152 80 L152 140 L118 140 Z" fill="#13273C" />
      <circle cx="162" cy="48" r="10" fill="#0B1B2B" />
      <path d="M148 85 C148 65 176 65 176 85 L176 135 L148 135 Z" fill="#0B1B2B" />
    </svg>
  `,

  // Team Member Avatar Illustration (Accurate to Figma Page 4)
  memberAvatar: (idx) => {
    const accents = ['#38B2AC', '#F7B731', '#E76F51', '#4FD1C5', '#F5A623', '#6C5CE7', '#2ECC71', '#00CEC9', '#E67E22'];
    const accent = accents[idx % accents.length];
    return `
      <svg viewBox="0 0 200 220" class="w-full h-44 mx-auto object-cover">
        <defs>
          <linearGradient id="avatarBg${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F1F5F9" />
            <stop offset="100%" stop-color="#CBD5E1" />
          </linearGradient>
        </defs>
        <rect width="200" height="220" fill="url(#avatarBg${idx})" />
        <path d="M70 65 C65 30 135 30 130 65 C140 75 130 95 130 95 C130 95 70 95 70 95 C70 95 60 75 70 65 Z" fill="#1E293B" />
        <ellipse cx="100" cy="78" rx="26" ry="30" fill="#F8D7BE" />
        <rect x="80" y="70" width="16" height="12" rx="3" fill="none" stroke="#1E293B" stroke-width="2.5" />
        <rect x="104" y="70" width="16" height="12" rx="3" fill="none" stroke="#1E293B" stroke-width="2.5" />
        <line x1="96" y1="76" x2="104" y2="76" stroke="#1E293B" stroke-width="2.5" />
        <circle cx="88" cy="76" r="2.5" fill="#1E293B" />
        <circle cx="112" cy="76" r="2.5" fill="#1E293B" />
        <path d="M92 92 Q100 100 108 92" fill="none" stroke="#C2410C" stroke-width="2.5" stroke-linecap="round" />
        <rect x="92" y="105" width="16" height="16" fill="#F8D7BE" />
        <path d="M45 155 C45 120 155 120 155 155 L175 220 L25 220 Z" fill="#0F172A" />
        <polygon points="100,122 85,150 115,150" fill="${accent}" />
        <circle cx="70" cy="155" r="7" fill="${accent}" stroke="#FFF" stroke-width="1.5" />
      </svg>
    `;
  }
};

