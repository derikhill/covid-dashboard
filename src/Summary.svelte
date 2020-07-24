<script>
    let newCases;
    let totalCases;
    let newDeaths;
    let totalDeaths;
    let newRecovered;
    let totalRecovered;
    
    let number = { total: false };
    
    function toggleTotals() {
        number.total = !number.total;
    }

    const options = {
        method: "GET",
    };
    
    fetch('https://api.covid19api.com/summary', options)
    .then(response => response.json())
    .then(data => {
        newCases = data.Global.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        totalCases = data.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        newDeaths = data.Global.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        totalDeaths = data.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        newRecovered = data.Global.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        totalRecovered = data.Global.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    })

</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        margin: 0 auto 5rem;
    }

    h3, p {
        color: #5f80ff;
        font-weight: bold;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .totals {
        font-size: 2.5rem;
        font-weight: 200;
        text-align: center;
        margin-top: 0;
        margin-bottom: 2rem;
    }

    button {
        margin: auto;
    }
</style>

<div>
    {#if number.total}
        <h3>
            New Cases:
        </h3>
        <p class="totals">
            {newCases}
        </p >
        <h3>
            New Deaths:
        </h3>
        <p class="totals">
            {newDeaths}
        </p>
        <h3>
            New Recoveries:
        </h3>
        <p class="totals">
            {newRecovered}
        </p>
    {:else}
        <h3>
            Total Cases:
        </h3>
        <p class="totals">
            {totalCases}
        </p>
        <h3>
            Total Deaths:
        </h3>
        <p class="totals">
            {totalDeaths}
        </p>
        <h3>
            Total Recoveries:
        </h3>
        <p class="totals">
            {totalRecovered}
        </p>
    {/if}

    {#if number.total}
        <button on:click={toggleTotals}>See Total Cases</button>
    {:else}
        <button on:click={toggleTotals}>See New Cases</button>
    {/if}
</div>