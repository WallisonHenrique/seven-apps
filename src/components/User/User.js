import React, { memo } from 'react';
import { Row, Cell } from './styles';

const User = ({ user={} }) => {
	return <Row>
		{ Object.keys(user).map((key, i) => 
			<Cell key={i}>{ user[key] }</Cell>
		)}
	</Row>
}

export const PureUser = memo( User, ( prev, next ) => prev.user.name === next.user.name
	&& prev.user.age === next.user.age
);