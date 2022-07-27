const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Carter Nadain',
  role: 'Full Stack Engineer',
  description:
    'Web developer with a background in construction and retail. Recognized as a problem solver, resourceful, and adaptable. Viable composed and spoken correspondence with clients and colleagues. Graduate of Full-Stack Development Bootcamp with University of Arizona.',
  resume: 'https://docs.google.com/document/d/1oNjixFHy7YkJmyEIgYh3X6UzTYFRrwqo/edit',
  social: {
    linkedin: 'https://www.linkedin.com/in/carter-nadain-043259229/',
    github: 'https://github.com/carternadain',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Recipe Hub',
    description:"encapsulates code created so you can get latest recipes for food and cocktails.",

    stack: ['JS', 'CSS', 'HTML'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Social Network API"',
    description:
      '"encapsulates code created to use a NoSql database and get,post,delete in insomonia.',
    stack: ['NoSQL', 'Databases', 'MongoDB'],
    sourceCode: 'https://github.com/carternadain/Social-Network-API',
    livePreview: 'https://github.com',
  },
  {
    name: 'Commit To Eat',
    description:
      'A website featuring various eating challenges around you, where you can enter a competition, comment on your favourite muncher or just leave a suggestion about a next food event',
    stack: ['React', 'Nosql', 'Javscript,'],
    sourceCode: 'https://github.com/sp381/commit-to-eat',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Express.js',
  'React',
  'Bootstrap',
  'Handlebars',
  'Material UI',
  'Git',
  'OOP',
  'Node.js',
  'MERN',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Cnadain@gmail.com',
}

export { header, about, projects, skills, contact }
