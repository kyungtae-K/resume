import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/ktkim.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김경태',
    small: '(Nick.히키)',
  },
  contact: [
    {
      title: 'nibabooji@gmail.com',
      link: 'nibabooji@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '01094728350',
      icon: faPhone,
      // badge: true,
    },
    {
      title: '@nibabooji',
      icon: faTelegram,
    },
  ],
  notice: {
    title: '전화 보다는 이메일 또는 SNS 를 통한 연락 바랍니다.',
    icon: faBell,
  },
};

export default profile;
