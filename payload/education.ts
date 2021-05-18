import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '호서 대학원',
      subTitle: '컴퓨터 공학 석사 졸업',
      startedAt: '2012-02',
      endedAt: '2014-02',
    },
    {
      title: '호서 대학교',
      subTitle: '컴퓨터 공학 학사 졸업',
      startedAt: '2006-02',
      endedAt: '2012-02',
    },
  ],
};

export default education;
