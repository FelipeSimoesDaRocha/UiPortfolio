import {  Button, Flex, Icon, Link } from "@chakra-ui/react";
import LinkNext from "next/link";

import { HiOutlineArrowLeft } from "react-icons/hi";
const Error = () => {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" align="center" flexDir="column">
      <Link as={LinkNext} href="/">
        <Button
          colorScheme="blackAlpha"
          mt="8"
          leftIcon={<Icon as={HiOutlineArrowLeft} />}
        >
          Voltar para a home
        </Button>
      </Link>
    </Flex>
  )
}

export default Error;