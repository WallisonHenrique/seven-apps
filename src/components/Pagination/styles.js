import styled from 'styled-components';

export const Navigation = styled.nav`
	text-align: right;
	padding: 10px;
`;

export const Current = styled.input`
	margin-left: 10px;
    margin-right: 10px;
    text-align: right;
    width: 60px;
`;

export const Button = styled.button`
	background: none;
	border: none;
	vertical-align: middle;
	
	&:not([disabled]) {
		cursor: pointer;
	}

	& > svg {
		height: 15px;
		width: 15px;
	}
`;

export const SrOnly = styled.span`
	border: none;
	clip: rect(0,0,0,0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0px;
	position: absolute;
	width: 1px;
`;

export const Control = styled.div`
	display: inline-block;
	margin: 0 10px;

	@media (max-width: 442px) {
		margin: 2px 5px;
	}
`; 