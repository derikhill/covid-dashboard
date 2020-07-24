<script>
	import Summary from './Summary.svelte';
	import Card from './Card.svelte';
	import Login from './Login.svelte';
	import TableData from './TableData.svelte';
	import {firebaseauth} from './service/firebase.js';
	import firebase from "firebase/app";

	let user = { loggedIn: false };

	function handleAuth(event) {
		const provider = event.detail.provider;
		const authProvider = new firebase.auth[`${provider}AuthProvider`]();
		
		if (!user.loggedIn) {
			firebase
				.auth()
				.signInWithPopup(authProvider)
				.then( result => {
					console.log(result.user.displayName);
					//TODO: Handle button or message showing logged in
					user.loggedIn = true;
				})
		} else {
			firebase.auth().signOut()
				.then( () => {
					user.loggedIn = false;
			})
		}
	}
	
</script>

{#if !user.loggedIn}
	<Login on:auth={handleAuth} text={"Login with Github"}/>
{:else}
	<Login on:auth={handleAuth} text={"Log Out"}/>
{/if}

<main>
	<h1>COVID-19 Cases Summary</h1>
</main>

<Summary />
<Card />
<TableData />

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #5f80ff;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}

		h1 {
			font-size: 3rem;
		}
	}
</style>