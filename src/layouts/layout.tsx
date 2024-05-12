import {LayoutProps} from "@/layouts/layout.props";
import Sidebar from '@/layouts/sidebar/sidebar'
import {Box} from "@chakra-ui/react";
import Header from "@/layouts/header/header";
import {FunctionComponent} from "react";

function Layout({children}: LayoutProps): JSX.Element {
	return (
		<Box maxW={'full'} overflow={'hidden'}>
			<Header/>
			<Sidebar/>
			<Box>
				{children}
			</Box>
		</Box>
	)
}

export default Layout

export const withLayout =<T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element{
		return (
			<Layout>
				<Component {...props}/>
			</Layout>
		);
	};
};
