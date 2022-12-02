import React, { Component } from 'react';
import Main from '../../template/Main';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/players';
const initialState = {
	player: { id: null, name: null, number: null },
	list: [],
};

const headerProps = {
	icon: 'users',
	title: 'Players',
	subtitle: 'Players registration: Include, list, change and exclude.',
};

class UserCrud extends Component {
	state = { ...initialState };

	getUpdatedList(player) {
		const list = this.state.list.filter(
			(_player) => _player.id !== player.id
		);
		list.unshift(player);
		return list;
	}

	clear() {
		this.setState({ player: initialState.player });
	}

	async saveOrUpdate() {
		const player = this.state.player;
		const method = player.id ? 'put' : 'post';
		const url = player.id ? `${baseUrl}/${player.id}` : baseUrl;
		try {
			const response = await axios[method](url, player);
			const list = this.getUpdatedList(response.data);
			this.setState({ player: initialState.player, list });
			window.alert(
				`Player ${player.name} was ${
					player.id ? 'registered' : 'edited'
				}!`
			);
		} catch (error) {
			window.alert(error);
		}
	}

	updateField(event) {
		const player = { ...this.state.player };
		player[event.target.name] = event.target.value;
		this.setState({ player });
	}

	renderForm() {
		return (
			<div className='form'>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<div className='form-group'>
							<label>Name</label>
							<input
								type='text'
								className='form-control'
								name='name'
								value={this.state.player.name}
								onChange={(e) => this.updateField(e)}
								placeholder='Type the player name...'
							/>
						</div>
					</div>
					<div className='col-12 col-md-6'>
						<div className='form-group'>
							<label>Number</label>
							<input
								type='text'
								className='form-control'
								name='number'
								value={this.state.player.number}
								onChange={(e) => this.updateField(e)}
								placeholder='Type the player number...'
							/>
						</div>
					</div>
				</div>
				<hr />
				<div className='row'>
					<div className='col-12 d-flex justify-content-end'>
						<button
							className='btn btn-primary'
							onClick={(e) => this.saveOrUpdate(e)}
						>
							Save
						</button>
						<button
							className='btn btn-secondary ml-2'
							onClick={(e) => this.clear(e)}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return <Main {...headerProps}>{this.renderForm()}</Main>;
	}
}

export default UserCrud;
