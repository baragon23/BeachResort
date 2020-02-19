import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({ context }) {
	const { loading, sortedRooms, rooms } = context;

		if (loading) {
			return <Loading />;
		}

		return (
			<React.Fragment>
				<RoomFilter rooms={rooms} />
				<RoomList rooms={sortedRooms} />
			</React.Fragment>
		);
}

export default withRoomConsumer(RoomContainer);