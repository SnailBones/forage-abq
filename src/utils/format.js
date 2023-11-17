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

export const getMonthName = (n) => {
  return monthNames[n - 1];
};

export const formatSeason = (start, end) => {
  if (start === end) {
    return getMonthName(start);
  }

  return `${getMonthName(start)} through ${getMonthName(end)}`;
};

export const formatUses = (uses) => {
  return uses.join(", ");
};

export const getCurrentMonth = () => {
  const date = new Date();
  return date.getMonth() + 1;
};
