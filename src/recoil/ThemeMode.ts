import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const themeState = atom<boolean>({
  key: 'themeState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export default themeState;
