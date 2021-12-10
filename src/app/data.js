import { getIntl } from "../locales";


export function getData(name) {
  const intl = getIntl();
  const str = (id, values) => intl.formatMessage({ id }, values);

  const data = {
    
  }
  return eval(name);
}
