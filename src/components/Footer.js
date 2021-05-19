import React, { useState } from "react"
import { Flex, Spacer, Button } from "@chakra-ui/react"
import { FaArrowUp } from "react-icons/fa"

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Flex
      as="footer"
      px="5rem"
      h="20rem"
      bg="dark"
      color="light"
      justify="center"
      align="center"
    >
      <p>© 2021 | Designed and developed by TT.</p>
      <Spacer />
      <Button
        onClick={scrollTop}
        fontSize="1.5rem"
        bg="transparent"
        borderRadius="none"
        _hover={{
          color: "pink",
        }}
      >
        <FaArrowUp />
      </Button>
    </Flex>
  )
}