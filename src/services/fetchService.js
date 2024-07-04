import {API} from "../utilites/data";
import {getTokens} from "./storage";

export async function fetchService (source, method, body) {
	const tokens = getTokens()
	const res = await fetch(API + source, {
		method,
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${tokens?.token}`
		},
		body: method !== 'GET' && !!body ? JSON.stringify(body) : undefined
	});
	return await res.json();
}
