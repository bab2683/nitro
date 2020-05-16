import { ParsedDate } from '@models';

export function dateDataFromString(dateString: string): ParsedDate {
  const date: Date = new Date(Number(dateString));

  return {
    date,
    weekNumber: getNumberOfWeek(date),
  };
}

function getNumberOfWeek(date: Date): number {
  const firstDayOfYear: Date = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear: number =
    (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
