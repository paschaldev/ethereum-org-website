import { Box, Flex, Text } from "@chakra-ui/react"

import { ButtonLink } from "@/components/Buttons"

import Emoji from "../Emoji"

const localCommunitiesData = [
  {
    emojiString: "🇷🇴",
    lumaLink: "https://lu.ma/b7m1nyid",
    location: "Bucharest, Romania",
    eventName: "Ethereum Translatathon Bucharest 🌐🐬",
  },
  {
    emojiString: "🇪🇹",
    lumaLink: "https://lu.ma/zi092c8v",
    location: "Addis Ababa, Ethiopia",
    eventName: "Eth Translatathon",
  },
  {
    emojiString: "🇷🇸",
    lumaLink: "https://lu.ma/ehd86ohx",
    location: "Belgrade, Serbia",
    eventName: "Ethereum Translatathon — ETH Belgrade",
  },
  {
    emojiString: "🇹🇼",
    lumaLink: "https://lu.ma/2i9fi2zi",
    location: "Taipei, Taiwan",
    eventName: "2024 ethereum.org Translatathon Hub - Taiwan",
  },
  {
    emojiString: "🇿🇲",
    lumaLink: "https://lu.ma/4xyfdlz7",
    location: "Lusaka, Zambia",
    eventName: "Ethereum Translatathon - Hosted by ETHZambezi",
  },
  {
    emojiString: "🇳🇬",
    lumaLink: "https://lu.ma/w00aw06a",
    location: "Kaduna, Nigeria",
    eventName: "Ethereum Hausa Translatathon",
  },
  {
    emojiString: "🇳🇬",
    lumaLink: "https://lu.ma/1vj9u4rj",
    location: "Lagos, Nigeria",
    eventName: "Ethereum Yorùbá Translatathon",
  },
  {
    emojiString: "🇧🇷",
    lumaLink: "https://lu.ma/lkiakqtu",
    location: "Rio de Janeiro, Brazil",
    eventName: "Ethereum Translathon 📜🔍 hosted by EthSamba & BambaLabs",
  },
  {
    emojiString: "🇲🇾",
    lumaLink: "https://www.meetup.com/ethmalaysia/events/302654952/",
    location: "Kuala Lumpur, Malaysia",
    eventName: "Lepak and Join Translatathon",
  },
  {
    emojiString: "🇮🇳",
    lumaLink: "https://lu.ma/9eajbv89",
    location: "Kerala, India",
    eventName: "Ethereum.org - TRANSLATATHON INDIA - Jñāna",
  },
  {
    emojiString: "🇬🇭",
    lumaLink: "https://lu.ma/qvzlo7nc",
    location: "Accra, Ghana",
    eventName: "Ghana Ethereum Translatathon 2024",
  },
]

export const LocalCommunitiesList = () => {
  return (
    <Flex gap={4} direction="column">
      {localCommunitiesData.map((community, index) => (
        <Flex
          bg="background.highlight"
          key={index}
          direction={{ base: "column-reverse", md: "row" }}
          p={6}
          gap={8}
          justifyContent={"space-between"}
        >
          <Flex direction="column" gap={6}>
            <Flex
              borderRadius={80}
              bg="background.base"
              px={5}
              py={1}
              w="fit-content"
            >
              <Text fontWeight="bold">{community.location}</Text>
            </Flex>
            <Box>
              <Text size="lg" fontWeight="bold">
                {community.eventName}
              </Text>
            </Box>
            <Flex>
              <ButtonLink
                href={community.lumaLink}
                variant="outline"
                color="body.base"
              >
                Register here
              </ButtonLink>
            </Flex>
          </Flex>
          <Flex minW="90">
            <Emoji className="text-[90px]" text={community.emojiString} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}
