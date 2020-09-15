import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		outline: none;
	}

	body, html {
		margin: 0;
		padding: 0;
	}

	.App {
		margin: 0 auto;
		max-width: 960px;
		padding: 20px;
	}
`;