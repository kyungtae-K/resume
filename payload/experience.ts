import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '(주) 디지캡',
      position: '과장',
      startedAt: '2014-05',
      descriptions: [
        'DRM 전문(Widevine, Playready)',
        'Backend API developer',
        'Frontend developer(B2B 용)',
        '작은 시스템 구성 기획 및 DevOps',
      ],
      skillKeywords: ['Java', 'Mysql(MariaDB)', 'HTML5', 'React.js', 'Git', 'Jenkins'],
    },
  ],
};

export default experience;
