/* =============================================
   TROPHY LEGACY — JAVASCRIPT VANILLA AVANZADO
   Arquitectura Modular, CRUD Completo, i18n
   Senior-Level Frontend Engineering
============================================= */

/* =============================================
   TRADUCCIÓN MULTIIDIOMA (i18n)
   Arquitectura modular con soporte ES/EN/HI
============================================= */

const translations = {
  es: {
    // Navbar
    skipLink: "Saltar al contenido principal",
    navTimeline: "Línea de Tiempo",
    navTracker: "Mi Progreso",
    navWall: "Muro de Trofeos",
    navRankings: "Rankings",
    toggleTheme: "Cambiar tema",
    themeDark: "Claro",
    themeLight: "Oscuro",

    // Hero
    heroEyebrow: "🎮 Historia · Evolución · Comunidad Gaming",
    heroTitle1: "El Legado de los",
    heroTitle2: "Trofeos & Logros",
    heroTitle3: "en Videojuegos",
    heroDesc: "Desde los primeros parches físicos de Activision en 1982 hasta los sistemas globales actuales, descubre cómo los achievement gaming revolucionaron la industria. Explora hitos históricos reales, registra tu progreso y conecta con la comunidad gamer mundial.",
    heroBtn1: "Explorar Hitos",
    heroBtn2: "Registrar Progreso",
    exploreMilestones: "Explorar Hitos",
    trackProgress: "Registrar Progreso",

    // Stats
    statsStart: "Inicio de Era",
    statsPlatforms: "Plataformas",
    statsAchievements: "Logros Globales",
    statsRarest: "Más Raros",

    // Tracker
    trackerTitle: "GameHub Tracker Plus",
    trackerDesc: "Registra tu progreso en videojuegos, desbloquea logros automáticos y compite en rankings globales. Cada registro que completes te acerca a la leyenda.",
    trackerFormTitle: "Registrar Sesión de Juego",
    formUsername: "Usuario *",
    formGame: "Videojuego *",
    formPlatformTracker: "Plataforma *",
    formHours: "Horas Jugadas *",
    formLevel: "Nivel *",
    formTrophies: "Trofeos Desbloqueados *",
    formSubmit: "Registrar Progreso",
    formReset: "Limpiar",
    statsTitle: "Mi Estadísticas",
    statGames: "Juegos",
    statHours: "Horas",
    statTrophies: "Trofeos",
    statAchievement: "Logro Actual",
    achievementsUnlocked: "Logros Desbloqueados",
    yourSessions: "Tus Sesiones de Juego",

    // Trophy Wall
    wallTitle: "Muro de Trofeos Memorables",
    wallDesc: "Comparte los trofeos más épicos, desafiantes e inolvidables que has conseguido. La comunidad vota y destaca los logros más memorables.",
    addTrophy: "Compartir Trofeo",
    newTrophy: "Compartir Trofeo",
    sortBy: "Ordenar por:",
    sortRecent: "Reciente",
    sortPopular: "Popular",
    sortDifficulty: "Dificultad",
    trophyFormTitle: "Compartir Trofeo Memorable",
    formTrophyName: "Nombre del Logro *",
    formDifficulty: "Dificultad *",
    formRarity: "Rareza *",
    formImage: "Imagen (Opcional)",
    diffEasy: "Fácil",
    diffNormal: "Normal",
    diffHard: "Difícil",
    diffBrutal: "Brutal",
    formShare: "Compartir",
    formDescription: "Tu Historia *",
    formCancel: "Cancelar",

    // Rankings
    rankingsTitle: "Rankings Globales",
    rankingsDesc: "Los players más destacados en trofeos memorables. ¿Cuál es tu posición?",
    topPlayers: "Top Players por Votos",
    trophyStats: "Estadísticas de Trofeos",

    // Footer
    footerDesc: "Museo digital interactivo sobre la evolución histórica de trofeos y logros en videojuegos. Explora, registra y conecta con la comunidad global gaming.",
    footerSections: "Secciones",
    footerTimeline: "Línea de Tiempo",
    footerTracker: "Mi Progreso",
    footerWall: "Muro de Trofeos",
    footerRankings: "Rankings",
    footerAbout: "Acerca de",
    footerAboutDesc: "Trophy Legacy es una plataforma educativa e informativa basada en datos reales de Xbox Live, PlayStation Network, Steam y comunidades de achievement hunting.",
    footerCopy: "© 2026 Trophy Legacy. Contenido educativo. Datos basados en Wikipedia, TrueAchievements, PSNProfiles y TheGamer.",

    // Toast Messages
    toastSuccess: "Éxito",
    toastError: "Error",
    toastWarning: "Advertencia",
    toastInfo: "Información",
    recordCreated: "Registro creado exitosamente",
    recordUpdated: "Registro actualizado",
    recordDeleted: "Registro eliminado",
    validationError: "Validación fallida",
    languageChanged: "Idioma cambiado a Español",
    imageTooLarge: "La imagen es muy grande (máximo 5MB)",
    imageInvalidFormat: "Formato de imagen no válido",
    confirmDelete: "¿Estás seguro de que deseas eliminar esto?",
  },

  en: {
    skipLink: "Skip to main content",
    navTimeline: "Timeline",
    navTracker: "My Progress",
    navWall: "Trophy Wall",
    navRankings: "Rankings",
    toggleTheme: "Toggle theme",
    themeDark: "Light",
    themeLight: "Dark",

    heroEyebrow: "🎮 History · Evolution · Gaming Community",
    heroTitle1: "The Legacy of",
    heroTitle2: "Trophies & Achievements",
    heroTitle3: "in Video Games",
    heroDesc: "From Activision's first physical patches in 1982 to today's global systems, discover how achievement gaming revolutionized the industry. Explore real historical milestones, track your progress, and connect with the global gaming community.",
    heroBtn1: "Explore Milestones",
    heroBtn2: "Track Progress",
    exploreMilestones: "Explore Milestones",
    trackProgress: "Track Progress",

    statsStart: "Era Start",
    statsPlatforms: "Platforms",
    statsAchievements: "Global Achievements",
    statsRarest: "Rarest",

    trackerTitle: "GameHub Tracker Plus",
    trackerDesc: "Track your gaming progress, unlock automatic achievements, and compete in global rankings. Each record brings you closer to legend status.",
    trackerFormTitle: "Register Gaming Session",
    formUsername: "Username *",
    formGame: "Video Game *",
    formPlatformTracker: "Platform *",
    formHours: "Hours Played *",
    formLevel: "Level *",
    formTrophies: "Trophies Unlocked *",
    formSubmit: "Register Progress",
    formReset: "Clear",
    statsTitle: "My Statistics",
    statGames: "Games",
    statHours: "Hours",
    statTrophies: "Trophies",
    statAchievement: "Current Achievement",
    achievementsUnlocked: "Achievements Unlocked",
    yourSessions: "Your Gaming Sessions",

    wallTitle: "Wall of Memorable Trophies",
    wallDesc: "Share your most epic, challenging, and unforgettable trophies. The community votes and highlights the most memorable achievements.",
    addTrophy: "Share Trophy",
    newTrophy: "Share Trophy",
    sortBy: "Sort by:",
    sortRecent: "Recent",
    sortPopular: "Popular",
    sortDifficulty: "Difficulty",
    trophyFormTitle: "Share Memorable Trophy",
    formTrophyName: "Achievement Name *",
    formDifficulty: "Difficulty *",
    formRarity: "Rarity *",
    formImage: "Image (Optional)",
    diffEasy: "Easy",
    diffNormal: "Normal",
    diffHard: "Hard",
    diffBrutal: "Brutal",
    formShare: "Share",
    formDescription: "Your Story *",
    formCancel: "Cancel",

    rankingsTitle: "Global Rankings",
    rankingsDesc: "The most outstanding players in memorable trophies. What's your position?",
    topPlayers: "Top Players by Votes",
    trophyStats: "Trophy Statistics",

    footerDesc: "Interactive digital museum about the historical evolution of trophies and achievements in video games. Explore, track, and connect with the global gaming community.",
    footerSections: "Sections",
    footerTimeline: "Timeline",
    footerTracker: "My Progress",
    footerWall: "Trophy Wall",
    footerRankings: "Rankings",
    footerAbout: "About",
    footerAboutDesc: "Trophy Legacy is an educational and informative platform based on real data from Xbox Live, PlayStation Network, Steam and achievement hunting communities.",
    footerCopy: "© 2026 Trophy Legacy. Educational content. Data based on Wikipedia, TrueAchievements, PSNProfiles and TheGamer.",

    toastSuccess: "Success",
    toastError: "Error",
    toastWarning: "Warning",
    toastInfo: "Information",
    recordCreated: "Record created successfully",
    recordUpdated: "Record updated",
    recordDeleted: "Record deleted",
    validationError: "Validation failed",
    languageChanged: "Language changed to English",
    imageTooLarge: "Image is too large (max 5MB)",
    imageInvalidFormat: "Invalid image format",
    confirmDelete: "Are you sure you want to delete this?",
  },

  hi: {
    skipLink: "मुख्य सामग्री पर जाएं",
    navTimeline: "समयरेखा",
    navTracker: "मेरी प्रगति",
    navWall: "ट्रॉफी दीवार",
    navRankings: "रैंकिंग",
    toggleTheme: "थीम बदलें",
    themeDark: "हल्का",
    themeLight: "गहरा",

    heroEyebrow: "🎮 इतिहास · विकास · गेमिंग समुदाय",
    heroTitle1: "की विरासत",
    heroTitle2: "ट्रॉफी और उपलब्धियां",
    heroTitle3: "वीडियो गेम में",
    heroDesc: "1982 में Activision की पहली भौतिक पैच से आज की वैश्विक प्रणालियों तक, खोजें कि कैसे उपलब्धि गेमिंग ने उद्योग में क्रांति ला दी। वास्तविक ऐतिहासिक मील के पत्थर का अन्वेषण करें, अपनी प्रगति ट्रैक करें।",
    heroBtn1: "मील के पत्थर खोजें",
    heroBtn2: "प्रगति ट्रैक करें",
    exploreMilestones: "मील के पत्थर खोजें",
    trackProgress: "प्रगति ट्रैक करें",

    statsStart: "युग की शुरुआत",
    statsPlatforms: "प्लेटफॉर्म",
    statsAchievements: "वैश्विक उपलब्धियां",
    statsRarest: "दुर्लभतम",

    trackerTitle: "गेमहब ट्रैकर प्लस",
    trackerDesc: "अपनी गेमिंग प्रगति को ट्रैक करें, स्वचालित उपलब्धियां अनलॉक करें।",
    trackerFormTitle: "गेमिंग सेशन पंजीकृत करें",
    formUsername: "उपयोगकर्ता नाम *",
    formGame: "वीडियो गेम *",
    formPlatformTracker: "प्लेटफॉर्म *",
    formHours: "खेले गए घंटे *",
    formLevel: "स्तर *",
    formTrophies: "अनलॉक की गई ट्रॉफी *",
    formSubmit: "प्रगति पंजीकृत करें",
    formReset: "साफ करें",
    statsTitle: "मेरे आंकड़े",
    statGames: "खेल",
    statHours: "घंटे",
    statTrophies: "ट्रॉफी",
    statAchievement: "वर्तमान उपलब्धि",
    achievementsUnlocked: "अनलॉक की गई उपलब्धियां",
    yourSessions: "आपके गेमिंग सेशन",

    wallTitle: "स्मरणीय ट्रॉफी की दीवार",
    wallDesc: "अपनी सबसे महाकाव्य, चुनौतीपूर्ण और अविस्मरणीय ट्रॉफी साझा करें।",
    addTrophy: "ट्रॉफी साझा करें",
    newTrophy: "ट्रॉफी साझा करें",
    sortBy: "द्वारा सॉर्ट करें:",
    sortRecent: "हाल ही",
    sortPopular: "लोकप्रिय",
    sortDifficulty: "कठिनाई",
    trophyFormTitle: "स्मरणीय ट्रॉफी साझा करें",
    formTrophyName: "उपलब्धि का नाम *",
    formDifficulty: "कठिनाई *",
    formRarity: "दुर्लभता *",
    formImage: "छवि (वैकल्पिक)",
    diffEasy: "आसान",
    diffNormal: "सामान्य",
    diffHard: "कठिन",
    diffBrutal: "क्रूर",
    formShare: "साझा करें",
    formDescription: "आपकी कहानी *",
    formCancel: "रद्द करें",

    rankingsTitle: "वैश्विक रैंकिंग",
    rankingsDesc: "स्मरणीय ट्रॉफी में सबसे उत्कृष्ट खिलाड़ी।",
    topPlayers: "वोट द्वारा शीर्ष खिलाड़ी",
    trophyStats: "ट्रॉफी आंकड़े",

    footerDesc: "वीडियो गेम में ट्रॉफी और उपलब्धियों के ऐतिहासिक विकास के बारे में इंटरैक्टिव डिजिटल संग्रहालय।",
    footerSections: "अनुभाग",
    footerTimeline: "समयरेखा",
    footerTracker: "मेरी प्रगति",
    footerWall: "ट्रॉफी दीवार",
    footerRankings: "रैंकिंग",
    footerAbout: "परिचय",
    footerAboutDesc: "Trophy Legacy एक शैक्षिक और सूचनात्मक मंच है।",
    footerCopy: "© 2026 Trophy Legacy. शैक्षिक सामग्री।",

    toastSuccess: "सफलता",
    toastError: "त्रुटि",
    toastWarning: "चेतावनी",
    toastInfo: "जानकारी",
    recordCreated: "रिकॉर्ड सफलतापूर्वक बनाया गया",
    recordUpdated: "रिकॉर्ड अपडेट किया गया",
    recordDeleted: "रिकॉर्ड हटाया गया",
    validationError: "सत्यापन विफल",
    languageChanged: "भाषा हिंदी में बदल दी गई",
    imageTooLarge: "चित्र बहुत बड़ा है (अधिकतम 5MB)",
    imageInvalidFormat: "छवि प्रारूप अमान्य है",
    confirmDelete: "क्या आप निश्चित हैं कि आप इसे हटाना चाहते हैं?",
  },
};

