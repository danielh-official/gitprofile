// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'danielh-official', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Some Open Source Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual',
    //   automatic: {
    //     sortBy: 'updated', // Sort projects by 'stars' or 'updated'
    //     limit: 5, // How many projects to display.
    //     exclude: {
    //       forks: true, // Forked projects will not be displayed if set to true.
    //       projects: [
    //         'danielh-official/ynabapidocs',
    //         'danielh-official/reddit-quick-block'
    //       ], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
    //     },
    //   },
      manual: {
        // Properties for manually specifying projects
        projects: [
            // 'danielh-official/getresi-software-engineer-filamentphp-demo',
            // 'danielh-official/laravel-api-server-demo',
            // 'danielh-official/card-conduit-demo',
            'danielh-official/billsforynab', 
            'danielh-official/streaksforynab',
            'danielh-official/save-to-play',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
        display: true,
    },
  },
  seo: { title: 'Portfolio of Daniel Haven', description: '', imageURL: '' },
  social: {
    linkedin: 'danielh0',
    x: 'danielhaven0',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '9959347/daniel-haven', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    // fileUrl:
    //   'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Vue.js',
    'Svelte.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'PHPUnit',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Solar Reviews',
      position: 'Full Stack Developer',
      from: 'February 2023',
      to: 'June 2025',
      companyLink: 'https://www.solarreviews.com/',
    },
    {
      company: 'New Jersey Realtors',
      position: 'Technology Coordinator',
      from: 'March 2021',
      to: 'November 2022',
      companyLink: 'https://www.njrealtor.com/',
    },
    {
      company: 'IT Specialist',
      position: 'ServicePlus Home Warranty',
      from: 'May 2019',
      to: 'March 2021',
      companyLink: 'https://www.serviceplus.com/',
    }
  ],
  certifications: [],
  educations: [
    {
      institution: 'Rutgers Business School',
      degree: 'Bachelor of Science in Management Information Systems',
      from: '2013',
      to: '2018',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {},
  googleAnalytics: {},
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
