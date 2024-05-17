"use client";
import {Box, Flex} from "@chakra-ui/react";

function Header() {
	return (
		<Box w={'full'} h={'10vh'} px={10} borderBottom={'1px'} borderBottomColor={'red'}>
			<Flex h={'full'} justify={'space-between'} align={'center'}>
				<Box>Logo</Box>
				<Box>Login</Box>
			</Flex>
		</Box>
	);
}

export default Header;
