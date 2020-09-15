import styled from 'styled-components';

export const Form = styled.form`
	position: relative;

	> svg {
		bottom: 0;
		height: 15px;
		margin: auto 0;
		position: absolute;
		top: 0;
    	width: 15px;

    	&:first-child {
			left: 10px;
		}

		&:last-child {
			cursor: pointer;
			right: 10px
		}
	}
`;

export const Input = styled.input`
	border: 1px solid #ccc;
	font-size: 14px;
	padding: 10px 30px;
	width: 100%;

	&:focus {
		box-shadow: 0 0 5px 1px #ccc;
	}
`;