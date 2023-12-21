import moment from 'moment';
import 'moment-jalaali';

export function toPersianDate(gregorianDate: Date): string {
  const jalaliDate = moment(gregorianDate).format('jYYYY/jMM/jDD'); // Convert to Persian (Jalali)
  return jalaliDate;
}