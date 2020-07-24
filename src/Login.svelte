<script>
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    function authProvider(provider) {
        dispatch('auth', {
            provider: provider
        })
    }

</script>

<style>
    button {
        cursor: pointer;
    }
</style>

<div>
<!-- could add more buttons for different authentication -->
    <button className="github" on:click={ () => authProvider('Github')}>
        Login with Github
    </button>
</div>