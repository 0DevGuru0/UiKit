export const getContentWIthVariables = (
  content: string,
  targetVariables: string[],
  providedVariables: Record<string, string> = {},
): string => {
  let modifiedContent = content;

  for (const variableKey of targetVariables) {
    const searchValue = new RegExp(`{{${variableKey}}}`, 'g');

    modifiedContent = modifiedContent.replace(
      searchValue,
      providedVariables[variableKey].toString(),
    );
  }

  return modifiedContent;
};
