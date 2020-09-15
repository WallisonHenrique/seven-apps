import React from 'react';
import { Control } from './styles';

export default function SizeControl({ search, currentSize }) {
	const sizes = [ 10, 20, 50, 100 ];

	const change = event => search({ page: 1, size: Number(event.target.value) });

	return <Control>
		Itens:
		<select onChange={ change } value={ currentSize }>
			{ sizes.map((size) => 
				<option key={ size } value={ size }>{ size }</option>
			)}
		</select>
	</Control>
}