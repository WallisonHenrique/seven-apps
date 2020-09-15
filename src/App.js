import React, { useEffect, useState } from 'react';
import GlobalStyles from './styles/global';

import Search from './components/Search/Search';
import Users from './components/Users/Users';
import Pagination from './components/Pagination/Pagination';

import useGetData from './utils/useGetData';
import Load from './components/Load/Load';

export default function App() {
	const [ data, setData ] = useGetData();

	const [ loading, setLoading ] = useState(true);

	const [ params, setParams ] = useState({ page: 1, size: 50 });

	const getData = setData(setLoading);
	
	useEffect(() => {
		getData(params);
	}, [ params.page, params.size, params.name, params.age ]);

	const search = (terms) => setParams({ ...params, ...terms });

	return <div className="App">
		<GlobalStyles />
		<Search search={ search } />
		<Pagination 
			currentPage={ data.currentPage } 
			totalPages={ data.totalPages } 
			search={ search }
			currentSize={ data.size}
		/>
		<Users users={ data.users } />
		<Pagination 
			currentPage={ data.currentPage } 
			totalPages={ data.totalPages } 
			search={ search }
			currentSize={ data.size}
		/>
		{ loading && <Load /> }
	</div>
}