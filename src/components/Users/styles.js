import styled from 'styled-components';

const shadow = "rgba(0,0,0,.1)";

export const Table = styled.table`
	border-spacing: initial;
	width: 100%;
`;

export const Head = styled.thead`
	box-shadow: 3px 3px 3px 3px ${shadow};
`;

export const Header = styled.th`
	padding: 8px 10px;
	text-align: left;

	&:first-child {
		border-right: 1px solid ${shadow};
	}
`;

export const Body = styled.tbody`
	tr:first-child td {
		padding-top: 20px;
	}
`;