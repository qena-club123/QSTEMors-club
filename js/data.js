// ==========================================================================
// QSTEMora Club - EASY-TO-EDIT DATA STORE FOR BEGINNERS
// ==========================================================================
// 💡 HOW TO EDIT THIS FILE:
// 1. To add an L.O: Find your subject in "subjects" or add to "lessons".
// 2. To add video/file/test links: Put Google Drive links in "videos", "files", or "testBanks".
// 3. To update School Hall schedule: Edit the "FallbackScheduleData" array below.
// ==========================================================================

const FallbackScheduleData = {
  notice: "Strictly for STEM Qena School students at the School Hall.",
  sessions: [
    {
      id: "ses-1",
      day: "Tuesday",
      time: "15:30 - 17:00",
      location: "School Main Hall (STEM Qena)",
      subject: "Physics",
      topic: "Electric Flux & Gauss's Law Applications (PH.1.01)",
      host: "Ziad Ahmed (Senior '26 Physics Curator)",
      target: "Grade 1 STEM Qena Students",
      status: "upcoming"
    },
    {
      id: "ses-2",
      day: "Wednesday",
      time: "16:00 - 17:30",
      location: "School Study Hall / Lab 2",
      subject: "Chemistry",
      topic: "Reaction Kinetics & Rate Laws Problem Solving (CH.1.04)",
      host: "Mohanad Naeem (Academic Head)",
      target: "Grade 1 STEM Qena Students",
      status: "upcoming"
    },
    {
      id: "ses-3",
      day: "Thursday",
      time: "15:30 - 17:00",
      location: "School Main Hall (STEM Qena)",
      subject: "Math",
      topic: "Differential Calculus & Related Rates (MA.1.02)",
      host: "Senior '26 Math Leads",
      target: "Grade 1 STEM Qena Students",
      status: "upcoming"
    },
    {
      id: "ses-4",
      day: "Saturday",
      time: "14:00 - 15:30",
      location: "School Multi-Purpose Hall",
      subject: "CS & Arduino",
      topic: "Python OOP Logic & Sensor Interfacing (CS.1.01 & ARD.1.01)",
      host: "Mostafa Tarek (Tech Lead)",
      target: "Grade 1 STEM Qena Students",
      status: "upcoming"
    }
  ]
};

