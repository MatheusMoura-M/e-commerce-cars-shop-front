import { Box, Button, useDisclosure, Show, Hide, Flex, Spinner, SkeletonCircle, SkeletonText, Skeleton } from "@chakra-ui/react";

const CardSkeleton = () => {

    return(
        
        <Box 
            boxShadow='lg' 
            bg='white'  
            minW="265px"
            h="345px"
            mr="25px"
            mt="25px"
            mb="15px"
            ml="15px"
            borderRadius="5px"
        >
            <Skeleton w="100%" height="150px" borderRadius="5px"/>
            <SkeletonText noOfLines={1} skeletonHeight='4' width="90%" marginTop="25px" />
            <SkeletonText noOfLines={3} skeletonHeight='2' width="90%" marginTop="25px" />

            <Box mt="12px" display="flex" alignItems="center" justifyContent="flex-start" width="100%">
            <SkeletonCircle />
            <SkeletonText noOfLines={1} skeletonHeight='3' width="70px" ml="7px" />
            </Box>

            <Box display="flex" mt="15px">
            <Skeleton w="75px" h="25px" mr="10px"/>
            <Skeleton w="50px" h="25px"/>
            </Box>
        </Box>
    )
    

}

export default CardSkeleton