module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://mehdi-boubnan.netlify.app/`,
    // Your Name
    name: 'Mehdi Boubnan',
    // Main Site Title
    title: `Mehdi Boubnan | Data Scientist`,
    // Description that goes under your name in main bio
    description: `Senior Data Scientist.`,
    // Optional: Twitter account handle
    author: `@mehdiboubnan`,
    // Optional: Github account URL
    github: `https://github.com/boubnanm`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/mehdiboubnan/`,
    // Content of the About Me section
    about: `Hi, my name is Mehdi Boubnan, Senior Data Scientist @ Mindee.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Reinforcement Learning applied to DOOM',
        description:
          'Play DOOM with Reinforcement Learning',
        link: 'https://github.com/boubnanm/Deep-Reinforcement-Learning-applied-to-DOOM',
      },
//      {
//        name: 'ChromeExtensionKit',
//        description:
//          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
//        link: 'https://chromeextensionkit.com/?ref=devfolio',
//      },
//      {
//        name: 'Another Cool Project',
//        description:
//          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
//        link: 'https://github.com/RyanFitzgerald/devfolio',
//      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Mindee',
        description: 'R&D Data Scientist, March 2020 - Present',
        link: 'https://mindee.com/',
      },
      {
        name: 'Fortia Financial Solutions',
        description: 'R&D Data Scientist, May 2019 - November 2019',
        link: 'https://fortia.fr/',
      },
      {
        name: 'Société Générale',
        description: 'Data Scientist, March 2018 - August 2020',
        link: 'https://www.societegenerale.com/en',
      },
      {
        name: 'Total France',
        description: 'Data Scientist, September 2017 - February 2018',
        link: 'https://totalenergies.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programing Languages',
        description: 'Python, R, Bash, SQL',
      },
      {
        name: 'Libraries & Frameworks',
        description: 'Tensorflow, Pytorch, Scikit-learn, NumPy, OpenCV, Plotly, Pandas, Pytest',
      },
      {
        name: 'Continuous Integration',
        description:
          'Jenkins, GitHub Actions',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
