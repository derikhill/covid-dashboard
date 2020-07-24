<script>
    import { createEventDispatcher } from 'svelte';

    export let text;

	const dispatch = createEventDispatcher();

    function authProvider(provider) {
        dispatch('auth', {
            provider: provider
        })
    }

</script>

<style>
    
</style>

<div>
<!-- could add more buttons for different authentication -->
    <button className="github" on:click={ () => authProvider('Github')}>
        {text}
    </button>
</div>