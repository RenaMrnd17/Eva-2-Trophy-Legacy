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

    // Timeline
    timelineTitle: "Línea de Tiempo Histórica",
    timelineDesc: "Descubre los hitos fundamentales que transformaron la industria gamer. De recompensas físicas a sistemas globales conectados.",
    addMilestone: "Agregar Hito",
    newMilestone: "Nuevo Hito",
    milestoneFormTitle: "Crear/Editar Hito Histórico",
    formYear: "Año *",
    formPlatform: "Plataforma *",
    formTitle: "Título *",
    formDescription: "Descripción *",
    formTag: "Categoría",
    formSave: "Guardar",
    formCancel: "Cancelar",

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
    diffEasy: "Fácil",
    diffNormal: "Normal",
    diffHard: "Difícil",
    diffBrutal: "Brutal",
    formShare: "Compartir",

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

    timelineTitle: "Historical Timeline",
    timelineDesc: "Discover the fundamental milestones that transformed the gaming industry. From physical rewards to connected global systems.",
    addMilestone: "Add Milestone",
    newMilestone: "New Milestone",
    milestoneFormTitle: "Create/Edit Historical Milestone",
    formYear: "Year *",
    formPlatform: "Platform *",
    formTitle: "Title *",
    formDescription: "Description *",
    formTag: "Category",
    formSave: "Save",
    formCancel: "Cancel",

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
    diffEasy: "Easy",
    diffNormal: "Normal",
    diffHard: "Hard",
    diffBrutal: "Brutal",
    formShare: "Share",

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

    timelineTitle: "ऐतिहासिक समयरेखा",
    timelineDesc: "गेमिंग उद्योग को बदलने वाले मूलभूत मील के पत्थर की खोज करें।",
    addMilestone: "मील का पत्थर जोड़ें",
    newMilestone: "नया मील का पत्थर",
    milestoneFormTitle: "ऐतिहासिक मील का पत्थर बनाएं/संपादित करें",
    formYear: "साल *",
    formPlatform: "प्लेटफॉर्म *",
    formTitle: "शीर्षक *",
    formDescription: "विवरण *",
    formTag: "श्रेणी",
    formSave: "सहेजें",
    formCancel: "रद्द करें",

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
    diffEasy: "आसान",
    diffNormal: "सामान्य",
    diffHard: "कठिन",
    diffBrutal: "क्रूर",
    formShare: "साझा करें",

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

  /**
   * Cargar datos de localStorage con validación
   * Previene corrupción de datos
   */
  loadFromStorage(key) {
    try {
      const stored = localStorage.getItem(`trophy-legacy:${key}`);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.warn(`Error cargando ${key} de storage:`, e);
      return null;
    }
  }

  /**
   * Guardar datos con serialización segura
   * Manejo de errores para quota exceeded
   */
  saveToStorage(key, data) {
    try {
      localStorage.setItem(`trophy-legacy:${key}`, JSON.stringify(data));
    } catch (e) {
      console.error(`Error guardando ${key}:`, e);
      showToast("error", "Storage lleno", "No se pudieron guardar los cambios");
    }
  }

  /**
   * Sistema de suscripciones para reactividad
   * Patrón Observer para desacoplamiento
   */
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

  /**
   * Cálculo de logros automáticos basado en progreso
   * Gamificación mediante milestones personales
   */
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

/**
 * Validador modular para diferentes tipos de entrada
 * Implementa reglas de negocio específicas del dominio
 */