/* =============================================
   DATOS HISTÓRICOS REALES
   Información verificada sobre hitos gaming
============================================= */

const defaultMilestones = [
  {
    id: 1,
    year: 1982,
    platform: "Activision",
    title: "Parches Físicos Pioneros",
    description: "Activision introduce recompensas externas: jugadores envían fotos a la empresa y reciben parches por correo. Primer concepto de reconocimiento por logros en videojuegos.",
    tag: "retro",
  },
  {
    id: 2,
    year: 1996,
    platform: "MSN Gaming Zone",
    title: "Badges Digitales en Línea",
    description: "Microsoft lanza MSN Gaming Zone con insignias digitales para juegos casuales. Primer sistema de reconocimiento social online.",
    tag: "platform",
  },
  {
    id: 3,
    year: 2005,
    platform: "Xbox 360",
    title: "Nacimiento de Gamerscore",
    description: "22 de noviembre: Xbox 360 revoluciona con Gamerscore universal. 1000 puntos por juego. Estándar industrial nace.",
    tag: "console",
  },
  {
    id: 4,
    year: 2007,
    platform: "Steam",
    title: "Steam Achievements",
    description: "Valve integra logros en Steam. The Orange Box con 99 logros. Más de 2 millones de logros hoy en el catálogo.",
    tag: "pc",
  },
  {
    id: 5,
    year: 2008,
    platform: "PlayStation 3",
    title: "PlayStation Trophies",
    description: "Sony introduce Trofeos: Bronce, Plata, Oro y Platino. El sistema de rareza revoluciona el completismo.",
    tag: "console",
  },
];

