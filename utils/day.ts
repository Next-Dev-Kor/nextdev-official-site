import dayjs from "dayjs";

export function formatPeriod(start: string | Date, end: string | Date) {
  return `${dayjs(start).format("YYYY.MM.DD")} ~ ${dayjs(end).format(
    "YYYY.MM.DD"
  )}`;
}
