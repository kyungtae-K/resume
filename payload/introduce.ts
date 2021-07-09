import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '약 7년간 웹 서비스 기획/설계/개발/배포 업무를 해왔습니다.',
    '주 개발 스킬인 Java (spring) 를 사용하여 백엔드 API 서버 개발을 주로 해 왔습니다.',
    '프로젝트 진행 시 어떻게 하면 좀 더 효율적으로 일할 수 있을까, 지금 하는 부분이 실용성이 있을까 를 많이 고민 합니다.',
    '현재까지 첫 직장을 계속 다니고 있으며, 현 직장에서 여러가지 업무 경험을 통해 한 분야에 지식이 깊지는 않지만, 그만큼 변화에 금방 적응 할 수 있는 유연성을 가지고 있다고 생각 합니다.',
    '업무적 커뮤니케이션에 매우 적극 적인 편입니다.',
  ],
  sign: 'Kim Kyung-Tae',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
