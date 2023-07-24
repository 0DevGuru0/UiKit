import { ItemType } from './itemType';

export const convertToTableItems = (data: any[]): ItemType[] => {
  return data.map((item) => {
    return {
      title: {
        id: item._id,
        title: item.title,
        journalType: 'Open Access',
      },
      printISSN: {
        text: item.printISSN || '',
      },
      onlineISSN: {
        text: item.onlineISSN || '',
      },
      subjects: {
        text: item.subjects.length > 0 ? item.subjects.join(', ') : '',
      },
      price: {
        text: item.currency,
      },
      publisher: {
        text: item.publisher.title,
      },
      license: {
        text: item.licenseType?.join(', ') || 'Other',
      },
      languages: {
        text: item.languages?.join(', ') || '',
      },
      jcrQuartile: {
        text: item.jcrQuartile || '',
      },
      sjrQuartile: {
        text: item.sjrQuartile || '',
      },
    };
  });
};
