import React from 'react';
import { PureUser } from '../User/User';
import { Table, Head, Header, Body } from './styles';

export default function Users({ users=[] }) {
	if (!users.length)
		return <div>Não há resultados.</div>
	return <Table>
		<Head>
			<tr>
				<Header>Nome</Header>
				<Header>Idade</Header>
			</tr>
		</Head>
		<Body>
			{ users.map((user, i) => 
				<PureUser key={i} user={ user } />
			)}
		</Body>
	</Table>
}