/* =============================================
   GERENCIADOR DE ESTADO GLOBAL
   Sistema centralizado de datos (Modular, reutilizable)
============================================= */

class StateManager {
  constructor() {
    this.milestones = this.loadFromStorage("milestones") || defaultMilestones;
    this.trackerSessions = this.loadFromStorage("trackerSessions") || [];
    this.trophyWall = this.loadFromStorage("trophyWall") || [];
    this.language = this.loadFromStorage("language") || "es";
    this.theme = this.loadFromStorage("theme") || "dark";
    this.listeners = [];
  }

  loadFromStorage(key) {
    try {
      const stored = localStorage.getItem(`trophy-legacy:${key}`);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.warn(`Error cargando ${key} de storage:`, e);
      return null;
    }
  }

  saveToStorage(key, data) {
    try {
      localStorage.setItem(`trophy-legacy:${key}`, JSON.stringify(data));
    } catch (e) {
      console.error(`Error guardando ${key}:`, e);
      showToast("error", "Storage lleno", "No se pudieron guardar los cambios");
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach((listener) => listener());
  }

  // ========== MILESTONE CRUD ==========

  addMilestone(milestone) {
    const validatedMilestone = {
      id: Date.now(),
      ...milestone,
      year: parseInt(milestone.year),
    };
    this.milestones.push(validatedMilestone);
    this.saveToStorage("milestones", this.milestones);
    this.notify();
    return validatedMilestone;
  }

  updateMilestone(id, updates) {
    const index = this.milestones.findIndex((m) => m.id === id);
    if (index !== -1) {
      this.milestones[index] = { ...this.milestones[index], ...updates };
      this.saveToStorage("milestones", this.milestones);
      this.notify();
      return this.milestones[index];
    }
    return null;
  }

  deleteMilestone(id) {
    this.milestones = this.milestones.filter((m) => m.id !== id);
    this.saveToStorage("milestones", this.milestones);
    this.notify();
  }

  getMilestones() {
    return [...this.milestones].sort((a, b) => a.year - b.year);
  }

  // ========== TRACKER CRUD ==========

  addTrackerSession(session) {
    const validatedSession = {
      id: Date.now(),
      ...session,
      hours: parseFloat(session.hours),
      level: parseInt(session.level),
      trophies: parseInt(session.trophies),
      fechaRegistro: new Date().toISOString(),
    };
    this.trackerSessions.push(validatedSession);
    this.saveToStorage("trackerSessions", this.trackerSessions);
    this.notify();
    return validatedSession;
  }

  updateTrackerSession(id, updates) {
    const index = this.trackerSessions.findIndex((s) => s.id === id);
    if (index !== -1) {
      this.trackerSessions[index] = {
        ...this.trackerSessions[index],
        ...updates,
      };
      this.saveToStorage("trackerSessions", this.trackerSessions);
      this.notify();
      return this.trackerSessions[index];
    }
    return null;
  }

  deleteTrackerSession(id) {
    this.trackerSessions = this.trackerSessions.filter((s) => s.id !== id);
    this.saveToStorage("trackerSessions", this.trackerSessions);
    this.notify();
  }

  getTrackerSessions() {
    return [...this.trackerSessions].sort(
      (a, b) => new Date(b.fechaRegistro) - new Date(a.fechaRegistro)
    );
  }

  // ========== TROPHY WALL CRUD ==========

  addTrophy(trophy) {
    const validatedTrophy = {
      id: Date.now(),
      ...trophy,
      votes: 0,
      userVoted: false,
      fechaRegistro: new Date().toISOString(),
    };
    this.trophyWall.push(validatedTrophy);
    this.saveToStorage("trophyWall", this.trophyWall);
    this.notify();
    return validatedTrophy;
  }

  updateTrophy(id, updates) {
    const index = this.trophyWall.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.trophyWall[index] = { ...this.trophyWall[index], ...updates };
      this.saveToStorage("trophyWall", this.trophyWall);
      this.notify();
      return this.trophyWall[index];
    }
    return null;
  }