const Validator = {
  /**
   * Validación de texto genérico
   * Previene inyección XSS mediante sanitización
   */
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

  /**
   * Validación de año con rango lógico
   * Evita años imposibles o datos del futuro distante
   */
  year: (value) => {
    const year = parseInt(value);
    if (isNaN(year)) return { valid: false, error: "Año inválido" };
    if (year < 1980 || year > 2026)
      return { valid: false, error: "Año debe estar entre 1980 y 2026" };
    return { valid: true, value: year };
  },

  /**
   * Validación de números con rango
   * Aplicable a horas, niveles, trofeos
   */
  number: (value, min = 0, max = 10000) => {
    const num = parseFloat(value);
    if (isNaN(num)) return { valid: false, error: "Número inválido" };
    if (num < min || num > max)
      return { valid: false, error: `Debe estar entre ${min} y ${max}` };
    return { valid: true, value: num };
  },

  /**
   * Validación de selección de opciones permitidas
   * Previene inyección de valores no autorizados
   */
  select: (value, allowedOptions) => {
    if (!allowedOptions.includes(value))
      return { valid: false, error: "Opción no válida" };
    return { valid: true, value };
  },

  /**
   * Validación de gamertag/username
   * Reglas: alfanuméricos, guiones, sin espacios
   */
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

/**
 * Sanitización de texto para prevenir XSS
 * Se utiliza en renderizado dinámico
 */
function sanitizeText(text) {
  const div = document.createElement("div");
  div.textContent = text; // textContent previene inyección
  return div.innerHTML;
}

/**
 * Obtener traducción con fallback
 * Reutilizable en toda la aplicación
 */
function t(key) {
  const translation =
    translations[stateManager.language]?.[key] || translations.es[key];
  return translation || key;
}

/**
 * Sistema de notificaciones toast
 * Reemplaza alert() con notificaciones elegantes
 * Tipos: success, error, warning, info
 */
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

/**
 * Formatear fecha a formato legible
 * Reutilizable en listados
 */
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

/**
 * Formatear horas a formato legible
 * Ejemplos: 10.5h, 120h
 */
function formatHours(hours) {
  if (hours >= 1) return hours.toFixed(1) + "h";
  return (hours * 60).toFixed(0) + "m";
}

/* =============================================
   RENDERIZACIÓN DE TIMELINE
   Componente modular e interactivo
============================================= */

function renderTimeline() {
  const timelineList = document.getElementById("timelineList");
  const milestones = stateManager.getMilestones();

  timelineList.innerHTML = milestones
    .map(
      (milestone, index) => `
    <li class="timeline-item" style="--index: ${index}">
      <div class="timeline-dot" title="${milestone.year}" aria-label="Año ${milestone.year}">
        ${milestone.year.toString().slice(-2)}
      </div>
      <article class="timeline-card">
        <span class="tag">${sanitizeText(milestone.tag)}</span>
        <h3>${sanitizeText(milestone.title)}</h3>
        <p>${sanitizeText(milestone.description)}</p>
        <div class="mt-2 d-flex gap-2">
          <small style="color: var(--text-muted);">${sanitizeText(milestone.platform)}</small>
        </div>
        <div class="timeline-card-actions mt-3 d-flex gap-2">
          <button class="btn-action edit-milestone" data-id="${milestone.id}" title="Editar">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn-action delete-milestone" data-id="${milestone.id}" title="Eliminar">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </article>
    </li>
  `
    )
    .join("");

  attachTimelineEventListeners();
}

function attachTimelineEventListeners() {
  document.querySelectorAll(".edit-milestone").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      const milestone = stateManager.milestones.find((m) => m.id === id);
      if (milestone) openMilestoneForm(milestone);
    });
  });

  document.querySelectorAll(".delete-milestone").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      if (confirm(t("confirmDelete") || "¿Eliminar este hito?")) {
        stateManager.deleteMilestone(id);
        showToast("success", t("toastSuccess"), t("recordDeleted"));
        renderTimeline();
      }
    });
  });
}

/* =============================================
   MILESTONE FORM
   Modal reutilizable para crear/editar
============================================= */

function openMilestoneForm(milestone = null) {
  const modal = document.getElementById("milestoneFormModal");
  const form = document.getElementById("milestoneForm");

  if (milestone) {
    document.getElementById("mYear").value = milestone.year;
    document.getElementById("mPlatform").value = milestone.platform;
    document.getElementById("mTitle").value = milestone.title;
    document.getElementById("mDescription").value = milestone.description;
    document.getElementById("mTag").value = milestone.tag;
    form.dataset.editId = milestone.id;
  } else {
    form.reset();
    delete form.dataset.editId;
  }

  modal.classList.remove("hidden");
}

function closeMilestoneForm() {
  document.getElementById("milestoneFormModal").classList.add("hidden");
  document.getElementById("milestoneForm").reset();
}

document.getElementById("addMilestoneBtn")?.addEventListener("click", () => {
  openMilestoneForm();
});

document.getElementById("closeMilestoneModal")?.addEventListener("click", () => {
  closeMilestoneForm();
});

document
  .getElementById("cancelMilestoneForm")
  ?.addEventListener("click", () => {
    closeMilestoneForm();
  });

document.getElementById("milestoneForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const year = Validator.year(document.getElementById("mYear").value);
  const platform = Validator.text(
    document.getElementById("mPlatform").value,
    2,
    50
  );
  const title = Validator.text(document.getElementById("mTitle").value, 3, 80);
  const description = Validator.text(
    document.getElementById("mDescription").value,
    10,
    500
  );
  const tag = document.getElementById("mTag").value;

  const errors = {};
  if (!year.valid) errors.year = year.error;
  if (!platform.valid) errors.platform = platform.error;
  if (!title.valid) errors.title = title.error;
  if (!description.valid) errors.description = description.error;

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

  const formData = {
    year: year.value,
    platform: platform.value,
    title: title.value,
    description: description.value,
    tag,
  };

  const form = document.getElementById("milestoneForm");
  if (form.dataset.editId) {
    stateManager.updateMilestone(parseInt(form.dataset.editId), formData);
    showToast("success", t("toastSuccess"), t("recordUpdated"));
  } else {
    stateManager.addMilestone(formData);
    showToast("success", t("toastSuccess"), t("recordCreated"));
  }

  closeMilestoneForm();
  renderTimeline();
});

