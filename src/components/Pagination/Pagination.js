import React from 'react';
import { Navigation } from './styles';
import SizeControl from './SizeControl';
import PageControl from './PageControl';
import ButtonsControl from './ButtonsControl';

export default function Pagination ({ currentPage=1, totalPages, search, currentSize }) {
	return <Navigation>
		<SizeControl search={ search } currentSize={ currentSize } />
		<PageControl search={ search } currentPage={ currentPage } totalPages={ totalPages } />
		<ButtonsControl search={ search } currentPage={ currentPage } totalPages={ totalPages } />
	</Navigation>
}