  deleteTrophy(id) {
    this.trophyWall = this.trophyWall.filter((t) => t.id !== id);
    this.saveToStorage("trophyWall", this.trophyWall);
    this.notify();
  }

  voteTrophy(id) {
    const trophy = this.trophyWall.find((t) => t.id === id);
    if (trophy) {
      trophy.userVoted = !trophy.userVoted;
      trophy.votes = trophy.userVoted ? trophy.votes + 1 : trophy.votes - 1;
      this.saveToStorage("trophyWall", this.trophyWall);
      this.notify();
    }
  }

  getTrophies(sortBy = "recent") {
    let sorted = [...this.trophyWall];
    if (sortBy === "votes") {
      sorted.sort((a, b) => b.votes - a.votes);
    } else if (sortBy === "difficulty") {
      const diffOrder = { brutal: 0, hard: 1, normal: 2, easy: 3 };
      sorted.sort((a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]);
    } else {
      sorted.sort(
        (a, b) => new Date(b.fechaRegistro) - new Date(a.fechaRegistro)
      );
    }
    return sorted;
  }

  // ========== ESTADÍSTICAS ==========

  calculateTrackerStats() {
    const sessions = this.trackerSessions;
    return {
      totalGames: new Set(sessions.map((s) => s.game)).size,
      totalHours: sessions.reduce((sum, s) => sum + s.hours, 0),
      totalTrophies: sessions.reduce((sum, s) => sum + s.trophies, 0),
      averageLevel:
        sessions.length > 0
          ? (
              sessions.reduce((sum, s) => sum + s.level, 0) / sessions.length
            ).toFixed(1)
          : 0,
    };
  }

