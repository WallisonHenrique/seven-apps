import { useState } from 'react';
import { query, client } from './client';

export default function useGetData( ) {
	const [ response, setResponse ] = useState({});

	const getResponse = setLoading => params => {
		setLoading(true);

		return client
		.request(query, { page: 1, size: 50, ...params })
		.then(res => {
			setResponse({...res.search});
			setLoading(false);
		})
		.catch(console.error);
	}
	
	return [ response, getResponse ];
}