class Http {

	static get(url) {

		return new Promise((resolve, reject) => {

			let http = new XMLHttpRequest();
			
			http.onload = (state) => {
				state = state.currentTarget;
				state.status === 200 ? resolve(state.response) : reject(state.statusText);
			}

			http.onerror = (state) => {
			   state = state.currentTarget;
			   reject(state.statusText);
			}

			http.open('GET', url, true);
			http.send(	);

		});

	}

}

export default Http;