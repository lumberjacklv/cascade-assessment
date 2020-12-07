import { DateTime } from 'luxon';

export const formatDate = (value, format = 'y-MM-dd') => DateTime.fromISO(value).toFormat(format);

export default {};
