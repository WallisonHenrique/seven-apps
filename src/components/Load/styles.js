import styled from 'styled-components';

export const Loading = styled.div`
	align-items: center;
	background: #fff;
	display: flex;
	height: 100%;
	justify-content: center;
	left: 0;
	opacity: .95;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;

	svg {
		animation: rotation 900ms linear infinite;
		height: 50px;
    	width: 50px;

		@keyframes rotation {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
`;