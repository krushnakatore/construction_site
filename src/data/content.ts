export const metadata = {
  title: 'Herambh Constructions - Building stronger futures, one project at a time.',
  description: 'Premium construction services for residential, commercial, and industrial projects.',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Customize', href: '/customize' },
  { label: 'Contact', href: '/contact' },
];

export const homeContent = {
  hero: {
    label: 'Construction experts',
    title: 'Building stronger futures, one project at a time.',
    description: 'Delivering premium construction across residential, commercial, and industrial builds with precision, safety, and modern design.',
      image: '/images/home_01.jpg',
  },
  features: [
    {
      title: 'End-to-End Delivery',
      description: 'From planning and permits to build execution and handover, we manage every step.',
    },
    {
      title: 'Safety and Quality',
      description: 'Strict safety protocols and high-quality materials ensure reliable, long-lasting results.',
    },
    {
      title: 'Modern Design',
      description: 'Contemporary building solutions that look exceptional and perform efficiently.',
    },
  ],
  projects: [
    {
      title: 'Harborview Residences',
      category: 'Residential',
      description: 'Luxury apartment living with intelligent design and premium finishes.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Cornerstone Plaza',
      category: 'Commercial',
      description: 'A modern commercial complex built for visibility and tenant success.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Summit Works',
      category: 'Industrial',
      description: 'A high-performance industrial facility optimized for productivity.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    },
  ],
};

export const servicesContent = {
  hero: {
    heading: 'Complete construction services.',
    subheading: 'Planning, building, and delivery for every scale.',
  },
  services: [
    {
      title: 'Residential Construction',
      description: 'Custom homes, multi-family residences, and renovations built to the highest standard.',
      icon: 'home',
    },
    {
      title: 'Commercial Construction',
      description: 'Offices, retail spaces, and hospitality venues designed for modern business needs.',
      icon: 'building',
    },
    {
      title: 'Industrial Facilities',
      description: 'Efficient warehouses, factories, and logistics hubs engineered for performance.',
      icon: 'factory',
    },
  ],
  cta: {
    heading: 'Ready to discuss your project?',
    button: 'Contact us',
    href: '/contact',
  },
};

export const projectsContent = {
  hero: {
    heading: 'Our recent work.',
    body: 'A showcase of our most recent construction projects and delivery excellence.',
  },
  cta: {
    heading: 'Want your project featured here?',
    button: 'Request a proposal',
    href: '/contact',
  },
  items: [
    {
      title: 'Harborview Residences',
      category: 'Residential',
      description: 'Luxury apartment living with premium finishes and modern amenities.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Cornerstone Plaza',
      category: 'Commercial',
      description: 'A modern retail and office destination built to attract visitors and tenants.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Summit Works',
      category: 'Industrial',
      description: 'A high-performance industrial facility designed for efficiency and resilience.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    },
  ],
};

export const customizeContent = {
  hero: {
    heading: 'Customize your build.',
    description: 'Select your project type and get a tailored proposal for your next construction scope.',
  },
  options: [
    {
      title: 'Residential',
      description: 'Custom homes, apartments, and residential upgrades.',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      href: '/planner?type=residential',
    },
    {
      title: 'Commercial',
      description: 'Retail, office, and restaurant spaces designed for success.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      href: '/planner?type=commercial',
    },
    {
      title: 'Industrial',
      description: 'Warehouses, factories, and logistics centers engineered for scale.',
      image: 'https://images.unsplash.com/photo-1533106418984-503f6f947c1b?auto=format&fit=crop&w=1200&q=80',
      href: '/planner?type=industrial',
    },
  ],
};

export const contactContent = {
  hero: {
    heading: 'Let’s talk construction.',
    body: 'Send us your project details and our team will get back to you with a custom plan.',
  },
  details: [
    { label: 'Office', value: 'City Center Mall, Nashik, MH' },
    { label: 'Phone', value: '+919763165665' },
    { label: 'Email', value: 'bachhavpk156@gmail.com' },
  ],
  form: {
    name: 'Full name',
    email: 'Email address',
    subject: 'Project subject',
    message: 'Project message',
    button: 'Send request',
  },
};

export const plannerContent = {
  pageTitle: 'Build Planner',
  intro: 'Choose a project type and scale to get a tailored construction proposal.',
  projectTypes: ['Residential', 'Commercial', 'Industrial'],
  scales: ['Small', 'Medium', 'Large'],
  steps: ['Project type', 'Project scale', 'Submit plan'],
  summaryTemplate: 'You selected a {type} project at a {scale} scale. We will contact you with a proposal.',
  submitButton: 'Submit request',
  restartButton: 'Start over',
  backLink: 'Back to home',
};
