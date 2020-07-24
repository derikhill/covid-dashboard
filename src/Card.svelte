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
                active = cases.Active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                recovered = cases.Recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            })
        })
    }

</script>

<style>
    .card-container {
        background-color: #5f80ff;
        min-height: 650px;
    }

    .search-bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    button {
        background-color: #ef5b25;
    }

    h1 {
        font-size: 3rem;
        font-weight: 200;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        padding-top: 6rem;
    }

    .article-container {
        display: flex;
        flex-direction: row;
    }

    article {
        width: 350px;
        height: 300px;
        border: 1px solid #efefef;
        border-radius: 20px;
        background: #fff;
        margin: 5rem auto;
    }

    h4 {
        font-weight: bold;
        text-align: center;
        color: #ef5b25;
        border-bottom: 1px solid #515151;
        padding-bottom: 0.75rem;
    }

    .totals {
        font-size: 4rem;
        font-weight: 300;
        text-align: center;
    }

    select {
        border: 1px solid #515151;
        border-radius: 4px;
        padding: 12px 52px 12px 16px;
        display: flex;
        margin-right: 1rem;
    }

    @media (max-width: 640px) {
        select,
        button {
            margin: 1rem;
        }
        .search-bar, 
        .article-container {
            flex-direction: column;
        }

        article {
            width: 250px;
            margin: 3rem auto;
        }

        .totals {
            font-size: 3rem;
        }
    }
</style>

<div class="card-container">
    <h1>View Cases By Country</h1>
    <div class="search-bar">
        <select bind:value={selected} id="countries" >
            {#each countries as {Slug, Country}}
                <option value={Slug}>{Country}</option>
            {/each}
        </select>
        <button on:click={getCountryData(selected)} class="button">
            View country data
        </button>
    </div>
    <div class="article-container">
        <article>
            <h4>Active Cases</h4>
            
            <h3 class="totals">{active}</h3>
        </article>
        <article>
            <h4>Recovered Cases</h4>
            <h3 class="totals">{recovered}</h3>
        </article>
    </div>
</div>