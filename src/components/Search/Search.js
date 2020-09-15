import React, { useState, useRef } from 'react';
import { Form, Input } from './styles';
import { FaSearch, FaTimes } from 'react-icons/fa';

export default function Search({ search }) {
	const [ term, setTerm ] = useState("");

	const inputFocus = useRef();

	const change = event => setTerm( event.target.value );

	const cleanTerm = () => {
		setTerm("");
		inputFocus.current.focus();
	};

	const submit = event => {
		event.preventDefault();
		let params = {};

		if (isNaN(term) || term === "")
			params = { name: term, age: undefined }
		else
			params = { name: undefined, age: Number(term) }
		
		search(params);
	}

	return <Form onSubmit={ submit }>
		<FaSearch />
		<Input type="text" ref={ inputFocus } onChange={ change } value={ term } placeholder="Pesquise por nome ou idade..." />
		{ term.length >= 1
			&& <FaTimes onClick={ cleanTerm } />
		}
	</Form>
}