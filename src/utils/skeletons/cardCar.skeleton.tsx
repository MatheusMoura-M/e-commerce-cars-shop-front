import {
  Box,
  Button,
  useDisclosure,
  Show,
  Hide,
  Flex,
  Spinner,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Box
      boxShadow="lg"
      bg="white"
      minW="265px"
      h="345px"
      mr="25px"
      mt="25px"
      mb="15px"
      ml="15px"
      borderRadius="5px"
    >
      <Skeleton w="100%" h="150px" borderRadius="5px" />
      <SkeletonText noOfLines={1} skeletonHeight="4" w="90%" mt="25px" />
      <SkeletonText noOfLines={3} skeletonHeight="2" w="90%" mt="25px" />

      <Flex mt="12px" alignItems="center" justifyContent="flex-start" w="100%">
        <SkeletonCircle />
        <SkeletonText noOfLines={1} skeletonHeight="3" w="70px" ml="7px" />
      </Flex>

      <Flex mt="15px">
        <Skeleton w="75px" h="25px" mr="10px" />
        <Skeleton w="50px" h="25px" />
      </Flex>
    </Box>
  );
};

export default CardSkeleton;
