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
      'Role Based Authentication',
    ],
    tech: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
    githubUrl: 'https://github.com/aathi1412/authentication-system',
    featured: true,
  },
  {
    title: 'Ecommerce Backend API',
    description:
      'A REST API backend for an ecommerce platform — product and category management, order processing, versioned database migrations, and a containerized setup ready to deploy.',
    features: [
      'REST APIs',
      'Product Management',
      'Category Management',
      'Order APIs',
      'Docker',
      'Flyway',
    ],
    tech: ['Spring Boot', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/aathi1412/ecommerce-API',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description:
      'A React dashboard that pulls live weather data from the OpenWeather API and presents it in a clean, glanceable interface.',
    features: [],
    tech: ['React', 'OpenWeather API'],
    githubUrl: 'https://github.com/aathi1412/Weather-Dashboard',
    featured: false,
  },
  {
    title: 'Todo Application',
    description:
      'A todo app built with React, using local storage to persist tasks entirely client-side — no backend required.',
    features: [],
    tech: ['React', 'Local Storage'],
    githubUrl: 'https://github.com/aathi1412/Todo-List-Project',
    featured: false,
  },
];
