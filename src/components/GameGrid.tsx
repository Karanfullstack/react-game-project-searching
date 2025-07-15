import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../api-client";

interface Game {
	id: number;
	name: string;
}

interface GameFetchProps {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [errors, setErrors] = useState("");
 // TODO NEED TO BE IMPLEMENTED CUSTOM ERROR COMPOENT

	console.log(games);
	useEffect(() => {
		apiClient
			.get<GameFetchProps>("/games")
			.then((res) => setGames(res.data.results))
			.catch((err) => setErrors(err.message));
	}, []);

	return (
		<>
			{errors && <Text>{errors}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
