import { Image } from '@chakra-ui/react';

type CustomerItemProps = {
  id?: string;
  title: string;
};

export function CustomerItem({ title }: CustomerItemProps) {
  return (
    <Image
      w={['125px', '125px', '125px', '150px']}
      src={`../assets/svg/${title}.svg`}
      alt={title}
    />
  );
}
