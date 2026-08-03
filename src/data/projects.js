// All GitHub links currently point at the profile root, since no per-repo
// URLs were provided. Swap `githubUrl` on each entry to the actual repo link
// once those exist.
export const projects = [
  {
    title: 'JWT Authentication System',
    description:
      'A full authentication service covering the parts most tutorials skip — email verification, password recovery, refresh tokens, account lockout, and role-based access, all secured with Spring Security and JWT.',
    features: [
      'Email Verification',
      'Forgot Password',
      'Reset Password',
      'JWT Authentication',
      'Refresh Token',
      'Account Lock',
      'Role-Based Authorization',
      'Database Versioning & Migrations',
    ],
    tech: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Flyway'],
    githubUrl: 'https://github.com/aathi1412/authentication-system',
    featured: true,
    status: 'In Progress',
    live: ''
  },
  {
    title: 'Ecommerce Backend API',
    description:
      'A REST API backend for an ecommerce platform — product and cart management, order processing, versioned database migrations, and a containerized setup ready to deploy.',
    features: [
      'REST APIs',
      'Product Management',
      'Cart Management',
      'Order APIs',
      'Docker',
      'Database Versioning & Migrations',
    ],
    tech: ['Spring Boot', 'MySQL', 'Docker', 'Flyway'],
    githubUrl: 'https://github.com/aathi1412/ecommerce-API',
    featured: true,
    status: 'In Progress',
    live: ''
  },
  {
    title: 'Weather Dashboard',
    description:
      'A React dashboard that pulls live weather data from the OpenWeather API and presents it in a clean, glanceable interface.',
    features: [],
    tech: ['React', 'OpenWeather API'],
    githubUrl: 'https://github.com/aathi1412/Weather-Dashboard',
    featured: false,
    status: 'active',
    live: 'https://zoro-weather-dashboard.netlify.app/'
  },
  {
    title: 'Todo Application',
    description:
      'A todo app built with React, using local storage to persist tasks entirely client-side — no backend required.',
    features: [],
    tech: ['React', 'Local Storage'],
    githubUrl: 'https://github.com/aathi1412/Todo-List-Project',
    featured: false,
    status: 'active',
    live: ''
  },
];
