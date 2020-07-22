<script>
    import { onMount } from 'svelte';
    let active;
    let recovered;
    let countries = [];
    let selected = 'united-states';
    
    const options = {
        method: "GET",
    };

    onMount( async () => {
        const list = await fetch('https://api.covid19api.com/countries', options);
        countries = await list.json();
        getCountryData(selected);
    })

    function getCountryData(selected) {
        fetch(`https://api.covid19api.com/total/dayone/country/${selected}`, options)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                active = `No active records`;
                recovered = `No active records`;
                return
            }
            data.forEach( cases => {
                active = cases.Active;
                recovered = cases.Recovered;
            })
        })
    }

</script>

<style>
    div {
        background-color: #5f80ff;
        min-height: 650px;
    }

    h1 {
        font-size: 3rem;
        font-weight: 200;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        padding-top: 6rem;
    }

    .container {
        display: flex;
        flex-direction: row;
    }

    article {
        width: 350px;
        height: 350px;
        border: 1px solid #efefef;
        border-radius: 20px;
        background: #fff;
        margin: 5rem auto;
    }

    h2 {
        font-weight: 400;
        text-align: center;
        color: #ef5b25;
        border-bottom: 1px solid #515151;
        padding-bottom: 0.75rem;
    }

    p {
        font-size: 2rem;
        font-weight: 200;
        text-align: center;
    }

    select {
        border: 1px solid #515151;
        border-radius: 4px;
        padding: 12px 52px 12px 16px;
        display: flex;
        width: 90%;
        margin: 2rem auto;
    }

    @media (max-width: 640px) {
        .container {
            flex-direction: column;
        }

        article {
            width: 250px;
        }
    }
</style>

<div>
    <h1>View Cases By Country</h1>
    <div class="container">
        <article>
            <h2>Active Cases</h2>
            <select bind:value={selected} id="countries" on:change={getCountryData(selected)}>
                {#each countries as {Slug, Country}}
                    <option value={Slug}>{Country}</option>
                {/each}
            </select>
            <p>{active}</p>
        </article>
        <article>
            <h2>Recovered Cases</h2>
            <p>{recovered}</p>
        </article>
    </div>
</div>