import React, { useState, useEffect } from 'react';
import { Control, Current } from './styles';

export default function PageControl({ search, currentPage, totalPages }) {
	const [ page, setPage ] = useState(currentPage);

	useEffect(() => setPage(currentPage), [currentPage]);

	const submit = event => {
		event.preventDefault();
		search({ page: page });
	}

	const change = event => setPage(Number(event.target.value));

	return <Control>
		<form onSubmit={ submit }>
			Páginas:
			<Current
				onChange={ change }
				type="number" 
				value={ page }
				min="1"
				max={ totalPages }
			/> 
			de { totalPages }
		</form>
	</Control>
}