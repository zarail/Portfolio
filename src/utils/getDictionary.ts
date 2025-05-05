import en from '../messages/en.json';
import de from '../messages/de.json';

const dictionaries = {
  en,
  de,
};

export function getDictionary(locale: 'en' | 'de') {
  return dictionaries[locale] || dictionaries.en;
}
