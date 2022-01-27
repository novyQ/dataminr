import { format, isValid } from "date-fns";
export const formatDate = (dateInput: string) => {
  const date = new Date(dateInput);
  if (isValid(date)) return format(date, "dd MMM, yyyy");
  return null;
};
