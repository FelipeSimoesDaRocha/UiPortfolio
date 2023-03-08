import { Button, Flex, Heading, HStack, Input, Text } from "@chakra-ui/react";
import { getSession } from "next-auth/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

export default function Database() {
  const router = useRouter()

  const [idDatabase, setIdDatabase] = useState('')

  function handleCreateDatabaseNotion() {
    router.push('/app/dashboard')
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        w="100%"
        maxWidth="450"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        alignItems="center"
      >
        <Heading size='lg' mb='8'>Cadastrar Database Notion</Heading>
        <HStack>
          <Input
            name='idDatabase'
            placeholder='ID database'
            variant="filled"
            bg='blackAlpha.300'
            _hover={{
              background: 'blackAlpha.200',
            }}
            h='14'
            value={idDatabase}
            onChange={(e) => setIdDatabase(e.target.value)}
          />
          <Button
            colorScheme='pink'
            py='6'
            as="a"
            cursor='pointer'
            mr='0'
            ml='auto'
            onClick={() => handleCreateDatabaseNotion()}
          >
            <Text>
              Continuar
            </Text>
          </Button>
        </HStack>
      </Flex>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session?.idDatabase) {
    return {
      redirect: {
        destination: '/app/dashboard',
        permanent: false,
      }
    }
  }

  if (!session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {

    }
  }
}