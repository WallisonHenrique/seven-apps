import { GraphQLClient } from "graphql-request";

export const query = `
	query($name: String, $age: Int, $page: Int!, $size: Int!) {
		search(name: $name, age: $age, page: $page, size: $size) {
			currentPage,
			size,
			totalPages,
			users {
				name,
				age
			}
		}
	}
`;

export const client = new GraphQLClient(
	"http://localhost:4000/"
);