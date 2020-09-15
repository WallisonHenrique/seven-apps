import React from 'react';
import { Control, Button, SrOnly } from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ButtonsControl({ search, currentPage, totalPages }) {
	const prevPage = currentPage - 1;

	const nextPage = currentPage + 1;

	const goto = page => search({ page: page });

	return <Control>
		<Button 
			onClick={ () => goto(prevPage) } 
			disabled={ currentPage === 1 }>
			<FaChevronLeft />
			<SrOnly>Ir para a página { prevPage }.</SrOnly>
		</Button>
		<Button 
			onClick={ () => goto(nextPage) } 
			disabled={ currentPage === totalPages }>
			<FaChevronRight />
			<SrOnly>Ir para a página { nextPage }.</SrOnly>
		</Button>
	</Control>
}

