import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'C#',
      level: 2,
    },
    {
      title: 'PHP',
      level: 1,
    },
    {
      title: 'Node.js',
      level: 1,
    },
    {
      title: 'Python',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL(MariaDB)',
      level: 3,
    },
    {
      title: 'Oracle',
      level: 2,
    },
    {
      title: 'MS-SQL',
      level: 1,
    },
    {
      title: 'Redis',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Atlassian(bitbucket, jira, confluence)',
      level: 2,
    },
    {
      title: 'jenkins',
      level: 2,
    },
    {
      title: 'Linux(Ubuntu, CentOS)',
      level: 1,
    },
    {
      title: 'Git',
      level: 1,
    },
    {
      title: 'docker',
      level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
