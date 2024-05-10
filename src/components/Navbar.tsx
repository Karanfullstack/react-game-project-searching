import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";

function Navbar() {
	return (
		<HStack padding="15px" justifyContent="space-between">
			<Image src={logo} boxSize="60px" />
			<ColorMode />
		</HStack>
	);
}

export default Navbar;
