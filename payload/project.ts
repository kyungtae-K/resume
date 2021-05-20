import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'SKP Hoppin 서비스 유지보수',
      startedAt: '2014-08',
      endedAt: '2015-11',
      where: '(주)디지캡',
      skillKeywords: ['C#', 'ASP.net', 'MSSQL'],
      descriptions: [
        { content: '관리자 페이지 유지보수.' },
        {
          content: 'Playready DRM license server 유지보수',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Chromecast 전송 기능 추가.' }],
        },
      ],
    },
    {
      title: 'DRM 솔루션 개발',
      startedAt: '2015-12',
      endedAt: '2018-12',
      where: '(주)디지캡',
      skillKeywords: ['python(flask)', 'java(spring)', 'bootstrap', 'mariaDB'],
      descriptions: [
        { content: '시스템 설계 참여.' },
        { content: '서버 환경 구성.' },
        { content: 'Widevine license server 개발.' },
        { content: 'Playready license server 개발.' },
        { content: '관리자 페이지 개발.' },
      ],
    },
    {
      title: '국내 UHD 방송 시스템 CP/DP 관리 플랫폼 구축',
      startedAt: '2015-09',
      endedAt: '2016-12',
      where: '(주)디지캡',
      skillKeywords: ['java(spring)', 'bootstrap', 'Oracle'],
      descriptions: [
        { content: '서버 환경 구성.' },
        { content: 'CP/DP 이미지 파일 관리 페이지 개발.' },
        { content: 'DP 이미지 배포 모듈 개발.' },
      ],
    },
    {
      title: '윤선생 App DRM 관리 페이지',
      startedAt: '2016-01',
      endedAt: '2016-03',
      where: '(주)디지캡',
      skillKeywords: ['java(spring)', 'bootstrap', 'mariaDB'],
      descriptions: [{ content: '서버 환경 구성.' }, { content: 'DRM 관리 페이지 개발.' }],
    },
    {
      title: '해외 W 업체 Widevine DRM 서비스',
      startedAt: '2017-11',
      endedAt: '2018-02',
      where: '(주)디지캡',
      skillKeywords: ['java(spring)', 'bootstrap', 'mariaDB'],
      descriptions: [
        { content: '시스템 설계 참여.' },
        { content: '서버 환경 구성.' },
        { content: 'Widevine license server 개발.' },
        { content: '관리자 페이지 개발.' },
      ],
    },
    {
      title: 'SKB ECDN 프로젝트',
      startedAt: '2017-09',
      endedAt: '2020-01',
      where: '(주)디지캡',
      skillKeywords: [
        'java(spring)',
        'mariaDB',
        'jenkins',
        'Atlassian(jira, confluence, bitbucket)',
      ],
      descriptions: [
        {
          content: '2017~2018 1차',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'DRM 시스템 설계 참여.' },
            { content: 'DRM License server 개발.' },
          ],
        },
        {
          content: '2019~2020 고도화',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'DRM 시스템 수정 설계 참여.' },
            { content: 'DRM License server 담당 수정 개발.' },
            { content: 'DRM DB 이중화 담당.' },
          ],
        },
      ],
    },
    {
      title: '화상회의 플랫폼 개발',
      startedAt: '2020-08',
      endedAt: '2021-03',
      where: '(주)디지캡',
      skillKeywords: ['java(spring)', 'react.js', 'mariaDB', 'redis', 'jenkins'],
      descriptions: [
        { content: '시스템 설계 참여.' },
        { content: '선생님 / 학생 프론트 페이지 개발' },
        { content: '백엔드 API 서버 개발' },
      ],
    },
    {
      title: '해외 ATSC DRM 서버 개발 진행 중',
      startedAt: '2020-12',
      endedAt: '2021-05',
      where: '(주)디지캡',
      skillKeywords: ['java(spring)', 'mariaDB'],
      descriptions: [{ content: 'DRM proxy 서버 개발 중' }],
    },
  ],
};

export default project;
