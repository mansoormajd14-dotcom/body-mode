
const LANGUAGES = {
  en: "🇺🇸 English",
  ar: "🇸🇦 العربية",
  he: "🇮🇱 עברית",
  es: "🇪🇸 Español",
  fr: "🇫🇷 Français",
  de: "🇩🇪 Deutsch",
  tr: "🇹🇷 Türkçe",
  pt: "🇵🇹 Português",
  ru: "🇷🇺 Русский",
  it: "🇮🇹 Italiano"
};

const translations = {
  en: {
    home: "Home",
    programs: "Programs",
    about: "About",
    login: "Login",
    signup: "Sign Up",
    dashboard: "Dashboard",
    logout: "Logout",
    courses: "Courses",
    aiCoach: "AI Coach",
    welcome: "Welcome Back",
    loginDesc: "Login to your Body Mode account.",
    email: "Email",
    password: "Password",
    emailPlaceholder: "Enter your email",
    passwordPlaceholder: "Enter your password",
    noAccount: "Don't have an account?",
    createAccount: "Create Account",
    fullName: "Full Name",
    namePlaceholder: "Enter your full name",
    createPassword: "Create a password (8+ characters)",
    signupDesc: "Start your transformation today.",
    alreadyAccount: "Already have an account?",
    personalSpace: "Your Personal Space",
    myDashboard: "My Dashboard",
    myCourses: "My Courses",
    noCourses: "No course purchased yet.",
    viewPrograms: "View Programs",
    myProgress: "My Progress",
    completed: "completed",
    coachComing: "Your personal fitness assistant is coming soon.",
    learnMore: "Learn More",
    checkingAccount: "Checking your account...",
    aiTitle: "Your Personal AI Coach",
    aiDescription: "Train smarter. Eat better. Track your progress. Your fitness journey starts here.",
    workoutPlanner: "Workout Planner",
    workoutDesc: "Build a workout routine based on your goals, experience, and available equipment.",
    createWorkout: "Create Workout",
    nutritionCoach: "Nutrition Coach",
    nutritionDesc: "Plan your meals, understand calories, and learn about protein, carbs, and fats.",
    planMeals: "Plan My Meals",
    progressTracker: "Progress Tracker",
    progressDesc: "Monitor your weight, fitness goals, and transformation progress.",
    trackProgress: "Track Progress",
    fitnessAssistant: "Your personal fitness assistant",
    chatWelcome: "Welcome to Body Mode! I'm your fitness assistant. What would you like to work on today?",
    chatPlaceholder: "Ask about workouts, nutrition, goals...",
    send: "Send",
    demoNotice: "Demo mode — real AI responses are not connected yet.",
    demoReply: "I'm currently running in demo mode. The real AI Coach will be connected soon.",
    loggingIn: "Logging in...",
    creatingAccount: "Creating your account...",
    connectionError: "Connection error. Please try again.",
    next: "Next",
    previous: "Previous",
    finish: "Finish",
    save: "Save",
    age: "Age",
    height: "Height",
    weight: "Weight",
    goal: "Your Goal",
    training: "Training",
    nutrition: "Nutrition",
    lifestyle: "Lifestyle",
    review: "Review",
    beginner: "Beginner",
    pro: "Pro",
    premium: "Premium",
    month: "/month",
    join: "Join"
  },

  ar: {
    home: "الرئيسية",
    programs: "البرامج",
    about: "من نحن",
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    dashboard: "لوحة التحكم",
    logout: "تسجيل الخروج",
    courses: "الدورات",
    aiCoach: "المدرب الذكي",
    welcome: "أهلًا بعودتك",
    loginDesc: "سجّل الدخول إلى حسابك في Body Mode.",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    passwordPlaceholder: "أدخل كلمة المرور",
    noAccount: "ليس لديك حساب؟",
    createAccount: "إنشاء حساب",
    fullName: "الاسم الكامل",
    namePlaceholder: "أدخل اسمك الكامل",
    createPassword: "أنشئ كلمة مرور من 8 أحرف على الأقل",
    signupDesc: "ابدأ رحلتك نحو هدفك اليوم.",
    alreadyAccount: "لديك حساب بالفعل؟",
    personalSpace: "مساحتك الشخصية",
    myDashboard: "لوحة التحكم الخاصة بي",
    myCourses: "دوراتي",
    noCourses: "لم تشترِ أي دورة بعد.",
    viewPrograms: "عرض البرامج",
    myProgress: "تقدّمي",
    completed: "مكتمل",
    coachComing: "مساعدك الرياضي الذكي سيكون متاحًا قريبًا.",
    learnMore: "اعرف المزيد",
    checkingAccount: "جارٍ التحقق من حسابك...",
    aiTitle: "مدربك الذكي الشخصي",
    aiDescription: "تمرّن بذكاء. تناول طعامًا أفضل. تابع تقدّمك. رحلتك الرياضية تبدأ هنا.",
    workoutPlanner: "مخطط التمارين",
    workoutDesc: "أنشئ برنامج تمارين حسب أهدافك وخبرتك والمعدات المتوفرة لديك.",
    createWorkout: "إنشاء برنامج تمارين",
    nutritionCoach: "مدرب التغذية",
    nutritionDesc: "خطط لوجباتك وافهم السعرات والبروتين والكربوهيدرات والدهون.",
    planMeals: "تخطيط وجباتي",
    progressTracker: "متابعة التقدّم",
    progressDesc: "تابع وزنك وأهدافك الرياضية وتطور جسمك.",
    trackProgress: "متابعة التقدّم",
    fitnessAssistant: "مساعدك الرياضي الشخصي",
    chatWelcome: "أهلًا بك في Body Mode! أنا مساعدك الرياضي. على ماذا تريد أن نعمل اليوم؟",
    chatPlaceholder: "اسأل عن التمارين والتغذية والأهداف...",
    send: "إرسال",
    demoNotice: "وضع تجريبي — لم يتم ربط الذكاء الاصطناعي الحقيقي بعد.",
    demoReply: "أنا أعمل حاليًا في الوضع التجريبي. سيتم ربط المدرب الذكي الحقيقي قريبًا.",
    loggingIn: "جارٍ تسجيل الدخول...",
    creatingAccount: "جارٍ إنشاء حسابك...",
    connectionError: "خطأ في الاتصال. حاول مرة أخرى.",
    next: "التالي",
    previous: "السابق",
    finish: "إنهاء",
    save: "حفظ",
    age: "العمر",
    height: "الطول",
    weight: "الوزن",
    goal: "هدفك",
    training: "التمارين",
    nutrition: "التغذية",
    lifestyle: "نمط الحياة",
    review: "المراجعة",
    beginner: "مبتدئ",
    pro: "احترافي",
    premium: "بريميوم",
    month: "/شهر",
    join: "اشترك"
  },

  he: {
    home: "בית",
    programs: "תוכניות",
    about: "אודות",
    login: "התחברות",
    signup: "הרשמה",
    dashboard: "לוח בקרה",
    logout: "התנתקות",
    courses: "קורסים",
    aiCoach: "מאמן AI",
    welcome: "ברוכים השבים",
    loginDesc: "התחברו לחשבון Body Mode שלכם.",
    email: "אימייל",
    password: "סיסמה",
    emailPlaceholder: "הזינו כתובת אימייל",
    passwordPlaceholder: "הזינו סיסמה",
    noAccount: "אין לכם חשבון?",
    createAccount: "יצירת חשבון",
    fullName: "שם מלא",
    namePlaceholder: "הזינו שם מלא",
    createPassword: "צרו סיסמה עם לפחות 8 תווים",
    signupDesc: "התחילו את השינוי שלכם היום.",
    alreadyAccount: "כבר יש לכם חשבון?",
    personalSpace: "האזור האישי שלכם",
    myDashboard: "לוח הבקרה שלי",
    myCourses: "הקורסים שלי",
    noCourses: "עדיין לא נרכשו קורסים.",
    viewPrograms: "הצגת תוכניות",
    myProgress: "ההתקדמות שלי",
    completed: "הושלם",
    coachComing: "עוזר הכושר האישי שלכם יהיה זמין בקרוב.",
    learnMore: "מידע נוסף",
    checkingAccount: "בודקים את החשבון...",
    aiTitle: "מאמן ה-AI האישי שלכם",
    aiDescription: "התאמנו חכם יותר. אכלו טוב יותר. עקבו אחר ההתקדמות.",
    workoutPlanner: "תכנון אימונים",
    workoutDesc: "בנו תוכנית אימונים לפי המטרות, הניסיון והציוד שלכם.",
    createWorkout: "יצירת אימון",
    nutritionCoach: "מאמן תזונה",
    nutritionDesc: "תכננו ארוחות ולמדו על קלוריות, חלבון, פחמימות ושומנים.",
    planMeals: "תכנון ארוחות",
    progressTracker: "מעקב התקדמות",
    progressDesc: "עקבו אחר המשקל, המטרות וההתקדמות שלכם.",
    trackProgress: "מעקב התקדמות",
    fitnessAssistant: "עוזר הכושר האישי שלכם",
    chatWelcome: "ברוכים הבאים ל-Body Mode! במה תרצו להתמקד היום?",
    chatPlaceholder: "שאלו על אימונים, תזונה ומטרות...",
    send: "שליחה",
    demoNotice: "מצב הדגמה — AI אמיתי עדיין לא מחובר.",
    demoReply: "אני פועל כרגע במצב הדגמה. מאמן ה-AI יחובר בקרוב.",
    loggingIn: "מתחברים...",
    creatingAccount: "יוצרים חשבון...",
    connectionError: "שגיאת חיבור. נסו שוב.",
    next: "הבא",
    previous: "הקודם",
    finish: "סיום",
    save: "שמירה",
    age: "גיל",
    height: "גובה",
    weight: "משקל",
    goal: "המטרה שלכם",
    training: "אימונים",
    nutrition: "תזונה",
    lifestyle: "אורח חיים",
    review: "סקירה",
    beginner: "מתחילים",
    pro: "מתקדמים",
    premium: "פרימיום",
    month: "/חודש",
    join: "הצטרפות"
  },

  es: {
    home: "Inicio", programs: "Programas", about: "Nosotros",
    login: "Iniciar sesión", signup: "Registrarse",
    dashboard: "Panel", logout: "Cerrar sesión", courses: "Cursos",
    aiCoach: "Entrenador IA", welcome: "Bienvenido de nuevo",
    loginDesc: "Inicia sesión en tu cuenta de Body Mode.",
    email: "Correo electrónico", password: "Contraseña",
    emailPlaceholder: "Introduce tu correo",
    passwordPlaceholder: "Introduce tu contraseña",
    noAccount: "¿No tienes cuenta?", createAccount: "Crear cuenta",
    fullName: "Nombre completo", namePlaceholder: "Introduce tu nombre",
    createPassword: "Crea una contraseña de al menos 8 caracteres",
    signupDesc: "Comienza tu transformación hoy.",
    alreadyAccount: "¿Ya tienes cuenta?",
    personalSpace: "Tu espacio personal", myDashboard: "Mi panel",
    myCourses: "Mis cursos", noCourses: "Aún no has comprado cursos.",
    viewPrograms: "Ver programas", myProgress: "Mi progreso",
    completed: "completado", coachComing: "Tu asistente de fitness estará disponible pronto.",
    learnMore: "Más información", checkingAccount: "Verificando tu cuenta...",
    aiTitle: "Tu entrenador personal IA",
    aiDescription: "Entrena mejor. Come mejor. Sigue tu progreso.",
    workoutPlanner: "Planificador de entrenamientos",
    workoutDesc: "Crea una rutina según tus objetivos, experiencia y equipo.",
    createWorkout: "Crear entrenamiento", nutritionCoach: "Asesor nutricional",
    nutritionDesc: "Planifica comidas y aprende sobre calorías y macronutrientes.",
    planMeals: "Planificar comidas", progressTracker: "Seguimiento del progreso",
    progressDesc: "Controla tu peso, objetivos y progreso.",
    trackProgress: "Seguir progreso", fitnessAssistant: "Tu asistente personal de fitness",
    chatWelcome: "¡Bienvenido a Body Mode! ¿En qué quieres trabajar hoy?",
    chatPlaceholder: "Pregunta sobre entrenamiento, nutrición y objetivos...",
    send: "Enviar", demoNotice: "Modo demo: la IA real aún no está conectada.",
    demoReply: "Estoy en modo demo. El entrenador IA real estará disponible pronto.",
    loggingIn: "Iniciando sesión...", creatingAccount: "Creando tu cuenta...",
    connectionError: "Error de conexión. Inténtalo de nuevo.",
    next: "Siguiente", previous: "Anterior", finish: "Finalizar", save: "Guardar",
    age: "Edad", height: "Altura", weight: "Peso", goal: "Tu objetivo",
    training: "Entrenamiento", nutrition: "Nutrición", lifestyle: "Estilo de vida",
    review: "Revisión", beginner: "Principiante", pro: "Pro",
    premium: "Premium", month: "/mes", join: "Unirse"
  },

  fr: {
    home: "Accueil", programs: "Programmes", about: "À propos",
    login: "Connexion", signup: "Inscription", dashboard: "Tableau de bord",
    logout: "Déconnexion", courses: "Cours", aiCoach: "Coach IA",
    welcome: "Bon retour", loginDesc: "Connectez-vous à votre compte Body Mode.",
    email: "E-mail", password: "Mot de passe",
    emailPlaceholder: "Saisissez votre e-mail",
    passwordPlaceholder: "Saisissez votre mot de passe",
    noAccount: "Pas encore de compte ?", createAccount: "Créer un compte",
    fullName: "Nom complet", namePlaceholder: "Saisissez votre nom complet",
    createPassword: "Créez un mot de passe de 8 caractères minimum",
    signupDesc: "Commencez votre transformation aujourd'hui.",
    alreadyAccount: "Vous avez déjà un compte ?",
    personalSpace: "Votre espace personnel", myDashboard: "Mon tableau de bord",
    myCourses: "Mes cours", noCourses: "Aucun cours acheté pour le moment.",
    viewPrograms: "Voir les programmes", myProgress: "Ma progression",
    completed: "terminé", coachComing: "Votre assistant fitness sera bientôt disponible.",
    learnMore: "En savoir plus", checkingAccount: "Vérification du compte...",
    aiTitle: "Votre coach IA personnel",
    aiDescription: "Entraînez-vous mieux. Mangez mieux. Suivez vos progrès.",
    workoutPlanner: "Planificateur d'entraînement",
    workoutDesc: "Créez un programme selon vos objectifs, votre expérience et votre équipement.",
    createWorkout: "Créer un entraînement", nutritionCoach: "Coach nutrition",
    nutritionDesc: "Planifiez vos repas et comprenez les calories et macronutriments.",
    planMeals: "Planifier mes repas", progressTracker: "Suivi des progrès",
    progressDesc: "Suivez votre poids, vos objectifs et votre évolution.",
    trackProgress: "Suivre mes progrès", fitnessAssistant: "Votre assistant fitness personnel",
    chatWelcome: "Bienvenue sur Body Mode ! Quel est votre objectif aujourd'hui ?",
    chatPlaceholder: "Posez une question sur le sport ou la nutrition...",
    send: "Envoyer", demoNotice: "Mode démo — l'IA réelle n'est pas encore connectée.",
    demoReply: "Je fonctionne en mode démo. Le véritable coach IA arrivera bientôt.",
    loggingIn: "Connexion...", creatingAccount: "Création du compte...",
    connectionError: "Erreur de connexion. Réessayez.",
    next: "Suivant", previous: "Précédent", finish: "Terminer", save: "Enregistrer",
    age: "Âge", height: "Taille", weight: "Poids", goal: "Votre objectif",
    training: "Entraînement", nutrition: "Nutrition", lifestyle: "Mode de vie",
    review: "Récapitulatif", beginner: "Débutant", pro: "Pro",
    premium: "Premium", month: "/mois", join: "Rejoindre"
  },

  de: {
    home: "Startseite", programs: "Programme", about: "Über uns",
    login: "Anmelden", signup: "Registrieren", dashboard: "Dashboard",
    logout: "Abmelden", courses: "Kurse", aiCoach: "KI-Coach",
    welcome: "Willkommen zurück", loginDesc: "Melde dich bei Body Mode an.",
    email: "E-Mail", password: "Passwort",
    emailPlaceholder: "E-Mail eingeben", passwordPlaceholder: "Passwort eingeben",
    noAccount: "Noch kein Konto?", createAccount: "Konto erstellen",
    fullName: "Vollständiger Name", namePlaceholder: "Namen eingeben",
    createPassword: "Passwort mit mindestens 8 Zeichen erstellen",
    signupDesc: "Starte deine Veränderung noch heute.",
    alreadyAccount: "Du hast bereits ein Konto?",
    personalSpace: "Dein persönlicher Bereich", myDashboard: "Mein Dashboard",
    myCourses: "Meine Kurse", noCourses: "Noch keine Kurse gekauft.",
    viewPrograms: "Programme ansehen", myProgress: "Mein Fortschritt",
    completed: "abgeschlossen", coachComing: "Dein Fitness-Assistent kommt bald.",
    learnMore: "Mehr erfahren", checkingAccount: "Konto wird geprüft...",
    aiTitle: "Dein persönlicher KI-Coach",
    aiDescription: "Trainiere smarter. Ernähre dich besser. Verfolge deine Fortschritte.",
    workoutPlanner: "Trainingsplaner",
    workoutDesc: "Erstelle einen Plan passend zu deinen Zielen, deiner Erfahrung und Ausrüstung.",
    createWorkout: "Training erstellen", nutritionCoach: "Ernährungscoach",
    nutritionDesc: "Plane Mahlzeiten und lerne Kalorien und Makronährstoffe kennen.",
    planMeals: "Mahlzeiten planen", progressTracker: "Fortschrittskontrolle",
    progressDesc: "Verfolge Gewicht, Ziele und Entwicklung.",
    trackProgress: "Fortschritt verfolgen", fitnessAssistant: "Dein persönlicher Fitness-Assistent",
    chatWelcome: "Willkommen bei Body Mode! Woran möchtest du heute arbeiten?",
    chatPlaceholder: "Frage nach Training, Ernährung oder Zielen...",
    send: "Senden", demoNotice: "Demo-Modus — echte KI ist noch nicht verbunden.",
    demoReply: "Ich laufe derzeit im Demo-Modus. Der echte KI-Coach kommt bald.",
    loggingIn: "Anmeldung läuft...", creatingAccount: "Konto wird erstellt...",
    connectionError: "Verbindungsfehler. Bitte erneut versuchen.",
    next: "Weiter", previous: "Zurück", finish: "Fertig", save: "Speichern",
    age: "Alter", height: "Größe", weight: "Gewicht", goal: "Dein Ziel",
    training: "Training", nutrition: "Ernährung", lifestyle: "Lebensstil",
    review: "Übersicht", beginner: "Anfänger", pro: "Pro",
    premium: "Premium", month: "/Monat", join: "Beitreten"
  },

  tr: {
    home: "Ana Sayfa", programs: "Programlar", about: "Hakkımızda",
    login: "Giriş Yap", signup: "Kayıt Ol", dashboard: "Panel",
    logout: "Çıkış Yap", courses: "Kurslar", aiCoach: "Yapay Zekâ Koçu",
    welcome: "Tekrar Hoş Geldin", loginDesc: "Body Mode hesabına giriş yap.",
    email: "E-posta", password: "Şifre",
    emailPlaceholder: "E-posta adresini gir",
    passwordPlaceholder: "Şifreni gir",
    noAccount: "Hesabın yok mu?", createAccount: "Hesap Oluştur",
    fullName: "Ad Soyad", namePlaceholder: "Adını ve soyadını gir",
    createPassword: "En az 8 karakterli şifre oluştur",
    signupDesc: "Değişimine bugün başla.",
    alreadyAccount: "Zaten hesabın var mı?",
    personalSpace: "Kişisel Alanın", myDashboard: "Panelim",
    myCourses: "Kurslarım", noCourses: "Henüz kurs satın alınmadı.",
    viewPrograms: "Programları Gör", myProgress: "İlerlemem",
    completed: "tamamlandı", coachComing: "Kişisel fitness asistanın yakında geliyor.",
    learnMore: "Daha Fazla Bilgi", checkingAccount: "Hesabın kontrol ediliyor...",
    aiTitle: "Kişisel Yapay Zekâ Koçun",
    aiDescription: "Daha akıllı antrenman yap. Daha iyi beslen. Gelişimini takip et.",
    workoutPlanner: "Antrenman Planlayıcı",
    workoutDesc: "Hedeflerine, deneyimine ve ekipmanına göre antrenman planı oluştur.",
    createWorkout: "Antrenman Oluştur", nutritionCoach: "Beslenme Koçu",
    nutritionDesc: "Öğünlerini planla, kalorileri ve makroları öğren.",
    planMeals: "Öğün Planla", progressTracker: "İlerleme Takibi",
    progressDesc: "Kilonu, hedeflerini ve gelişimini takip et.",
    trackProgress: "İlerlemeyi Takip Et", fitnessAssistant: "Kişisel fitness asistanın",
    chatWelcome: "Body Mode'a hoş geldin! Bugün ne üzerinde çalışmak istersin?",
    chatPlaceholder: "Antrenman, beslenme ve hedeflerini sor...",
    send: "Gönder", demoNotice: "Demo modu — gerçek yapay zekâ henüz bağlı değil.",
    demoReply: "Şu anda demo modundayım. Gerçek yapay zekâ koçu yakında gelecek.",
    loggingIn: "Giriş yapılıyor...", creatingAccount: "Hesabın oluşturuluyor...",
    connectionError: "Bağlantı hatası. Tekrar dene.",
    next: "İleri", previous: "Geri", finish: "Bitir", save: "Kaydet",
    age: "Yaş", height: "Boy", weight: "Kilo", goal: "Hedefin",
    training: "Antrenman", nutrition: "Beslenme", lifestyle: "Yaşam Tarzı",
    review: "İnceleme", beginner: "Başlangıç", pro: "Pro",
    premium: "Premium", month: "/ay", join: "Katıl"
  },

  pt: {
    home: "Início", programs: "Programas", about: "Sobre",
    login: "Entrar", signup: "Cadastrar", dashboard: "Painel",
    logout: "Sair", courses: "Cursos", aiCoach: "Treinador IA",
    welcome: "Bem-vindo de volta", loginDesc: "Entre na sua conta Body Mode.",
    email: "E-mail", password: "Senha",
    emailPlaceholder: "Digite seu e-mail", passwordPlaceholder: "Digite sua senha",
    noAccount: "Não tem uma conta?", createAccount: "Criar conta",
    fullName: "Nome completo", namePlaceholder: "Digite seu nome completo",
    createPassword: "Crie uma senha com pelo menos 8 caracteres",
    signupDesc: "Comece sua transformação hoje.",
    alreadyAccount: "Já tem uma conta?",
    personalSpace: "Seu espaço pessoal", myDashboard: "Meu painel",
    myCourses: "Meus cursos", noCourses: "Nenhum curso comprado ainda.",
    viewPrograms: "Ver programas", myProgress: "Meu progresso",
    completed: "concluído", coachComing: "Seu assistente fitness estará disponível em breve.",
    learnMore: "Saiba mais", checkingAccount: "Verificando sua conta...",
    aiTitle: "Seu treinador pessoal de IA",
    aiDescription: "Treine melhor. Alimente-se melhor. Acompanhe seu progresso.",
    workoutPlanner: "Planejador de treinos",
    workoutDesc: "Crie um treino conforme seus objetivos, experiência e equipamentos.",
    createWorkout: "Criar treino", nutritionCoach: "Treinador de nutrição",
    nutritionDesc: "Planeje refeições e entenda calorias e macronutrientes.",
    planMeals: "Planejar refeições", progressTracker: "Acompanhamento de progresso",
    progressDesc: "Acompanhe seu peso, metas e evolução.",
    trackProgress: "Acompanhar progresso", fitnessAssistant: "Seu assistente pessoal de fitness",
    chatWelcome: "Bem-vindo ao Body Mode! Em que deseja trabalhar hoje?",
    chatPlaceholder: "Pergunte sobre treinos, nutrição e metas...",
    send: "Enviar", demoNotice: "Modo de demonstração — a IA real ainda não está conectada.",
    demoReply: "Estou no modo de demonstração. O treinador IA real chegará em breve.",
    loggingIn: "Entrando...", creatingAccount: "Criando sua conta...",
    connectionError: "Erro de conexão. Tente novamente.",
    next: "Próximo", previous: "Anterior", finish: "Concluir", save: "Salvar",
    age: "Idade", height: "Altura", weight: "Peso", goal: "Seu objetivo",
    training: "Treino", nutrition: "Nutrição", lifestyle: "Estilo de vida",
    review: "Revisão", beginner: "Iniciante", pro: "Pro",
    premium: "Premium", month: "/mês", join: "Participar"
  },

  ru: {
    home: "Главная", programs: "Программы", about: "О нас",
    login: "Войти", signup: "Регистрация", dashboard: "Панель",
    logout: "Выйти", courses: "Курсы", aiCoach: "ИИ-тренер",
    welcome: "С возвращением", loginDesc: "Войдите в свой аккаунт Body Mode.",
    email: "Эл. почта", password: "Пароль",
    emailPlaceholder: "Введите эл. почту", passwordPlaceholder: "Введите пароль",
    noAccount: "Нет аккаунта?", createAccount: "Создать аккаунт",
    fullName: "Полное имя", namePlaceholder: "Введите полное имя",
    createPassword: "Создайте пароль от 8 символов",
    signupDesc: "Начните преображение сегодня.",
    alreadyAccount: "Уже есть аккаунт?",
    personalSpace: "Ваш личный кабинет", myDashboard: "Моя панель",
    myCourses: "Мои курсы", noCourses: "Вы ещё не приобрели курсы.",
    viewPrograms: "Смотреть программы", myProgress: "Мой прогресс",
    completed: "завершено", coachComing: "Ваш фитнес-помощник скоро появится.",
    learnMore: "Подробнее", checkingAccount: "Проверяем аккаунт...",
    aiTitle: "Ваш персональный ИИ-тренер",
    aiDescription: "Тренируйтесь умнее. Питайтесь лучше. Следите за прогрессом.",
    workoutPlanner: "Планировщик тренировок",
    workoutDesc: "Создайте программу с учётом целей, опыта и оборудования.",
    createWorkout: "Создать тренировку", nutritionCoach: "Тренер по питанию",
    nutritionDesc: "Планируйте питание и изучайте калории и макронутриенты.",
    planMeals: "Планировать питание", progressTracker: "Отслеживание прогресса",
    progressDesc: "Следите за весом, целями и результатами.",
    trackProgress: "Следить за прогрессом", fitnessAssistant: "Ваш персональный фитнес-помощник",
    chatWelcome: "Добро пожаловать в Body Mode! Над чем поработаем сегодня?",
    chatPlaceholder: "Спросите о тренировках, питании и целях...",
    send: "Отправить", demoNotice: "Демо-режим — настоящий ИИ ещё не подключён.",
    demoReply: "Сейчас я работаю в демо-режиме. Настоящий ИИ-тренер появится скоро.",
    loggingIn: "Выполняется вход...", creatingAccount: "Создаём аккаунт...",
    connectionError: "Ошибка соединения. Попробуйте снова.",
    next: "Далее", previous: "Назад", finish: "Завершить", save: "Сохранить",
    age: "Возраст", height: "Рост", weight: "Вес", goal: "Ваша цель",
    training: "Тренировки", nutrition: "Питание", lifestyle: "Образ жизни",
    review: "Проверка", beginner: "Начальный", pro: "Про",
    premium: "Премиум", month: "/мес.", join: "Присоединиться"
  },

  it: {
    home: "Home", programs: "Programmi", about: "Chi siamo",
    login: "Accedi", signup: "Registrati", dashboard: "Dashboard",
    logout: "Esci", courses: "Corsi", aiCoach: "Coach IA",
    welcome: "Bentornato", loginDesc: "Accedi al tuo account Body Mode.",
    email: "Email", password: "Password",
    emailPlaceholder: "Inserisci la tua email",
    passwordPlaceholder: "Inserisci la password",
    noAccount: "Non hai un account?", createAccount: "Crea account",
    fullName: "Nome completo", namePlaceholder: "Inserisci il tuo nome",
    createPassword: "Crea una password di almeno 8 caratteri",
    signupDesc: "Inizia la tua trasformazione oggi.",
    alreadyAccount: "Hai già un account?",
    personalSpace: "Il tuo spazio personale", myDashboard: "La mia dashboard",
    myCourses: "I miei corsi", noCourses: "Nessun corso acquistato.",
    viewPrograms: "Visualizza programmi", myProgress: "I miei progressi",
    completed: "completato", coachComing: "Il tuo assistente fitness arriverà presto.",
    learnMore: "Scopri di più", checkingAccount: "Verifica dell'account...",
    aiTitle: "Il tuo coach IA personale",
    aiDescription: "Allenati meglio. Mangia meglio. Monitora i tuoi progressi.",
    workoutPlanner: "Pianificatore allenamenti",
    workoutDesc: "Crea un programma in base a obiettivi, esperienza e attrezzatura.",
    createWorkout: "Crea allenamento", nutritionCoach: "Coach nutrizionale",
    nutritionDesc: "Pianifica i pasti e scopri calorie e macronutrienti.",
    planMeals: "Pianifica i pasti", progressTracker: "Monitoraggio progressi",
    progressDesc: "Monitora peso, obiettivi e trasformazione.",
    trackProgress: "Monitora progressi", fitnessAssistant: "Il tuo assistente fitness personale",
    chatWelcome: "Benvenuto su Body Mode! Su cosa vuoi lavorare oggi?",
    chatPlaceholder: "Chiedi di allenamenti, nutrizione e obiettivi...",
    send: "Invia", demoNotice: "Modalità demo — l'IA reale non è ancora collegata.",
    demoReply: "Sono in modalità demo. Il vero coach IA sarà disponibile presto.",
    loggingIn: "Accesso in corso...", creatingAccount: "Creazione account...",
    connectionError: "Errore di connessione. Riprova.",
    next: "Avanti", previous: "Indietro", finish: "Fine", save: "Salva",
    age: "Età", height: "Altezza", weight: "Peso", goal: "Il tuo obiettivo",
    training: "Allenamento", nutrition: "Nutrizione", lifestyle: "Stile di vita",
    review: "Riepilogo", beginner: "Principiante", pro: "Pro",
    premium: "Premium", month: "/mese", join: "Iscriviti"
  }
};

