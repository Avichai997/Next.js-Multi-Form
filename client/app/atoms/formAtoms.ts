import { atom } from 'jotai';

export const stepAtom = atom(1);

export const userInfoAtom = atom({
  name: '',
  email: '',
  phone: '',
});

export const planAtom = atom({
  plan: 'arcade',
  billing: 'monthly',
});

export const addOnsAtom = atom({
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
});
