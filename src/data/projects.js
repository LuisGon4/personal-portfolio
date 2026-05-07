const projects = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and why it exists. Replace with your own project.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/project-one',
    liveUrl: 'https://project-one.example.com',
  },
  {
    title: 'Hoops-Depot',
    description: 'Search stat tool for the 24/25 NBA season. React front end connected to a Spring Boot backend. Deployed through Vercel and Render respectively.',
    tags: ['SpringBoot', 'Java', 'React', 'JavaScript', 'Postgresql', 'Docker'],
    githubUrl: 'https://github.com/username/project-two',
    liveUrl: 'https://hoops-zone-frontend.vercel.app',
    // liveUrl intentionally omitted — tests conditional rendering in ProjectCard
  },
  {
    title: 'Green Sense',
    description: 'Dashboard for temperature and humidity data from Arduino sensor. Created for SF Hacks 26.',
    tags: ['Javascript', 'React', 'Python', 'Flask', 'Arduino', 'Ngrok'],
    githubUrl: 'https://github.com/Josue-Crz/SFHacks-2026-Project',
    liveUrl: 'https://sf-hacks-dashboard.vercel.app/',
  },
];

export default projects;
