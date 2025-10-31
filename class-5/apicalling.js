/**
 * Async/Await and Promises — Demo cheat-sheet
 *
 * What and why:
 * - A Promise represents a value that will be available later (pending -> fulfilled/rejected).
 * - fetch(...) returns a Promise because the network takes time.
 * - async/await lets you write asynchronous code that looks like synchronous code.
 * - If you DON'T use promises/async, your code keeps running and you try to use data before it arrives.
 *
 * Try this page from class-5/index.html and watch the log output for each demo.
 */

const API_TODO = 'https://jsonplaceholder.typicode.com/todos/1';
const API_USER = 'https://jsonplaceholder.typicode.com/users/1';

// 1) What happens if we DON'T handle async properly
function demoNaiveWithoutAwait() {
	const pre = document.getElementById('log');
	if (pre) pre.textContent = '';
	console.log('Start (naive)');
	if (pre) pre.textContent += 'Start (naive)\n';

	// We call fetch but do not wait for it. The code continues immediately.
	fetch(API_TODO);

	console.log('End (naive) — fetch started, but data has NOT arrived yet');
	console.log('If you tried to use the data now, it would be undefined.');
	if (pre) {
		pre.textContent += 'End (naive) — fetch started, but data has NOT arrived yet\n';
		pre.textContent += 'If you tried to use the data now, it would be undefined.\n';
	}
}

// 2) Using Promises with .then/.catch
function demoWithPromisesThen() {
	const pre = document.getElementById('log');
	if (pre) pre.textContent = '';
	console.log('Start (.then/.catch)');
	if (pre) pre.textContent += 'Start (.then/.catch)\n';

	fetch(API_TODO)
		.then((res) => {
			if (!res.ok) throw new Error('HTTP ' + res.status);
			return res.json();
		})
		.then((data) => {
			console.log('Data arrived (then):', data);
			if (pre) {
				pre.textContent += 'Data arrived (then):\n';
				pre.textContent += JSON.stringify(data, null, 2) + '\n';
			}
		})
		.catch((err) => {
			console.error('Error:', err);
			if (pre) pre.textContent += 'Error: ' + err.message + '\n';
		})
		.finally(() => {
			console.log('Finished (.then/.catch)');
			if (pre) pre.textContent += 'Finished (.then/.catch)\n';
		});
}

// 3) Using async/await (sugar over Promises)
async function demoWithAsyncAwait() {
	const pre = document.getElementById('log');
	if (pre) pre.textContent = '';
	console.log('Start (async/await)');
	if (pre) pre.textContent += 'Start (async/await)\n';
	try {
		const res = await fetch(API_TODO);
		if (!res.ok) throw new Error('HTTP ' + res.status);
		const data = await res.json();
		console.log('Data arrived (await):', data);
		if (pre) {
			pre.textContent += 'Data arrived (await):\n';
			pre.textContent += JSON.stringify(data, null, 2) + '\n';
		}
	} catch (err) {
		console.error('Error:', err);
		if (pre) pre.textContent += 'Error: ' + err.message + '\n';
	} finally {
		console.log('Finished (async/await)');
		if (pre) pre.textContent += 'Finished (async/await)\n';
	}
}

// 4) Parallel requests with Promise.all (still using await)
async function demoParallelWithPromiseAll() {
	const pre = document.getElementById('log');
	if (pre) pre.textContent = '';
	console.log('Start (Promise.all)');
	if (pre) pre.textContent += 'Start (Promise.all)\n';
	const t0 = performance.now ? performance.now() : Date.now();
	try {
		const [todoRes, userRes] = await Promise.all([
			fetch(API_TODO),
			fetch(API_USER),
		]);

		if (!todoRes.ok || !userRes.ok) {
			throw new Error('One of the responses failed');
		}

		const [todo, user] = await Promise.all([
			todoRes.json(),
			userRes.json(),
		]);

        localStorage.setItem("todo", JSON.stringify(todo));

		console.log('Both arrived in parallel:', { todo, user });
		if (pre) {
			pre.textContent += 'Both arrived in parallel:\n';
			pre.textContent += JSON.stringify({ todo, user }, null, 2) + '\n';
		}
	} catch (err) {
		console.error('Error:', err);
		if (pre) pre.textContent += 'Error: ' + err.message + '\n';
	} finally {
		const t1 = performance.now ? performance.now() : Date.now();
		const msg = 'Finished (Promise.all) in ~' + Math.round(t1 - t0) + ' ms';
		console.log(msg);
		if (pre) pre.textContent += msg + '\n';
	}
}

// Hook up buttons if running in a browser page
if (typeof document !== 'undefined') {
	window.addEventListener('DOMContentLoaded', () => {
		const btnNaive = document.getElementById('btn-naive');
		const btnThen = document.getElementById('btn-then');
		const btnAwait = document.getElementById('btn-await');
		const btnAll = document.getElementById('btn-all');

		if (btnNaive) btnNaive.addEventListener('click', demoNaiveWithoutAwait);
		if (btnThen) btnThen.addEventListener('click', demoWithPromisesThen);
		if (btnAwait) btnAwait.addEventListener('click', demoWithAsyncAwait);
		if (btnAll) btnAll.addEventListener('click', demoParallelWithPromiseAll);
	});
}