function getLanguage() {
  const saved = localStorage.getItem("bodymode_language");
  return Object.prototype.hasOwnProperty.call(LANGUAGES, saved)
    ? saved
    : "en";
}

function t(key) {
  const lang = getLanguage();

  const value =
    translations[lang]?.[key] ??
    translations.en?.[key];

  return value ?? "";

}

function applyTranslations() {
  const lang = getLanguage();

  document.documentElement.lang = lang;
  document.documentElement.dir =
    ["ar", "he"].includes(lang) ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-price]").forEach(el => {
    el.textContent = "₪" + el.dataset.price + " " + t("month");
  });

  document.querySelectorAll("[data-join]").forEach(el => {
    const plan = el.dataset.join;
    el.textContent = t("join") + " " + t(plan) + " →";
  });

  const selector = document.getElementById("languageSelect");

  if (selector) {
    selector.value = lang;
  }
}

function setLanguage(lang) {
  if (!Object.prototype.hasOwnProperty.call(LANGUAGES, lang)) return;

  localStorage.setItem("bodymode_language", lang);
  applyTranslations();

  document.dispatchEvent(
    new CustomEvent("bodymode:languagechange", {
      detail: { language: lang }
    })
  );
}

function initializeLanguages() {
  let selector = document.getElementById("languageSelect");

  if (!selector) {
    const nav = document.querySelector(".navbar nav");

    if (nav) {
      selector = document.createElement("select");
      selector.id = "languageSelect";
      selector.setAttribute("aria-label", "Choose language");
      nav.appendChild(selector);
    }
  }

  if (selector) {
    selector.innerHTML = "";

    Object.entries(LANGUAGES).forEach(([code, name]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = name;
      selector.appendChild(option);
    });

    selector.addEventListener("change", function() {
      setLanguage(this.value);
    });
  }

  applyTranslations();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeLanguages);
} else {
  initializeLanguages();
}
