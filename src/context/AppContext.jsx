import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const translations = {
  en: {
    nav: {
      features: 'Features',
      screens: 'Screens',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      faq: 'FAQ',
      getApp: 'Get Windows App',
    },
    hero: {
      badge: 'Built for Ghanaian Schools • GES 30/20/50 Grading',
      title: 'School Management, Finally Done Right',
      subtitle: 'Akademia brings attendance, fees, continuous assessment grading, terminal report cards, and Paystack mobile money together in one fast desktop experience for Primary, JHS, and SHS institutions.',
      seeAction: 'Explore Interactive Tour',
      featuresBtn: 'System Features',
      downloadBtn: 'Windows App (.msix)',
      multiTenant: 'Multi Tenant: One platform, isolated school data',
      desktopSpeed: 'Desktop Speed: 60 FPS native Windows performance',
      fintech: 'Paystack MoMo: MTN and Telecel real time verification',
    },
    story: {
      tag: 'Interactive Storyboard',
      scrubLabel: 'Scroll Progress',
      attendanceTag: 'Chapter 1: Morning Roll Call',
      attendanceTitle: 'Attendance recorded in seconds',
      attendanceDesc: 'Teachers take morning roll call with a single tap on the desktop app. Absent students automatically trigger instant SMS alerts to parents before classes begin.',
      gradingTag: 'Chapter 2: Ghana Assessment Engine',
      gradingTitle: 'Curriculum grading with strict 30/20/50 weights',
      gradingDesc: 'Purpose-built for the Ghanaian Basic Education and Senior High curriculum. Continuous Assessment 30%, Mid Term 20%, and Exam 50% with automated rankings.',
      feesTag: 'Chapter 3: Paystack Tuition and Mobile Money',
      feesTitle: 'Mobile money settlement in real time',
      feesDesc: 'Guardians pay via MTN MoMo, Telecel Cash, or bank card. Paystack webhooks reconcile balances instantaneously with zero paperwork.',
      interceptTag: 'Chapter 4: Result Fee Intercept',
      interceptTitle: 'Automated report card release protocol',
      interceptDesc: 'Akademia signature safeguard. Report cards with outstanding balances are automatically withheld. The moment a payment clears, the card releases with a tamper proof verification QR code.',
    },
    roles: {
      label: 'Role Based Security',
      title: 'Everyone has exactly the access they need',
      subtitle: 'Strict role separation guarantees exam integrity, financial privacy, and operational clarity across your school.',
    },
    pricing: {
      label: 'Local Predictable Pricing',
      title: 'Transparent pricing in Cedis. No hidden charges.',
      subtitle: 'Every plan includes Paystack MoMo integration, continuous software updates, and reliable data isolation.',
      termly: 'Termly Billing (3 Terms / Year)',
      annual: 'Annual Billing',
      save: 'Save 20%',
    },
    footer: {
      desc: 'The unified desktop operating system for Ghanaian education. Attendance roll call, Paystack fee settlement, WAEC and GES 30/20/50 assessment, and tamper proof QR terminal reports.',
      builtFor: 'Built with pride for schools across Accra, Kumasi, Takoradi, and Tamale',
      backToTop: 'Back to Top',
    },
  },
  tw: {
    nav: {
      features: 'Nneɛma a Ɛwɔ Mu',
      screens: 'Mfonini Ahodoɔ',
      howItWorks: 'Sɛnea Ɛyɛ Adwuma',
      pricing: 'Boɔ a Ɛyɛ',
      faq: 'Nsɛmmisa',
      getApp: 'Fa Windows App No',
    },
    hero: {
      badge: 'Yɛyɛe Maa Ghana Sukuu Ahodoɔ • GES Nsusui 30/20/50',
      title: 'Sukuu Nhyehyɛe Pa, Afei Deɛ Ɛbɔɔ Mu Pɛpɛɛpɛ',
      subtitle: 'Akademia de sukuufoɔ mmorosoɔ, adesua akatua, mfididwuma ho nkontaa, ne Paystack sika gyeɛ nyinaa hyɛ desktop dwumadie baako mu ma Primary, JHS, ne SHS sukuu ahodoɔ.',
      seeAction: 'Hwɛ Sɛnea Ɛyɛ Adwuma',
      featuresBtn: 'Nneɛma a Ɛwɔ Mu',
      downloadBtn: 'Windows App (.msix)',
      multiTenant: 'Sukuu Botae: Sukuu biara wɔ ne nkontabuo a ɛda fam',
      desktopSpeed: 'Ntɛmntɛm: Windows desktop a ɛyɛ adwuma brɛoo akyi',
      fintech: 'Paystack MoMo: MTN ne Telecel sika gyeɛ ntɛmntɛm',
    },
    story: {
      tag: 'Sukuu Asetenam Nsɛm',
      scrubLabel: 'Nkurɔfoɔ Nkɔsoɔ',
      attendanceTag: 'Fa 1: Anɔpa Mmorosoɔ',
      attendanceTitle: 'Wɔtwerɛ sukuufoɔ din wɔ sikani kakraabi mu',
      attendanceDesc: 'Akyerɛkyerɛfoɔ de anɔpa mfididwuma kyerɛ sukuufoɔ a wɔwɔ hɔ ntɛm ara. Sɛ obi anba a, mfididwuma no de SMS kɔma awofoɔ ntɛm ara ansa na adesua afiti aseɛ.',
      gradingTag: 'Fa 2: Ghana Nkontabuo Nhyehyɛe',
      gradingTitle: 'Nkontabuo pa a ɛfa 30/20/50 ho pɛpɛɛpɛ',
      gradingDesc: 'Yɛyɛe maa Ghana Basic Education ne SHS nkontabuo: Continuous Assessment 30%, Mid Term 20%, ne Sɔhwɛ 50%.',
      feesTag: 'Fa 3: Paystack Sukuu Ka ne MoMo',
      feesTitle: 'Mobile Money nkontabuo ntɛmntɛm',
      feesDesc: 'Awofoɔ tumi tua ka fa MTN MoMo, Telecel Cash, anaa bank kaadi so. Paystack si pi ntɛm ara a krataa biara nka akyi.',
      interceptTag: 'Fa 4: Result Fee Intercept Nhyehyɛe',
      interceptTitle: 'Report card a wɔde sie kɔsi sɛ wotua ka',
      interceptDesc: 'Sukuufoɔ a wɔde ka no report card sie kɔpem sɛ awofoɔ betua sika no wie. Sɛ sika no duru pɛ a, krataa no da adi a QR code a wɔnsakra da wɔ ho.',
    },
    roles: {
      label: 'Tumidie Nhyehyɛe',
      title: 'Obiara wɔ tumi a ɛfata no nko ara',
      subtitle: 'Sukuu Panyin ne Akyerɛkyerɛfoɔ wɔ baabi pɔtee a wɔhwɛ sɛnea nsɔhwɛ ne nkontabuo bɛyɛ pɛpɛɛpɛ daa.',
    },
    pricing: {
      label: 'Boɔ a Ɛyɛ Pɛpɛɛpɛ',
      title: 'Boɔ a ɛda adi pefee wɔ Ghana Cedis mu. Biribiara nsuma.',
      subtitle: 'Nhyehyɛe biara kura Paystack MoMo gyeɛ, mfididwuma foforɔ ntimtim, ne sukuu data a ɛda fann.',
      termly: 'Term Biara Tua (Term 3 wɔ Afe Mu)',
      annual: 'Afe Mu Tua',
      save: 'Gye 20% So',
    },
    footer: {
      desc: 'Mfididwuma kɛseɛ a ɛboa Ghana sukuu ahodoɔ nyinaa. Mmorosoɔ, Paystack ka gyeɛ, WAEC ne GES 30/20/50 nkontabuo, ne QR report card.',
      builtFor: 'Yɛde anigyeɛ yɛ maa sukuu a ɛwɔ Accra, Kumasi, Takoradi, ne Tamale',
      backToTop: 'Kɔ Soro Bio',
    },
  },
  fr: {
    nav: {
      features: 'Fonctionnalités',
      screens: 'Captures',
      howItWorks: 'Comment ça marche',
      pricing: 'Tarification',
      faq: 'FAQ',
      getApp: 'Obtenir l’application',
    },
    hero: {
      badge: 'Conçu pour les écoles ghanéennes • Notation GES 30/20/50',
      title: 'La gestion scolaire, enfin réussie',
      subtitle: 'Akademia rassemble les présences, la scolarité, la notation continue, les bulletins officiels et les paiements Paystack Mobile Money sur une application pour Primaire, JHS et SHS.',
      seeAction: 'Voir la démonstration',
      featuresBtn: 'Fonctionnalités',
      downloadBtn: 'Application Windows (.msix)',
      multiTenant: 'Multi-Établissements: Données strictement isolées',
      desktopSpeed: 'Haute Performance: 60 FPS sur Windows natif',
      fintech: 'Paystack MoMo: Vérification instantanée MTN & Telecel',
    },
    story: {
      tag: 'Scénario Interactif',
      scrubLabel: 'Progression de défilement',
      attendanceTag: 'Chapitre 1: Appel du Matin',
      attendanceTitle: 'Présences enregistrées en quelques secondes',
      attendanceDesc: 'Les enseignants font l’appel du matin en un clic. Les absences déclenchent immédiatement une alerte SMS aux tuteurs avant le début des cours.',
      gradingTag: 'Chapitre 2: Moteur Pédagogique du Ghana',
      gradingTitle: 'Barèmes officiels 30/20/50 du GES',
      gradingDesc: 'Spécifiquement adapté aux programmes ghanéens: Contrôle continu 30%, Mi-semestre 20%, Examen 50% avec calculs automatiques des rangs.',
      feesTag: 'Chapitre 3: Frais Scolaires & Mobile Money',
      feesTitle: 'Rapprochement instantané en temps réel',
      feesDesc: 'Les parents paient via MTN MoMo, Telecel Cash ou carte bancaire. Les webhooks Paystack mettent à jour les soldes immédiatement sans reçu papier.',
      interceptTag: 'Chapitre 4: Result Fee Intercept',
      interceptTitle: 'Protocole de rétention automatique des bulletins',
      interceptDesc: 'La sécurité financière Akademia: les bulletins restent verrouillés tant que les frais d’écolage ne sont pas réglés. Dès validation, le PDF officiel avec QR code sécurisé est débloqué.',
    },
    roles: {
      label: 'Sécurité et Permissions',
      title: 'Chaque utilisateur a exactement les droits nécessaires',
      subtitle: 'La stricte séparation des rôles protège l’intégrité des examens et la confidentialité financière de l’établissement.',
    },
    pricing: {
      label: 'Tarification Claire',
      title: 'Tarifs prévisibles en Cedis. Aucun frais caché.',
      subtitle: 'Chaque plan inclut l’intégration Paystack MoMo, les mises à jour et la sécurité totale de vos données scolaires.',
      termly: 'Paiement par Trimestre (3 par an)',
      annual: 'Facturation Annuelle',
      save: 'Économisez 20%',
    },
    footer: {
      desc: 'Le système d’exploitation pour les écoles du Ghana. Présences, scolarité Paystack, notation GES 30/20/50 et bulletins certifiés par QR code.',
      builtFor: 'Conçu avec fierté pour les établissements d’Accra, Kumasi, Takoradi et Tamale',
      backToTop: 'Retour en haut',
    },
  },
  ga: {
    nav: {
      features: 'Nibii Ni Yɔɔ Mli',
      screens: 'Mfoniri',
      howItWorks: 'Bɔ Ni Etsuɔ Nii Ha',
      pricing: 'Jara',
      faq: 'Sanebimɔi',
      getApp: 'Mɔ Windows App Lɛ',
    },
    hero: {
      badge: 'Afee Kɛha Ghana Skul Lɛi • GES Nsusui 30/20/50',
      title: 'Skul Kwɛmɔ, Aane Agbɛnɛ Efata Pɛpɛɛpɛ',
      subtitle: 'Akademia kɛ skulbii abaamɔ, shika tɔɔmɔ, akɔntaabu kɛ Paystack mobile money fɛɛ feɔ kpeeko kɛha Primary, JHS, kɛ SHS skul lɛi fɛɛ.',
      seeAction: 'Kwɛ Bɔ Ni Eji',
      featuresBtn: 'Nibii Ni Yɔɔ Mli',
      downloadBtn: 'Windows App (.msix)',
      multiTenant: 'Skul Fɛɛ Skul: Skul he saji yɛ srɔto kwraa',
      desktopSpeed: 'Oya: Windows desktop nitsumɔ ni feɔ oyayaay',
      fintech: 'Paystack MoMo: MTN kɛ Telecel shika henumɔ mra',
    },
    story: {
      tag: 'Skul Saji',
      scrubLabel: 'Nɔyagbɛ',
      attendanceTag: 'Fãi 1: Leebi Abaamɔ',
      attendanceTitle: 'Aŋmaɔ skulbii agbɛi yɛ mligblamɔ kukuoo mli',
      attendanceDesc: 'Tsɔɔlɔi ŋmaɔ skulbii ni ba lɛ amrɔ nɔŋŋ. Kɛji mɔ ko bɛ lɛ, SMS yaa fɔlɔi aŋɔɔ mra ansa ni nikasemɔ aje shishi.',
      gradingTag: 'Fãi 2: Ghana Akɔntaabuu Gbɛjianɔtoo',
      gradingTitle: 'Nikasemɔ akɔntaabuu kɛ 30/20/50 pɛpɛɛpɛ',
      gradingDesc: 'Afee kɛha Ghana Basic Education kɛ SHS akɔntaabu: Continuous Assessment 30%, Mid Term 20%, kɛ Exam 50%.',
      feesTag: 'Fãi 3: Paystack Skul Nyɔmɔ kɛ MoMo',
      feesTitle: 'Mobile Money nitsumɔ amrɔ nɔŋŋ',
      feesDesc: 'Fɔlɔi woɔ nyɔmɔ kɛtsɔɔ MTN MoMo, Telecel Cash, loo bank kad so ni wolo gbonyo ko kwraa bɛ mli.',
      interceptTag: 'Fãi 4: Result Fee Intercept Gbɛjianɔtoo',
      interceptTitle: 'Report card ni atoɔ kɛyashi afeɔ nyɔmɔ lɛ gbe',
      interceptDesc: 'Skulbii ni kɛ nyɔmɔ yɔɔ lɛ areport card toɔ kɛyashi awoɔ shika lɛ fɛɛ. Amrɔ nɔŋŋ ni awo lɛ, report card lɛ jeɔ kpo kɛ QR code ni anyɛɛɛ atsake.',
    },
    roles: {
      label: 'He Hegbɛi',
      title: 'Mɔ fɛɛ mɔ yɛ hegbɛ ni sa lɛ pɛ',
      subtitle: 'Skul Nukpa kɛ Tsɔɔlɔi yɛ he pɔtee ni amɛkwɛɔ koni saji fɛɛ aya nɔ pɛpɛɛpɛ daa nɛɛ.',
    },
    pricing: {
      label: 'Jara Ni Ja',
      title: 'Jara ni yɔɔ faŋŋ yɛ Ghana Cedis mli. Noko kwraa bɛ teemɔŋ.',
      subtitle: 'Gbɛjianɔtoo fɛɛ gbɛjianɔtoo kura Paystack MoMo, mfididwuma heee, kɛ skul saji ahe buumɔ.',
      termly: 'Term Fɛɛ Term Woomɔ (Term 3 yɛ Afi Mli)',
      annual: 'Afi Woomɔ',
      save: 'Baa 20% Shi',
    },
    footer: {
      desc: 'Mfididwuma kpole kɛha Ghana skul lɛi fɛɛ. Abaamɔ, Paystack nyɔmɔ henumɔ, WAEC kɛ GES 30/20/50 akɔntaabu, kɛ QR report card.',
      builtFor: 'Afee kɛ miishɛɛ kɛha skul lɛi ni yɔɔ Ga (Accra), Kumasi, Takoradi, kɛ Tamale',
      backToTop: 'Tee Yiteŋ Ekonn',
    },
  },
};

export function AppProvider({ children }) {
  // Theme state: light or dark (with HCI prefers-color-scheme detection and localStorage)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('akademia-theme');
      if (saved === 'light' || saved === 'dark') return saved;
      if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  // Language state: 'en', 'tw' (Asante Twi), 'fr' (French), 'ga' (Ga)
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('akademia-lang');
      if (saved && translations[saved]) return saved;
    }
    return 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('akademia-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('akademia-lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const t = translations[lang] || translations.en;

  return (
    <AppContext.Provider value={{ theme, setTheme, toggleTheme, lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
