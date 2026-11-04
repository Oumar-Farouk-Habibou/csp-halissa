/* ==========================================================
   CSP HALISSA — Toutes les informations modifiables du site
   ========================================================== */
export const school = {
  founded: 2009,
  founderName: 'Mme Amadou Mamou',            
  founderQuote:
    "Notre ambition est simple : offrir à chaque enfant les clés pour réussir, dans un cadre où il se sent aimé, respecté et encouragé à donner le meilleur de lui-même.", 
  address: 'Bobiel vers fenifoot, Niamey, Niger',               
  phone: '+227 97 71 20 60',                    
  email: 'contact@csphalissa.com',                 
  hours: 'Lundi – Vendredi : 8h00 – 17h30',        
  whatsapp: '22797712060'                          
}

export const navLinks = [
  { href: '#ecole', label: "L'école" },
  { href: '#cycles', label: 'Cycles' },
  { href: '#hymne', label: 'Hymne' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#actualites', label: 'Actualités' },
  { href: '#contact', label: 'Contact' }
]

export const cycles = [
  {
    id: 'maternelle', name: "Jardin d'enfants", color: '#ef6f5e', age: '3 – 5 ans',
    title: 'Éveiller la curiosité, cultiver la confiance',
    text: "Un premier contact avec l'école dans un cadre chaleureux et sécurisant, où l'apprentissage passe par le jeu, la découverte et la parole.",
    points: ['Apprentissages par le jeu et les ateliers', 'Éveil du langage, des chiffres et des arts', 'Socialisation et autonomie', 'Encadrement attentif et bienveillant'],
    img: '/assets/img/photo-2.jpg'
  },
  {
    id: 'primaire', name: 'Primaire', color: '#fca311', age: 'CI – CM2',
    title: 'Des fondations solides pour toute la scolarité',
    text: "Lecture, écriture, calcul et méthode : nous construisons les bases essentielles avec rigueur, dans une ambiance qui donne envie d'apprendre.",
    points: ['Maîtrise du français et des mathématiques', "Initiation aux sciences et à l'informatique", 'Suivi individualisé de chaque élève', "Préparation sereine à l'entrée au collège"],
    img: '/assets/img/photo-3.jpg'
  },
  {
    id: 'college', name: 'Collège', color: '#1b998b', age: '6e – 3e',
    title: "Grandir, s'affirmer, se préparer",
    text: 'Un cycle clé pour acquérir méthode, autonomie et esprit critique, avec un encadrement pédagogique et éducatif structuré.',
    points: ['Programme complet et soutien scolaire', 'Discipline et valeurs citoyennes', 'Activités culturelles et sportives', 'Préparation aux examens de fin de cycle'],
    img: '/assets/img/photo-4.jpg'
  },
  {
    id: 'lycee', name: 'Lycée', color: '#14213d', age: '2nde – Terminale',
    title: "Viser le baccalauréat et l'après-bac",
    text: "Un accompagnement exigeant pour atteindre la réussite au baccalauréat et construire un projet d'études ambitieux.",
    points: ['Enseignants qualifiés et expérimentés', 'Évaluations régulières et suivi des résultats', 'Orientation et projet post-bac', "Culture de l'effort et du dépassement de soi"],
    img: '/assets/img/photo-5.jpg'
  }
]

export const values = [
  { icon: 'book',   title: 'Excellence académique', text: 'Des programmes rigoureux et un suivi régulier pour tirer chaque élève vers le haut.' },
  { icon: 'shield', title: 'Cadre sécurisant',       text: 'Un environnement protégé et discipliné où les enfants apprennent en toute sérénité.' },
  { icon: 'heart',  title: 'Bienveillance',          text: "Une équipe à l'écoute, qui accompagne chaque enfant avec attention et respect." },
  { icon: 'users',  title: 'Esprit de famille',      text: "Une relation étroite et transparente entre l'école, les élèves et les parents." },
  { icon: 'spark',  title: 'Créativité & ouverture', text: 'Activités, projets et initiatives pour révéler les talents et élargir les horizons.' },
  { icon: 'globe',  title: 'Citoyens de demain',     text: "Des valeurs de respect, de responsabilité et d'engagement pour servir le Niger et l'Afrique." }
]

export const icons = {
  book:   '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  heart:  '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  users:  '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  spark:  '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 3v4M21 5h-4"/>',
  globe:  '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>'
}

export const journey = [
  { age: '3 ans',  step: 'Les premiers pas',    text: "Entrée au jardin d'enfants : jeux, découvertes et premières amitiés.", color: '#ef6f5e' },
  { age: '6 ans',  step: 'Les bases du savoir', text: "Au primaire, l'enfant apprend à lire, écrire, compter et réfléchir.",   color: '#fca311' },
  { age: '11 ans', step: "L'affirmation",       text: 'Au collège, il gagne en autonomie, en méthode et en confiance.',        color: '#1b998b' },
  { age: '15 ans', step: 'Le cap vers le bac',  text: "Au lycée, il se spécialise et prépare son avenir avec ambition.",       color: '#14213d' },
  { age: '18 ans', step: "L'envol",             text: 'Bachelier, il poursuit ses études ou entre dans la vie active, prêt à réussir.', color: '#ef6f5e' }
]

export const gallery = [
  { src: '/assets/img/photo-1.jpg', caption: "L'école et ses élèves", cls: 'w2 h2' },
  { src: '/assets/img/photo-2.jpg', caption: "Jardin d'enfants",      cls: '' },
  { src: '/assets/img/photo-3.jpg', caption: 'En classe',             cls: '' },
  { src: '/assets/img/photo-4.jpg', caption: 'Activités sportives',   cls: 'h2' },
  { src: '/assets/img/photo-5.jpg', caption: 'Moments de partage',    cls: 'w2' },
  { src: '/assets/img/photo-6.jpg', caption: 'Cérémonies',            cls: '' },
  { src: '/assets/img/photo-7.jpg', caption: 'Nos réussites',         cls: '' }
]

export const news = [
  { tag: 'Rentrée',   color: '#ef6f5e', title: 'Inscriptions ouvertes pour la prochaine rentrée', text: "Les pré-inscriptions sont ouvertes pour tous les cycles, du jardin d'enfants au lycée." },
  { tag: 'Événement', color: '#1b998b', title: 'Journées portes ouvertes', text: "Venez découvrir l'école, rencontrer l'équipe pédagogique et visiter nos classes." },
  { tag: 'Réussite',  color: '#fca311', title: 'Félicitations à nos élèves', text: 'Retour sur les résultats et les belles réussites de nos élèves aux examens.' }
]

export const anthem = {
  title: 'Hymne Halissa',
  author: 'Fati Mariko',
  stanzas: [
    [
      'Rana na takos wala ta bakoye alif doubou biyou da tara',
      'An kala complexe Halissa mai yi yaki da jahilichi',
      'Mai yin yaki da falautchi mai jan hankali malassan mu',
      'Bissa Ichoutoulouka na zamani da chayé chaye da saou-ran su'
    ],
    [
      'Complexe Halissa makaranta tché mai koya illimi',
      'Mun san tun fil azal ilimi an tché a tahi bidata',
      'Dan illimi arziki ne daba kamatey kowa ya sani',
      'Komi na dounia ga say da illimi za a yin shi'
    ],
    [
      'Moushennin mu Halissa amana yara nag are ku',
      'Alkawall kun ka dauka na tarbiyar da yaran halissa',
      'Kishin kassa zamou koya',
      'Mu koyi addinin mu',
      'Diya mata sou sa hijabi',
      'Tashin hankall ba mu sonshi',
      'Mun zama ouwa day ouba gouda ne',
      'Mutsaya tare mu je ga aiki do tarbiya da korkartawa'
    ],
    [
      'Gaissouwar yan Halissa zouwa ga fondatrice.',
      'ina mu Hadjia Mariama mme Amadou Zaruma Iche',
      'In matemelle suna godiya',
      'In primaire na gaida ki',
      'In college na kirari.',
      'In lycée na ta guda'
    ],
    [
      'Mu in complexe Halissa mun daw niya nayi karatu',
      'Alkawall na maida niya wajen karalu mun ka dawka',
      'Ilimi la kowalche fanni za mu nema hal mu samu (bis)'
    ]
  ]
}