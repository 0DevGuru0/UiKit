export const mockFilterItems = (
  data: Record<string, any>[],
  filterValue: Record<string, any>,
): Record<string, any>[] => {
  const { searchPhrase, issn, publisher, language, sortBy } = filterValue;

  return data
    .filter((v) => {
      if (searchPhrase) {
        return v.title.toLowerCase().includes(searchPhrase.toLowerCase());
      } else {
        return true;
      }
    })
    .filter((v) => {
      if (publisher) {
        return publisher.includes(v.publisher.title);
      } else {
        return true;
      }
    })
    .filter((v) => {
      if (language) {
        for (const lang of language) {
          if (!v.languages?.includes(lang)) return false;
        }
        return true;
      } else {
        return true;
      }
    })
    .filter((v) => {
      if (issn) {
        for (const item of issn) {
          if (v.printISSN?.includes(item) || v.onlineISSN?.includes(item)) return true;
        }
        return false;
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      if (sortBy === 'Title Z to A') {
        if (a.title > b.title) {
          return -1;
        }
        if (b.title > a.title) {
          return 1;
        }
        return 0;
      }
      if (b.title > a.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
};