const FallbackClubData = {
  meta: {
    grade: 1,
    version: "1.0.0",
    clubName: "QSTEMora Club (QSC)",
    location: "STEM Qena School, Egypt"
  },
  subjects: [
    {
      id: "geology",
      name: "Geology",
      category: "scientific",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Earth systems, plate tectonics, mineralogy, stratigraphy, and geological processes."
    },
    {
      id: "math",
      name: "Math",
      category: "scientific",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Differential and integral calculus, linear algebra, analytical geometry, and probability."
    },
    {
      id: "chemistry",
      name: "Chemistry",
      category: "scientific",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Thermodynamics, chemical kinetics, atomic theory, equilibrium, and electrochemistry."
    },
    {
      id: "biology",
      name: "Biology",
      category: "scientific",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Cellular respiration, molecular genetics, biotechnology, and physiological systems."
    },
    {
      id: "mechanics",
      name: "Mechanics",
      category: "scientific",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Newtonian dynamics, 2D/3D statics, rotational equilibrium, and kinematics."
    },
    {
      id: "physics",
      name: "Physics",
      category: "scientific",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Electromagnetism, wave optics, modern quantum physics, and electric circuits."
    },
    {
      id: "cs",
      name: "CS",
      category: "scientific",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Algorithms, Python programming, data structures, and computational thinking."
    },
    {
      id: "francaise",
      name: "Française",
      category: "literary",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "French grammar rules, DELF practice, and reading comprehension."
    },
    {
      id: "deutsch",
      name: "Deutsch",
      category: "literary",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "German grammar cases, vocabulary building, and Goethe A1-B1 preparation."
    },
    {
      id: "arabic",
      name: "Arabic",
      category: "literary",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Classical Arabic grammar (Nahw & Sarf), Rhetoric (Balagha), and literature."
    },
    {
      id: "religion",
      name: "Religion",
      category: "literary",
      semesters: ["1", "2"],
      branches: [
        { id: "islam", "name": "Islam" },
        { id: "christian", "name": "Christian" }
      ],
      lessonLabel: "L.O",
      description: "Islamic and Christian religious studies, spiritual values, and moral ethics."
    },
    {
      id: "socialstudies",
      name: "Social Studies",
      category: "literary",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Egyptian modern history, geography of natural resources, and civics."
    },
    {
      id: "english",
      name: "English",
      category: "literary",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Academic writing, scientific reading comprehension, critical analysis, and vocabulary."
    },
    {
      id: "capstone",
      name: "Capstone",
      category: "other",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "L.O",
      description: "Grand Challenges of Egypt design process, engineering design journal, and prototyping."
    },
    {
      id: "opportunities",
      name: "Opportunities",
      category: "other",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "Lesson",
      description: "ISEF, Science Olympiads, scholarships, quad charts, and competition guidelines."
    },
    {
      id: "arduino",
      name: "Arduino",
      category: "other",
      semesters: ["1", "2"],
      branches: [],
      lessonLabel: "Lesson",
      description: "Embedded C/C++, sensor interfacing, PWM control, circuit wiring, and robotics."
    }
  ],
  lessons: [
    {
      id: "CH.1.01",
      subject: "chemistry",
      branch: null,
      semester: "1",
      weeks: "01-02",
      title: "Atomic Structure & Periodic Trends",
      description: "Electronic configurations, effective nuclear charge, ionization energy, and electronegativity.",
      videos: [
        {
          title: "CH.1.01 Comprehensive Explanation & Atomic Models",
          url: "https://drive.google.com/file/d/sample-ch101-vid1/view",
          duration: "28 mins",
          speaker: "Senior '26 Chemistry Lead"
        }
      ],
      files: [
        {
          title: "CH.1.01 Master Presentation Slide Deck",
          url: "https://drive.google.com/file/d/sample-ch101-ppt/view",
          format: "PPTX",
          size: "16 MB"
        }
      ],
      testBanks: [
        {
          title: "CH.1.01 Standard Multiple Choice Test (35 Qs)",
          url: "https://drive.google.com/file/d/sample-ch101-tb1/view",
          questionsCount: 35,
          difficulty: "Medium"
        }
      ]
    },
    {
      id: "CH.1.04",
      subject: "chemistry",
      branch: null,
      semester: "1",
      weeks: "07-08",
      title: "Develop operational definitions of chemical elements",
      description: "Investigating historical definitions, spectroscopic analysis, and classification schemes.",
      videos: [
        {
          title: "CH.1.04 Operational Definitions of Elements — Core Lecture",
          url: "https://drive.google.com/file/d/sample-ch104-vid1/view",
          duration: "30 mins",
          speaker: "Senior '26 Chemistry Team"
        }
      ],
      files: [
        {
          title: "CH.1.04 Chemistry Master Presentation",
          url: "https://drive.google.com/file/d/sample-ch104-ppt/view",
          format: "PPTX",
          size: "14 MB"
        }
      ],
      testBanks: [
        {
          title: "CH.1.04 Model Practice Test Bank",
          url: "https://drive.google.com/file/d/sample-ch104-tb/view",
          questionsCount: 25,
          difficulty: "Medium"
        }
      ]
    },
    {
      id: "PH.1.01",
      subject: "physics",
      branch: null,
      semester: "1",
      weeks: "01-02",
      title: "Units, Physical Quantities & Error Analysis",
      description: "SI units, dimensional analysis, scalar vs vector quantities, and measurement uncertainties.",
      videos: [
        {
          title: "Dimensional Analysis & Significant Figures Tutorial",
          url: "https://drive.google.com/file/d/sample-ph101-vid/view",
          duration: "24 mins",
          speaker: "Ziad Ahmed"
        }
      ],
      files: [
        {
          title: "PH.1.01 Measurement & Units Presentation",
          url: "https://drive.google.com/file/d/sample-ph101-ppt/view",
          format: "PPTX",
          size: "15 MB"
        }
      ],
      testBanks: [
        {
          title: "Error Analysis & Vectors Problem Set (40 Qs)",
          url: "https://drive.google.com/file/d/sample-ph101-tb/view",
          questionsCount: 40,
          difficulty: "Medium"
        }
      ]
    },
    {
      id: "MA.1.01",
      subject: "math",
      branch: null,
      semester: "1",
      weeks: "01-02",
      title: "Functions, Domain & Range, Transformations",
      description: "Polynomial, rational, radical functions, composite functions, and graph transformations.",
      videos: [
        {
          title: "Advanced Function Transformations & Symmetry",
          url: "https://drive.google.com/file/d/sample-ma101-vid/view",
          duration: "28 mins",
          speaker: "Mohanad Naeem"
        }
      ],
      files: [
        {
          title: "MA.1.01 Functions & Graphs Presentation",
          url: "https://drive.google.com/file/d/sample-ma101-ppt/view",
          format: "PPTX",
          size: "14 MB"
        }
      ],
      testBanks: [
        {
          title: "Functions & Domains Question Bank (30 Qs)",
          url: "https://drive.google.com/file/d/sample-ma101-tb/view",
          questionsCount: 30,
          difficulty: "Medium"
        }
      ]
    },
    {
      id: "BI.1.01",
      subject: "biology",
      branch: null,
      semester: "1",
      weeks: "01-02",
      title: "Biological Macromolecules & Chemical Basis of Life",
      description: "Carbohydrates, lipids, proteins, nucleic acids, enzyme catalysis, and dehydration synthesis.",
      videos: [
        {
          title: "Enzymes & Biochemical Pathways 3D Animation",
          url: "https://drive.google.com/file/d/sample-bi101-vid/view",
          duration: "26 mins",
          speaker: "Kareem Mahmoud"
        }
      ],
      files: [
        {
          title: "BI.1.01 Macromolecules Presentation",
          url: "https://drive.google.com/file/d/sample-bi101-ppt/view",
          format: "PPTX",
          size: "21 MB"
        }
      ],
      testBanks: [
        {
          title: "Biochemistry & Enzymes Practice Test",
          url: "https://drive.google.com/file/d/sample-bi101-tb/view",
          questionsCount: 30,
          difficulty: "Medium"
        }
      ]
    },
    {
      id: "CS.1.01",
      subject: "cs",
      branch: null,
      semester: "1",
      weeks: "01-03",
      title: "Computational Thinking & Algorithm Design",
      description: "Decomposition, pattern recognition, abstraction, flowcharts, and pseudocode logic.",
      videos: [
        {
          title: "Problem Solving & Flowchart Design Crash Course",
          url: "https://drive.google.com/file/d/sample-cs101-vid/view",
          duration: "27 mins",
          speaker: "Mostafa Tarek"
        }
      ],
      files: [
        {
          title: "CS.1.01 Algorithm Design Presentation",
          url: "https://drive.google.com/file/d/sample-cs101-ppt/view",
          format: "PPTX",
          size: "12 MB"
        }
      ],
      testBanks: [
        {
          title: "Algorithms & Logic Puzzles Bank (35 Qs)",
          url: "https://drive.google.com/file/d/sample-cs101-tb/view",
          questionsCount: 35,
          difficulty: "Medium"
        }
      ]
    },
    {
      id: "IS.1.01",
      subject: "religion",
      branch: "islam",
      semester: "1",
      weeks: "01-04",
      title: "سورة الحجرات وتدبر الآيات الكريمة",
      description: "القيم الإيمانية والأخلاقية، أحكام التلاوة والتجويد، والنهي عن التنابز والغيبة.",
      videos: [
        {
          title: "شرح وتفسير سورة الحجرات وتطبيقاتها التربوية",
          url: "https://drive.google.com/file/d/sample-is101-vid/view",
          duration: "25 mins",
          speaker: "معلمو التربية الإسلامية"
        }
      ],
      files: [
        {
          title: "مذكرة التربية الإسلامية الشاملة - سورة الحجرات",
          url: "https://drive.google.com/file/d/sample-is101-pdf/view",
          format: "PDF",
          size: "5.5 MB"
        }
      ],
      testBanks: [
        {
          title: "بنك أسئلة التربية الإسلامية (40 سؤالاً)",
          url: "https://drive.google.com/file/d/sample-is101-tb/view",
          questionsCount: 40,
          difficulty: "Medium"
        }
      ]
    },
    {
      id: "CR.1.01",
      subject: "religion",
      branch: "christian",
      semester: "1",
      weeks: "01-04",
      title: "القيم الروحية والفضائل الإنسانية في الإنجيل",
      description: "دراسة المحبة والتسامح وبناء الشخصية المتزنة في المجتمع.",
      videos: [
        {
          title: "شرح دروس التربية الدينية المسيحية - الوحدة الأولى",
          url: "https://drive.google.com/file/d/sample-cr101-vid/view",
          duration: "24 mins",
          speaker: "معلمو التربية المسيحية"
        }
      ],
      files: [
        {
          title: "ملخص التربية الدينية المسيحية الشامل",
          url: "https://drive.google.com/file/d/sample-cr101-pdf/view",
          format: "PDF",
          size: "5 MB"
        }
      ],
      testBanks: [
        {
          title: "بنك أسئلة الامتحانات السابقة في التربية المسيحية",
          url: "https://drive.google.com/file/d/sample-cr101-tb/view",
          questionsCount: 35,
          difficulty: "Medium"
        }
      ]
    },
    {
      id: "OPP.1.01",
      subject: "opportunities",
      branch: null,
      semester: "1",
      weeks: "All",
      title: "ISEF Science Fair Guidelines & SRC Approval",
      description: "Scientific abstract writing, SRC/IRB forms, Quad Chart design, and poster printing tips.",
      videos: [
        {
          title: "ISEF Application & Presentation Masterclass",
          url: "https://drive.google.com/file/d/sample-opp101-vid/view",
          duration: "40 mins",
          speaker: "Alumni & Senior '26 Mentors"
        }
      ],
      files: [
        {
          title: "Official ISEF SRC Forms Guide & Quad Chart Template",
          url: "https://drive.google.com/file/d/sample-opp101-pdf/view",
          format: "PDF",
          size: "10 MB"
        }
      ],
      testBanks: [
        {
          title: "Mock Interview Questions for International STEM Competitions",
          url: "https://drive.google.com/file/d/sample-opp101-tb/view",
          questionsCount: 30,
          difficulty: "Medium"
        }
      ]
    }
  ],
  about: {
    title: "About Us",
    subtitle: "Innovative Way To Learn",
    tagline: "The student always comes first",
    fullStory: "Welcome to the website of Qena Student Club (QSC) — built for STEM students across Egypt. This club was founded in STEM Qena by Senior '26 students Youssef Said and Mohanad Naeem. From the heart of Upper Egypt, we began our journey, connecting members and mentors across all 27 governorates in Egypt. The materials are curated by top Senior '26 students and revised by experienced STEM teachers. QSTEMora provides structured, centralized access to learning outcomes (LOs), verified presentation slides, video lectures, and reference question banks. Our policy is simple: 'The student always comes first.'",
    stats: [
      { label: "STEM Governorates", value: "27" },
      { label: "Curated Reference Questions", value: "2,500+" },
      { label: "Verified PPT Slide Decks", value: "120+" },
      { label: "Senior '26 & '28 Mentors", value: "45+" }
    ]
  },
  teamMembers: [
    {
      id: 1,
      name: "Youssef Said",
      role: "Founder & Executive Director",
      bio: "STEM Qena Senior '26. Visionary behind QSC and the QSTEMora digital learning platform.",
      tag: "Founder",
      governorate: "Qena"
    },
    {
      id: 2,
      name: "Mohanad Naeem",
      role: "Co-Founder & Academic Head",
      bio: "STEM Qena Senior '26. Architect of QSC curriculum maps, reference banks, and faculty liaison.",
      tag: "Founder",
      governorate: "Qena"
    },
    {
      id: 3,
      name: "Ziad Ahmed",
      role: "Lead Physics & Mechanics Curator",
      bio: "National Physics Olympiad finalist. Specializes in advanced Newtonian mechanics and kinematics.",
      tag: "Academic Lead",
      governorate: "Cairo"
    },
    {
      id: 4,
      name: "Kareem Mahmoud",
      role: "Chemistry & Biology Specialist",
      bio: "Senior '26 researcher. Authored 30+ comprehensive STEM chemistry problem sheets.",
      tag: "Academic Lead",
      governorate: "Alexandria"
    },
    {
      id: 5,
      name: "Omar Hassan",
      role: "Head of Presentation & Design",
      bio: "Master presentation designer crafting visual slides and diagrams for high-level comprehension.",
      tag: "Design Lead",
      governorate: "Assiut"
    },
    {
      id: 6,
      name: "Mostafa Tarek",
      role: "CS & Arduino Hardware Lead",
      bio: "Robotics and IoT developer guiding STEM students through Capstone electronics.",
      tag: "Tech Lead",
      governorate: "Giza"
    },
    {
      id: 7,
      name: "Ahmed Khaled",
      role: "Languages & Humanities Lead",
      bio: "Trilingual scholar coordinating French, German, and classical Arabic modules.",
      tag: "Humanities Lead",
      governorate: "Mansoura"
    },
    {
      id: 8,
      name: "Mahmoud Samy",
      role: "Capstone Mentor & ISEF Advisor",
      bio: "Guided 12+ student teams to ISEF regional awards and Capstone grand honors.",
      tag: "Research Mentor",
      governorate: "Sohag"
    },
    {
      id: 9,
      name: "Dr. Adel Abdelrahman",
      role: "Senior Academic Advisor & Teacher",
      bio: "Veteran STEM Qena physics educator reviewing and approving all curriculum materials.",
      tag: "Faculty Advisor",
      governorate: "Qena"
    }
  ],
  partners: [
    {
      id: 1,
      name: "STEM Qena School",
      role: "Founding Institutional Partner",
      info: "The cradle of QSC, providing mentorship, teacher evaluations, and testing grounds.",
      location: "Qena Governorate",
      partnerType: "Academic Institution"
    },
    {
      id: 2,
      name: "Egyptian STEM Schools Network",
      role: "Nationwide Student Alliance",
      info: "Connecting 19+ STEM schools across Egypt for knowledge sharing and joint mock exams.",
      location: "Pan-Egypt",
      partnerType: "Student Network"
    },
    {
      id: 3,
      name: "Science & Tech Innovators Hub",
      role: "Innovation & FabLab Partner",
      info: "Sponsoring Capstone prototyping kits and Arduino components for student projects.",
      location: "Cairo",
      partnerType: "Tech Accelerator"
    },
    {
      id: 4,
      name: "Egypt Youth Olympiad Forum",
      role: "Competition & Mentorship Partner",
      info: "Hosting regional preparatory camps for Physics, Chemistry, and Math Olympiads.",
      location: "Giza",
      partnerType: "Competition Board"
    },
    {
      id: 5,
      name: "STEM Egypt Alumni Council",
      role: "Alumni & University Guidance",
      info: "Providing mentorship on Ivy League, European, and Egyptian university applications.",
      location: "International",
      partnerType: "Alumni Association"
    },
    {
      id: 6,
      "name": "Upper Egypt Student Union",
      role: "Regional Outreach Sponsor",
      info: "Facilitating STEM awareness sessions and workshops across Upper Egypt governorates.",
      location: "Luxor & Aswan",
      partnerType: "Youth Organization"
    },
    {
      id: 7,
      name: "PowerPoint & Visual Design Guild",
      role: "Creative Media Sponsor",
      info: "Ensuring every study deck and explanation video meets the highest graphical standards.",
      location: "Alexandria",
      partnerType: "Creative Studio"
    },
    {
      id: 8,
      name: "RoboSTEM Hardware Labs",
      role: "Electronics & Sensor Supply",
      info: "Supplying vetted microcontrollers, sensors, and datasheets for junior & senior years.",
      location: "Mansoura",
      partnerType: "Hardware Partner"
    },
    {
      id: 9,
      name: "Egypt Academic Reference Initiative",
      role: "Open Science & Textbook Alliance",
      info: "Curating challenging university-level reference problems with step-by-step solutions.",
      location: "Cairo",
      partnerType: "Educational Initiative"
    }
  ]
};