/* =============================================
   TRACKER FORM
   Formulario avanzado con validaciones complejas
============================================= */

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
  const level = Validator.number(
    document.getElementById("tLevel").value,
    1,
    999
  );
  const trophies = Validator.number(
    document.getElementById("tTrophies").value,
    0,
    1000
  );

  const errors = {};
  if (!username.valid) errors.username = username.error;
  if (!game.valid) errors.game = game.error;
  if (!platform.valid) errors.platform = platform.error;
  if (!hours.valid) errors.hours = hours.error;
  if (!level.valid) errors.level = level.error;
  if (!trophies.valid) errors.trophies = trophies.error;

  document.querySelectorAll(".error-msg").forEach((el) => {
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
      if (confirm(t("confirmDelete") || "¿Eliminar sesión?")) {
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
      if (confirm(t("confirmDelete") || "¿Eliminar trofeo?")) {
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
  document.getElementById("trophyFormModal").classList.remove("hidden");
}

function closeTrophyForm() {
  document.getElementById("trophyFormModal").classList.add("hidden");
  document.getElementById("trophyForm").reset();
}

document.getElementById("addTrophyBtn")?.addEventListener("click", () => {
  openTrophyForm();
});

document.getElementById("closeTrophyModal")?.addEventListener("click", () => {
  closeTrophyForm();
});

document.getElementById("cancelTrophyForm")?.addEventListener("click", () => {
  closeTrophyForm();
});

document.getElementById("trophyForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const game = Validator.text(document.getElementById("trGame").value, 2, 50);
  const achievement = Validator.text(
    document.getElementById("trAchievement").value,
    3,
    60
  );
  const difficulty = Validator.select(document.getElementById("trDifficulty").value, [
    "easy",
    "normal",
    "hard",
    "brutal",
  ]);
  const rarity = Validator.select(document.getElementById("trRarity").value, [
    "common",
    "uncommon",
    "rare",
    "epic",
    "legendary",
  ]);
  const description = Validator.text(
    document.getElementById("trDescription").value,
    10,
    500
  );

  const errors = {};
  if (!game.valid) errors.trGame = game.error;
  if (!achievement.valid) errors.trAchievement = achievement.error;
  if (!difficulty.valid) errors.trDifficulty = difficulty.error;
  if (!rarity.valid) errors.trRarity = rarity.error;
  if (!description.valid) errors.trDescription = description.error;

  document.querySelectorAll(".error-msg").forEach((el) => {
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
    username: "Usuario Anónimo", // Genérico para privacidad
  };

  stateManager.addTrophy(trophy);
  showToast("success", t("toastSuccess"), t("recordCreated"));
  closeTrophyForm();
  renderTrophyWall();
  renderRankings();
});

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

  // Traducir todos los elementos con atributo data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // Traducir placeholders y títulos
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    el.title = t(key);
  });

  showToast("info", t("toastInfo"), t("languageChanged"));
  renderTimeline();
  renderTrackerList();
  renderTrackerStats();
  renderTrophyWall();
  renderRankings();
}

document.getElementById("languageSelector")?.addEventListener("change", (e) => {
  applyLanguage(e.target.value);
});

/* =============================================
   INICIALIZACIÓN
   Punto de entrada de la aplicación
============================================= */

function initializeApp() {
  // Aplicar tema y idioma guardados
  applyTheme(stateManager.theme);
  document.getElementById("languageSelector").value = stateManager.language;

  // Renderizar componentes iniciales
  renderTimeline();
  renderTrackerStats();
  renderTrackerList();
  renderTrophyWall();
  renderRankings();

  // Suscribirse a cambios de estado
  stateManager.subscribe(() => {
    renderTrackerStats();
  });

  // Cerrar modales al hacer click fuera
  document.getElementById("milestoneFormModal")?.addEventListener("click", (e) => {
    if (e.target.id === "milestoneFormModal") closeMilestoneForm();
  });

  document.getElementById("trophyFormModal")?.addEventListener("click", (e) => {
    if (e.target.id === "trophyFormModal") closeTrophyForm();
  });

  // Cambiar idioma al cargar por primera vez
  applyLanguage(stateManager.language);

  showToast("success", t("toastSuccess"), t("heroEyebrow"));
}

// Esperar a que el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}