  calculateAchievements() {
    const stats = this.calculateTrackerStats();
    const achievements = [];

    if (stats.totalGames >= 1) achievements.push({ name: "Iniciado", icon: "🎮" });
    if (stats.totalHours >= 10)
      achievements.push({ name: "Jugador Constante", icon: "⚡" });
    if (stats.totalHours >= 50)
      achievements.push({ name: "Explorador Avanzado", icon: "🗺️" });
    if (stats.totalTrophies >= 50)
      achievements.push({ name: "Cazador de Trofeos", icon: "🏆" });
    if (this.trackerSessions.length >= 10)
      achievements.push({ name: "Maestro Persistente", icon: "👑" });
    if (stats.totalHours >= 100)
      achievements.push({ name: "Leyenda del Progreso", icon: "💎" });

    return achievements;
  }

  getRankings() {
    const rankings = this.trophyWall
      .map((trophy) => ({
        username: trophy.username || "Anónimo",
        votes: trophy.votes,
      }))
      .reduce((acc, item) => {
        const existing = acc.find((u) => u.username === item.username);
        if (existing) existing.votes += item.votes;
        else acc.push({ ...item });
        return acc;
      }, [])
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 10)
      .map((item, idx) => ({
        ...item,
        position: idx + 1,
      }));

    return rankings;
  }

  setLanguage(lang) {
    this.language = lang;
    this.saveToStorage("language", lang);
    this.notify();
  }

  setTheme(theme) {
    this.theme = theme;
    this.saveToStorage("theme", theme);
    this.notify();
  }
}

// Instancia global de estado
const stateManager = new StateManager();

/* =============================================
   SISTEMA DE VALIDACIÓN
   Prevención de XSS e inconsistencias semánticas
============================================= */

const Validator = {
  text: (value, minLength = 2, maxLength = 100) => {
    if (!value) return { valid: false, error: "Campo requerido" };
    const trimmed = value.trim();
    if (trimmed.length < minLength)
      return { valid: false, error: `Mínimo ${minLength} caracteres` };
    if (trimmed.length > maxLength)
      return { valid: false, error: `Máximo ${maxLength} caracteres` };
    if (/<[^>]*>/g.test(trimmed))
      return { valid: false, error: "No se permiten etiquetas HTML" };
    return { valid: true, value: trimmed };
  },

  year: (value) => {
    if (!value || value === "") return { valid: false, error: "Selecciona un año" };
    const year = parseInt(value);
    if (isNaN(year)) return { valid: false, error: "Año inválido" };
    if (year < 2000 || year > 2026)
      return { valid: false, error: "Año debe estar entre 2000 y 2026" };
    return { valid: true, value: year };
  },

  number: (value, min = 0, max = 10000) => {
    const num = parseFloat(value);
    if (isNaN(num)) return { valid: false, error: "Número inválido" };
    if (num < min || num > max)
      return { valid: false, error: `Debe estar entre ${min} y ${max}` };
    return { valid: true, value: num };
  },

  select: (value, allowedOptions) => {
    if (!allowedOptions.includes(value))
      return { valid: false, error: "Opción no válida" };
    return { valid: true, value };
  },

  username: (value) => {
    if (!value) return { valid: false, error: "Usuario requerido" };
    if (!/^[a-zA-Z0-9_-]{2,30}$/.test(value.trim())) {
      return {
        valid: false,
        error: "Usuario: 2-30 caracteres (sin espacios ni caracteres especiales)",
      };
    }
    return { valid: true, value: value.trim() };
  },
};

/* =============================================
   FUNCIONES DE UTILIDAD REUTILIZABLES
   DRY Principle - Senior Level
============================================= */

