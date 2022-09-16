const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://localhost:3000/cleanfolio#courses',
  title: 'Jay Warrier',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jay Warrier',
  role: 'High School Student',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Gene Expression Project',
    description:
      'Used correlation between gene expression and drug sensitivity in immuno-resistant cell lines to efficiently determine forms of treatment',
    stack: ['R', 'Complex Heatmap', 'Biology'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    abstract: 'https://docs.google.com/document/d/1-HXHYUxMWn8siQlrPr8PdFApIwXqdsoGM9BTtNwiajs/edit?usp=sharing'
  },
  {
    name: 'Spotify Recommender Project',
    description:
      'Created a program for budding artists that predicts their song\'s popularity based on its audio features, such as tempo, key, and loudness. ',
    stack: ['Pandas', 'Sklearn', 'Seaborn', 'Numpy'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    abstract: 'https://docs.google.com'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

const courses = [
  "Chem 25 (A)",
  "AP Calculus BC (5)",
  "AP Computer Science A (5)"
]




export { header, about, projects, skills, contact, courses}
