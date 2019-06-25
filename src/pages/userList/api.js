import axios from 'axios';
import { baseOptions } from '../../config';

export const getUsers = () =>
	axios.get(`${baseOptions.url}`, {
		headers: baseOptions.headers,
		mode: 'cors'
	});