function sanitizeText(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function t(key) {
  const translation =
    translations[stateManager.language]?.[key] || translations.es[key];
  return translation || key;
}

function showToast(type = "info", title = "", message = "") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icons = {
    success: "✓",
    error: "✕",
    warning: "!",
    info: "ⓘ",
  };

  toast.innerHTML = `
    <div class="toast-icon">${icons[type]}</div>
    <div class="toast-content">
      <div class="toast-title">${sanitizeText(title || t("toast" + type.charAt(0).toUpperCase() + type.slice(1)))}</div>
      <div class="toast-message">${sanitizeText(message)}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("removing");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatHours(hours) {
  if (hours >= 1) return hours.toFixed(1) + "h";
  return (hours * 60).toFixed(0) + "m";
}

/* =============================================
   FUNCIONES DE IMAGEN
============================================= */

let currentImageData = null;

function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  // Validar tipo
  if (!file.type.startsWith("image/")) {
    showToast("error", t("toastError"), t("imageInvalidFormat"));
    document.getElementById("trImage").value = "";
    return;
  }

  // Validar tamaño (5MB máximo)
  if (file.size > 5 * 1024 * 1024) {
    showToast("error", t("toastError"), t("imageTooLarge"));
    document.getElementById("trImage").value = "";
    return;
  }

  // Leer archivo
  const reader = new FileReader();
  reader.onload = (event) => {
    currentImageData = event.target.result; // Base64
    const preview = document.getElementById("imagePreview");
    const img = document.getElementById("previewImg");
    img.src = currentImageData;
    preview.classList.remove("hidden");
    updateTrophySaveBtn();
  };
  reader.readAsDataURL(file);
}

function removeImage() {
  currentImageData = null;
  document.getElementById("trImage").value = "";
  document.getElementById("imagePreview").classList.add("hidden");
  updateTrophySaveBtn();
}

/* =============================================
   TRACKER FORM
   Formulario avanzado con validaciones complejas
============================================= */

function initTrackerFormListeners() {
  document.getElementById("trackerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = Validator.username(document.getElementById("tUsername").value);
    const game = Validator.text(document.getElementById("tGame").value, 2, 50);
    const platform = Validator.select(document.getElementById("tPlatform").value, [
      "Xbox",
      "PlayStation",
      "Steam",
      "Nintendo",
      "Mobile",
    ]);
    const hours = Validator.number(document.getElementById("tHours").value, 0.5);
    const level = Validator.number(document.getElementById("tLevel").value, 1, 999);
    const trophies = Validator.number(document.getElementById("tTrophies").value, 0, 1000);

    const errors = {};
    if (!username.valid) errors.username = username.error;
    if (!game.valid) errors.game = game.error;
    if (!platform.valid) errors.platform = platform.error;
    if (!hours.valid) errors.hours = hours.error;
    if (!level.valid) errors.level = level.error;
    if (!trophies.valid) errors.trophies = trophies.error;

    document.querySelectorAll("#trackerForm .error-msg").forEach((el) => {
      el.textContent = "";
      el.classList.remove("show");
    });

    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([field, error]) => {
        const errorEl = document.getElementById(field + "Error");
        if (errorEl) {
          errorEl.textContent = error;
          errorEl.classList.add("show");
        }
      });
      return;
    }

    const session = {
      username: username.value,
      game: game.value,
      platform: platform.value,
      hours: hours.value,
      level: level.value,
      trophies: trophies.value,
    };

    stateManager.addTrackerSession(session);
    showToast("success", t("toastSuccess"), t("recordCreated"));
    e.target.reset();
    renderTrackerStats();
    renderTrackerList();
  });

  document.getElementById("trackerForm")?.addEventListener("reset", () => {
    document.querySelectorAll("#trackerForm .error-msg").forEach((el) => {
      el.textContent = "";
      el.classList.remove("show");
    });
  });
}

/* =============================================
   RENDERIZACIÓN DE ESTADÍSTICAS
   Componente reactivo
============================================= */

function renderTrackerStats() {
  const stats = stateManager.calculateTrackerStats();
  const achievements = stateManager.calculateAchievements();

  document.getElementById("totalGames").textContent = stats.totalGames;
  document.getElementById("totalHours").textContent = stats.totalHours.toFixed(1) + "h";
  document.getElementById("totalTrophies").textContent = stats.totalTrophies;

  if (achievements.length > 0) {
    document.getElementById("currentAchievement").textContent =
      achievements[achievements.length - 1].icon;
  }

  const achievementsContainer = document.getElementById("achievementsContainer");
  achievementsContainer.innerHTML = achievements
    .map(
      (ach) => `
    <div class="achievement-badge" title="${sanitizeText(ach.name)}">
      <div class="achievement-icon">${ach.icon}</div>
      <div class="achievement-name">${sanitizeText(ach.name)}</div>
    </div>
  `
    )
    .join("");
}

/* =============================================
   RENDERIZACIÓN DE LISTA DE SESIONES
   Con acciones CRUD inline
============================================= */

function renderTrackerList() {
  const sessions = stateManager.getTrackerSessions();
  const container = document.getElementById("trackerListContainer");

  if (sessions.length === 0) {
    container.innerHTML =
      '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No hay sesiones registradas aún. ¡Empieza ahora!</p>';
    return;
  }

  container.innerHTML = sessions
    .map(
      (session) => `
    <div class="tracker-item">
      <div class="tracker-item-icon">🎮</div>
      <div class="tracker-item-info">
        <h4>${sanitizeText(session.game)}</h4>
        <div class="tracker-item-meta">
          <span><strong>${sanitizeText(session.username)}</strong></span>
          <span>📱 ${sanitizeText(session.platform)}</span>
          <span>⏱️ ${formatHours(session.hours)}</span>
          <span>📊 Nivel ${session.level}</span>
          <span>🏆 ${session.trophies} trofeos</span>
          <span style="color: var(--text-muted); font-size: 0.8rem;">${formatDate(session.fechaRegistro)}</span>
        </div>
      </div>
      <div class="tracker-item-actions">
        <button class="btn-action delete-session" data-id="${session.id}" title="Eliminar">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  `
    )
    .join("");

  document.querySelectorAll(".delete-session").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      if (confirm(t("confirmDelete"))) {
        stateManager.deleteTrackerSession(id);
        showToast("success", t("toastSuccess"), t("recordDeleted"));
        renderTrackerList();
        renderTrackerStats();
      }
    });
  });
}

/* =============================================
   TROPHY WALL
   Sistema de votación y renderización
============================================= */

function renderTrophyWall() {
  const sortBy = document.getElementById("wallSortBy")?.value || "recent";
  const trophies = stateManager.getTrophies(sortBy);
  const container = document.getElementById("trophyWallList");

  if (trophies.length === 0) {
    container.innerHTML =
      '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No hay trofeos compartidos aún. ¡Sé el primero!</p>';
    return;
  }

  container.innerHTML = trophies
    .map(
      (trophy) => `
    <div class="trophy-item">
      ${trophy.image ? `<div class="trophy-image-wrapper"><img src="${trophy.image}" alt="${sanitizeText(trophy.achievement)}" class="trophy-image" /></div>` : ""}
      <div class="trophy-header">
        <div class="trophy-title-group">
          <h4>${sanitizeText(trophy.achievement)}</h4>
          <div class="trophy-game">${sanitizeText(trophy.game)}</div>
        </div>
        <div class="trophy-badges">
          <span class="difficulty-badge ${trophy.difficulty}">${sanitizeText(trophy.difficulty.toUpperCase())}</span>
          <span class="rarity-badge ${trophy.rarity}">${sanitizeText(trophy.rarity.toUpperCase())}</span>
        </div>
      </div>
      <div class="trophy-description">"${sanitizeText(trophy.description)}"</div>
      <div class="trophy-footer">
        <div class="trophy-voting">
          <button class="vote-btn ${trophy.userVoted ? "voted" : ""}" data-id="${trophy.id}" title="Votar">
            👍
          </button>
          <span class="vote-count">${trophy.votes}</span>
        </div>
        <div class="trophy-actions">
          <button class="btn-action delete-trophy" data-id="${trophy.id}" title="Eliminar">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  attachTrophyEventListeners();
}

