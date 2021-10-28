import {
  Avatar,
  Badge,
  Box,
  Button,
  Heading as ChakraHeading,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react';

interface SquadMemberProps {
  id?: string;
  name: string;
  jobTitle: string;
  bgGradient: string;
  hobbies: string[];
  avatarImg: string;
  borderColor: string;
  btnColor: string;
  btnLabel: string;
  btnUrl?: string;
}

export function SquadMember({
  name,
  jobTitle,
  bgGradient,
  borderColor,
  btnLabel,
  avatarImg,
  hobbies,
  btnColor,
  btnUrl,
}: SquadMemberProps) {
  return (
    <>
      <Box
        maxW={'320px'}
        w={'full'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        borderWidth={1}
        borderColor={borderColor}
        bgGradient={[
          'linear(to-tl, shape, #121214)',
          'linear(to-bl, shape, #121214)',
        ]}
      >
        <Avatar
          size={'xl'}
          src={`./assets/images/${avatarImg}`}
          alt={name}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <ChakraHeading color='gray' fontSize={'2xl'}>
          {name}
        </ChakraHeading>
        <Text fontWeight={600} color={btnColor} mb={4}>
          {jobTitle}
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg='transparent'
            color='support'
            fontWeight={'400'}
          >
            {hobbies[0]}
          </Badge>
          <Badge px={2} py={1} color='support' fontWeight={'400'}>
            {hobbies[1]}
          </Badge>
          <Badge px={2} py={1} color='support' fontWeight={'400'}>
            {hobbies[2]}
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <ChakraLink
            href='https://wa.me/message/HMRTNVF66NLRO1'
            target='_blank'
            rel='noreferrer'
            flex={1}
            style={{ textDecoration: 'none' }}
          >
            <Button
              w='100%'
              flex={1}
              fontSize={'sm'}
              borderRadius={8}
              bg={'shapeHover'}
              color={btnColor}
              _hover={{
                bg: 'shape',
              }}
              _focus={{
                bg: 'shape',
              }}
            >
              {btnLabel}
            </Button>
          </ChakraLink>
        </Stack>
      </Box>
    </>
  );
}
