import { Box, Container, Flex, Heading, Image, Link, Stack, StackDivider, Text } from "@chakra-ui/react"
import HeroImage from "../images/flat-svg-designs-featured-image-macbook_1.png"
export const Card = () => {
  return (
    <>
      <Text>カードコンポーネント</Text>
      <Container>
        <Stack spacing={5}>

          <Box>
            <Text>１つ目</Text>

            <Box border={"solid"} borderColor={"gray.200"} mb={"2px"}>
              <h2>
                <Link
                  to={`/`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  タイトル
                </Link>
              </h2>
              <p>2022/01/22</p>
            </Box>
          </Box>

          <Box>
            <Text>２つ目</Text>

            <Link to={`/`}>
              <Flex p={"2"} w={"full"} maxW={"500px"}>
                <Box
                  bg="white"
                  boxShadow={"md"}
                  rounded={"xl"}
                  p={"4"}
                  overflow={"hidden"}
                >
                  <Box h={"250px"} mt={"-6"} pos={"relative"}>
                    <Image src={HeroImage} />
                  </Box>
                  <Stack>
                    <Text
                      color={"blue.500"}
                      fontWeight={"800"}
                      fontSize={"xs"}
                      letterSpacing={"wide"}
                    >
                      BLOG
                    </Text>
                    <Heading color={"gray.700"} fontSize={"lg"} fontFamily={"body"}>
                      タイトル
                    </Heading>
                    <Text color={"gray.500"}>2022/01/22</Text>
                  </Stack>
                </Box>
              </Flex>
            </Link>
          </Box>

        </Stack>
      </Container>
    </>
  )
}