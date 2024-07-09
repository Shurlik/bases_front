// const API = 'https://api-bases-rsmhw.ondigitalocean.app'
const API = 'http://localhost:8080'

export async function fetchService (source, method, body) {
	const res = await fetch(API + source, {
		method,
		headers: {
			"Content-Type": "application/json",
		},
		body: method !== 'GET' && !!body ? JSON.stringify(body) : undefined
	});
	return await res.json();
}
