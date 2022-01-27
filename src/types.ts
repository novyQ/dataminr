export type FlagType = {
  id: number;
  name: string;
  isOn: boolean;
  subflags: [];
  inputNotes: { [key: string]: any };
};
