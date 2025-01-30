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
export interface Form {}