function attachTrophyEventListeners() {
  document.querySelectorAll(".vote-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      stateManager.voteTrophy(id);
      renderTrophyWall();
      renderRankings();
    });
  });

  document.querySelectorAll(".delete-trophy").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      if (confirm(t("confirmDelete"))) {
        stateManager.deleteTrophy(id);
        showToast("success", t("toastSuccess"), t("recordDeleted"));
        renderTrophyWall();
        renderRankings();
      }
    });
  });
}

/* =============================================
   TROPHY FORM
   Validación y creación de trofeos
============================================= */

function openTrophyForm() {
  const form = document.getElementById("trophyForm");
  form.reset();
  currentImageData = null;
  form.querySelectorAll(".error-msg").forEach((el) => {
    el.textContent = "";
    el.classList.remove("show");
  });
  document.getElementById("imagePreview").classList.add("hidden");
  updateTrophySaveBtn();
  document.getElementById("trophyFormModal").classList.remove("hidden");
}

function closeTrophyForm() {
  document.getElementById("trophyFormModal").classList.add("hidden");
  document.getElementById("trophyForm").reset();
  currentImageData = null;
  updateTrophySaveBtn();
}

function updateTrophySaveBtn() {
  const game = (document.getElementById("trGame")?.value || "").trim();
  const achievement = (document.getElementById("trAchievement")?.value || "").trim();
  const difficulty = document.getElementById("trDifficulty")?.value || "";
  const rarity = document.getElementById("trRarity")?.value || "";
  const description = (document.getElementById("trDescription")?.value || "").trim();
  const btn = document.getElementById("trophySubmitBtn");
  if (!btn) return;
  const allFilled = game.length >= 2 && achievement.length >= 3 && difficulty && rarity && description.length >= 10;
  btn.disabled = !allFilled;
  btn.classList.toggle("btn-save--ready", !!allFilled);
}

