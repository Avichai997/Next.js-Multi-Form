import { atom } from 'jotai';

export type StepType = number;

export interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

export interface PlanInfo {
  plan: 'arcade' | 'advanced' | 'pro';
  billing: 'monthly' | 'yearly';
}

export interface AddOns {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

// TODO: change to 1
export const stepAtom = atom<StepType>(3);

export const userInfoAtom = atom<UserInfo>({
  name: '',
  email: '',
  phone: '',
});

export const planAtom = atom<PlanInfo>({
  plan: 'arcade',
  billing: 'monthly',
});

export const addOnsAtom = atom<AddOns>({
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
});
