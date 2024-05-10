import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
			>
				<GridItem area={"nav"} bg={"coral"}>
					<Navbar />
				</GridItem>
				<Show above="lg">
					<GridItem area={"aside"} bg={"tomato"}>
						aside
					</GridItem>
				</Show>

				<GridItem area={"main"} bg={"papayawhip"}>
					Main
				</GridItem>
			</Grid>
		</>
	);
};

export default App;