function initTrophyFormListeners() {
  document.getElementById("addTrophyBtn")?.addEventListener("click", () => {
    openTrophyForm();
  });

  document.getElementById("closeTrophyModal")?.addEventListener("click", (e) => {
    e.stopPropagation();
    closeTrophyForm();
  });

  document.getElementById("cancelTrophyForm")?.addEventListener("click", () => {
    closeTrophyForm();
  });

  document.getElementById("trophyFormModal")?.addEventListener("click", (e) => {
    if (e.target.id === "trophyFormModal") closeTrophyForm();
  });

  document.getElementById("wallSortBy")?.addEventListener("change", () => {
    renderTrophyWall();
  });

  // Image upload handlers
  document.getElementById("trImage")?.addEventListener("change", handleImageUpload);
  document.getElementById("removeImageBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    removeImage();
  });

  // Live field-change → update save button colour
  ["trGame", "trAchievement", "trDifficulty", "trRarity", "trDescription"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updateTrophySaveBtn);
      el.addEventListener("change", updateTrophySaveBtn);
    }
  });

  document.getElementById("trophyForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const game = Validator.text(document.getElementById("trGame").value, 2, 50);
    const achievement = Validator.text(document.getElementById("trAchievement").value, 3, 60);
    const difficulty = Validator.select(document.getElementById("trDifficulty").value, ["easy","normal","hard","brutal"]);
    const rarity = Validator.select(document.getElementById("trRarity").value, ["common","uncommon","rare","epic","legendary"]);
    const description = Validator.text(document.getElementById("trDescription").value, 10, 500);

    const errors = {};
    if (!game.valid) errors.trGame = game.error;
    if (!achievement.valid) errors.trAchievement = achievement.error;
    if (!difficulty.valid) errors.trDifficulty = difficulty.error;
    if (!rarity.valid) errors.trRarity = rarity.error;
    if (!description.valid) errors.trDescription = description.error;

    document.querySelectorAll("#trophyForm .error-msg").forEach((el) => {
      el.textContent = "";
      el.classList.remove("show");
    });

    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([field, error]) => {
        const errorEl = document.getElementById(field + "Error");
        if (errorEl) {
          errorEl.textContent = error;
          errorEl.classList.add("show");
        }
      });
      return;
    }

    const trophy = {
      game: game.value,
      achievement: achievement.value,
      difficulty: difficulty.value,
      rarity: rarity.value,
      description: description.value,
      username: "Usuario Anónimo",
      image: currentImageData || null,
    };

    stateManager.addTrophy(trophy);
    showToast("success", t("toastSuccess"), t("recordCreated"));
    closeTrophyForm();
    renderTrophyWall();
    renderRankings();
  });
}

/* =============================================
   RANKINGS
   Sistema de posiciones globales
============================================= */

function renderRankings() {
  const rankings = stateManager.getRankings();
  const rankingsList = document.getElementById("rankingsList");

  if (rankings.length === 0) {
    rankingsList.innerHTML =
      '<p style="color: var(--text-muted); text-align: center;">No hay datos aún</p>';
  } else {
    rankingsList.innerHTML = rankings
      .map(
        (ranking) => `
      <div class="ranking-item">
        <div class="ranking-position top${ranking.position}">
          ${ranking.position === 1 ? "🥇" : ranking.position === 2 ? "🥈" : ranking.position === 3 ? "🥉" : ranking.position}
        </div>
        <div class="ranking-info">
          <div class="ranking-name">${sanitizeText(ranking.username)}</div>
          <div class="ranking-meta">${ranking.votes} votos</div>
        </div>
        <div class="ranking-score">${ranking.votes} pts</div>
      </div>
    `
      )
      .join("");
  }

  const statsPanel = document.getElementById("trophyStatsPanel");
  const stats = stateManager.calculateTrackerStats();
  statsPanel.innerHTML = `
    <div class="stat-block">
      <div class="stat-block-label">Trofeos Totales</div>
      <div class="stat-block-value">${stateManager.trophyWall.length}</div>
    </div>
    <div class="stat-block">
      <div class="stat-block-label">Votos Totales</div>
      <div class="stat-block-value">${stateManager.trophyWall.reduce((sum, t) => sum + t.votes, 0)}</div>
    </div>
    <div class="stat-block">
      <div class="stat-block-label">Dificultad Promedio</div>
      <div class="stat-block-value">${stateManager.trophyWall.length > 0 ? "Variada" : "—"}</div>
    </div>
  `;
}

/* =============================================
   TEMA OSCURO/CLARO
   Sistema reactivo con persistencia
============================================= */

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  stateManager.setTheme(theme);

  const icon = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabel");

  if (theme === "light") {
    icon.className = "bi bi-sun-fill";
    label.textContent = t("themeLight");
  } else {
    icon.className = "bi bi-moon-stars-fill";
    label.textContent = t("themeDark");
  }
}

document.getElementById("themeToggle")?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

/* =============================================
   SISTEMA DE IDIOMAS
   Cambio dinámico sin recarga
============================================= */

function applyLanguage(lang) {
  stateManager.setLanguage(lang);
  document.documentElement.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    el.title = t(key);
  });

  showToast("info", t("toastInfo"), t("languageChanged"));
  renderTrackerList();
  renderTrackerStats();
  renderTrophyWall();
  renderRankings();
}

document.getElementById("languageSelector")?.addEventListener("change", (e) => {
  applyLanguage(e.target.value);
});

/* =============================================
   SCROLL SUAVE A SECCIONES
   Mejora UX del header
============================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* =============================================
   INICIALIZACIÓN
   Punto de entrada de la aplicación
============================================= */

function initializeApp() {
  applyTheme(stateManager.theme);
  document.getElementById("languageSelector").value = stateManager.language;

  initTrophyFormListeners();
  initTrackerFormListeners();

  renderTrackerStats();
  renderTrackerList();
  renderTrophyWall();
  renderRankings();

  stateManager.subscribe(() => {
    renderTrackerStats();
  });

  applyLanguage(stateManager.language);

  showToast("success", t("toastSuccess"), t("heroEyebrow"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
