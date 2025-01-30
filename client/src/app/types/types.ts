export interface InputField {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  defaultValue: string;
  required: boolean;
  options: string[];
}
export interface FormSchema {
  fields: InputField[];
}
export interface Input {}
export interface AppUser {
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string | null;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string | null;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  formulaires: Formulaire[];
  submits: [];
  responses: [];
}

export interface Formulaire {
  id: string;
  appUserId: string;
  appUser: AppUser;
  inputs: Input[];
  submits: [];
}
