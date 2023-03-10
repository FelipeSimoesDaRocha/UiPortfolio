import { GetServerSideProps } from 'next'
import { Button, Flex, Heading, Icon, IconButton, Text } from '@chakra-ui/react'
import { getSession, signIn } from 'next-auth/react'
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'

export default function Login() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        w="100%"
        maxWidth="360"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        alignItems="center"
      >
        <Heading display='flex' size='lg' mb='8'>Sign in <Text color='pink.500'>.</Text></Heading>
        <Button
          onClick={() => signIn('github')}
          colorScheme='blackAlpha'
          py='6'
          as="a"
          cursor='pointer'
        >
          <IconButton
            icon={<Icon as={RiGithubFill} />}
            fontSize="24"
            variant="unstyled"
            aria-label='sign github'
          />
          <Text>
            Continue with Github
          </Text>
        </Button>
        <Button
          onClick={() => signIn('google')}
          colorScheme='blackAlpha'
          py='6'
          mt='4'
          as="a"
          cursor='pointer'
        >
          <IconButton
            icon={<Icon as={RiGoogleFill} />}
            fontSize="24"
            variant="unstyled"
            aria-label='sign github'
          />
          <Text>
            Continue with Google
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    };
  }

  return {
    props: { session }
  };
}