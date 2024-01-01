const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonthName = (n: number): string => {
  return monthNames[n - 1];
};

export const formatSeason = (start: number, end: number): string => {
  if (start === end) {
    return getMonthName(start);
  }

  return `${getMonthName(start)} through ${getMonthName(end)}`;
};

export const formatUses = (uses: string[]): string => {
  return uses.join(", ");
};

export const getCurrentMonth = (): number => {
  const date = new Date();
  return date.getMonth() + 1;
};
