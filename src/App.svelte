<script>
	import Summary from './Summary.svelte';
	import Card from './Card.svelte';
		import Login from './Login.svelte';
	import {firebaseauth} from './service/firebase.js';
	import * as firebase from "firebase/app";

	function handleAuth(event) {
		const provider = event.detail.provider;
		const authProvider = new firebase.auth[`${provider}AuthProvider`]();
		
        firebase
            .auth()
			.signInWithPopup(authProvider)
			.then( result => {
				console.log(result.user);
				//TODO: Handle button or message showing logged in
			})
	}
</script>

<Login on:auth={handleAuth}/>

<main>
	<h1>COVID-19 Cases Summary</h1>
</main>

<Summary />
<Card />

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #5f80ff;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>