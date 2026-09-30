// All site copy lives here — edit this file to update the website.

export const lab = {
  name: 'Gao-Howard Lab',
  pi: 'Cathy Gao-Howard, MD',
  role: 'Pulmonary & Critical Care Physician-Scientist',
  institution: 'Northwestern University',
  // Set to an address to show a "Get in touch" button in the Community section.
  email: '',
  tagline: 'Learning from the ICU, to care better for the next patient.',
  summary:
    'We study intensive care unit electronic health record data with machine learning — turning the stream of vitals, labs, and notes generated at the bedside into insight for critically ill patients.',
}

export const about = [
  'The Gao-Howard Lab at Northwestern studies ICU electronic health record (EHR) data and machine learning to generate clinically meaningful insights for critically ill patients.',
  'For publications, Cathy publishes under the name Catherine A. Gao, MD, MS (ORCID: https://orcid.org/0000-0001-5576-3943).',
  'Our group brings together clinicians, data scientists, trainees, and collaborators across institutions to connect bedside questions with rigorous computational methods.',
  'Note: this is the Gao-Howard Lab (Cathy Gao), not the other Gao lab at Northwestern led by Ruli Gao: https://labs.feinberg.northwestern.edu/gao/index.html',
]

export const team = [
  {
    name: 'Saki Amagai',
    role: 'PhD Candidate, HSIP/HBMI',
    years: '2023-present',
    mentorLine: 'Co-mentored with Yuan Luo',
    blurb:
      'Saki Amagai was awarded an American Heart Association (AHA) Predoctoral Fellowship. Her recent papers include The Epidemiology of ICU Readmissions Across Ten Health Systems (Critical Care Explorations, 2025), and PAUSE-Agents: A Clinician-in-the-Loop Multi-Agent AI Pipeline for ICU-to-Ward Handoff Briefs (medRxiv, 2026).',
    photoSrc: './cathy-saki-poster.png',
    photoAlt: 'Cathy Gao-Howard and Saki Amagai standing beside Saki\'s ICU research poster.',
  },
  {
    name: 'Wan-Ting Liao, MS',
    role: 'Research Data Analyst',
    years: '2024–present',
    blurb:
      'Wan-Ting helps manage the NU-CLIF database and supports ongoing CLIF Consortium collaborations across institutions.',
    photoSrc: './wan-ting-liao.png',
    photoAlt: 'Portrait of Wan-Ting Liao.',
    photoClass: 'team-member__photo--small',
    secondaryPhotoSrc: './wan-ting-group.png',
    secondaryPhotoAlt: 'Wan-Ting Liao with lab members at a group dinner.',
    secondaryPhotoClass: 'team-member__photo--group',
  },
  {
    name: 'Claudia Bennett-Caso, MD & Bhavana Ambil, MD',
    role: 'Medicine residents',
    years: '2025-present',
    blurb: 'Extubation to HFNC/NIV, proning documentation',
    photoSrc: './claudia-bhavana-team.png',
    photoAlt: 'Claudia Bennett-Caso and Bhavana Ambil with collaborators at a poster session.',
    photoClass: 'team-member__photo--group',
  },
]

export const onwards = [
  {
    name: 'Alec Peltekian',
    role: 'Grad student, EECS',
    mentorLine:
      'Co-mentored with Ankit Agrawal, PhD, in labs of Sasha Misharin, MD PhD, and Alok Choudhary, PhD',
    years: '2023-2026',
    blurb: '',
    photoSrc: './alec-peltekian.png',
    photoAlt: 'Alec Peltekian and collaborators standing in front of a research poster.',
    photoClass: 'team-member__photo--group',
  },
]

export const research = [
  {
    icon: 'pulse',
    title: 'ICU EHR data',
    body: 'The ICU is one of the most data-rich environments in medicine. We work with the high-frequency, high-dimensional records of critical illness — vitals, labs, ventilator settings, medications, and clinical notes.',
  },
  {
    icon: 'network',
    title: 'Machine learning',
    body: 'We apply and develop machine learning methods to find structure in messy clinical data, with an eye toward approaches that are rigorous, interpretable, and clinically meaningful.',
  },
  {
    icon: 'people',
    title: 'Team science',
    body: 'Good critical care research is a team sport. We work alongside clinicians, data scientists, and bench researchers across Northwestern and North America to connect bedside questions with computational answers.',
  },
]

export const journey = [
  { place: 'Yale', label: 'Residency' },
  { place: 'Northwestern', label: 'PCCM Fellowship', note: 'Founded the fellowship blog' },
  { place: 'Northwestern', label: 'Physician-Scientist', note: 'ICU EHR data + ML', current: true },
]

export const links = [
  {
    title: 'CLIF Consortium',
    subtitle: 'Critical care data collaboration',
    body: 'Collaborative ICU data resource for research and innovation in critical care medicine.',
    href: 'https://clif-icu.com',
    host: 'clif-icu.com',
    imageSrc: './clif-consortium-group.png',
    imageAlt: 'CLIF Consortium collaborators presenting at a conference poster.',
  },
  {
    title: 'SCRIPT',
    subtitle: 'Wunderink lab',
    body: 'Successful Clinical Response in Pneumonia Therapy Systems Biology Center.',
    href: 'https://script.northwestern.edu/',
    host: 'script.northwestern.edu',
  },
  {
    title: 'Budinger / Misharin lab',
    subtitle: 'Feinberg School of Medicine',
    body: 'Lung biology, aging, and immunology at Northwestern.',
    href: 'https://labs.feinberg.northwestern.edu/budinger/index.html',
    host: 'labs.feinberg.northwestern.edu',
    imageSrc: './budinger-misharin-group.png',
    imageAlt: 'Group photo associated with the Budinger and Misharin labs.',
  },

]

export const scholar = {
  profileUrl:
    'https://scholar.google.com/citations?hl=en&user=IwClOEIAAAAJ&view_op=list_works&sortby=pubdate',
}

export const recentPapers = [
  {
    title: 'PAUSE-Agents: A Clinician-in-the-Loop Multi-Agent AI Pipeline for ICU-to-Ward Handoff Briefs',
    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=IwClOEIAAAAJ&sortby=pubdate&citation_for_view=IwClOEIAAAAJ:WqliGbK-hY8C',
  },
  {
    title:
      'CarpeDiem, a per-day clinical parameters and pneumonia adjudication dataset for critically ill patients with suspected pneumonia',
    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=IwClOEIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=IwClOEIAAAAJ:kRWSkSYxWN8C',
  },
  {
    title: 'Comparing scientific abstracts generated by ChatGPT to real abstracts with detectors and blinded human reviewers',
    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=IwClOEIAAAAJ&citation_for_view=IwClOEIAAAAJ:isC4tDSrTZIC',
  },
  {
    title:
      'Development of a pilot machine learning model to predict successful short-term treatment success in critically ill patients with community-acquired pneumonia',
    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=IwClOEIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=IwClOEIAAAAJ:sSrBHYA8nusC',
  },
  {
    title: 'Developing and validating machine learning models to predict next-day extubation',
    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=IwClOEIAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=IwClOEIAAAAJ:vV6vV6tmYwMC',
  },
  {
    title: 'Machine learning links unresolving secondary pneumonia to mortality in patients with severe pneumonia, including COVID-19',
    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=IwClOEIAAAAJ&citation_for_view=IwClOEIAAAAJ:k_IJM867U9cC',
  },
]
