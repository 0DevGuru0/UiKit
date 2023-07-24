import cliTruncate from 'cli-truncate';

export interface ItemProps {
  title: string;
  ellipsis?: boolean;
  numberOfWordsToShow: number;
}

export const Item = (props: ItemProps) => {
  const { title, numberOfWordsToShow, ellipsis } = props;

  const item = ellipsis
    ? cliTruncate(title, numberOfWordsToShow, { position: 'middle' })
    : title;

  return <>{item}</>;
};
