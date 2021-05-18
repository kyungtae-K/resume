import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '효율성을 중시하는 개발자 입니다. Java 를 사용하여 백엔드 API 서버 개발을 주로 해왔으며, 프로젝트 진행 시 어떻게 하면 좀 더 효율적이고 실용적으로 일할 수 있을까를 언제나 생각 합니다.',
    '현재까지 첫 직장을 계속 다니고 있으며, 현 직장에서 여러가지 업무 경험을 통해 한 분야에 지식이 깊지는 않지만, 변화에 금방 적응 할 수 있는 유연성을 가지고 있습니다.',
    '커뮤니케이션에 적극적이며, 기본적으로 부정적인 면을 먼저 생각하고 지적하는 타입입니다. 공격적인 부정적인 면을 보는 것이 아닌 안전성을 고려한 부정적인 면을 봅니다.',
  ],
  sign: 'Kim Kyung-Tae',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
