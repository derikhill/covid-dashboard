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
        newCases = data.Global.NewConfirmed;
        totalCases = data.Global.TotalConfirmed;
        newDeaths = data.Global.NewDeaths;
        totalDeaths = data.Global.TotalDeaths;
        newRecovered = data.Global.NewRecovered;
        totalRecovered = data.Global.TotalRecovered;
    })

</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        margin: 3rem auto 5rem;
    }

    h4, p {
        color: #5f80ff;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .totals {
        font-size: 2rem;
        font-weight: 200;
        text-align: center;
        margin-top: 0;
        margin-bottom: 2rem;
    }

    button {
        margin: auto;
        font-size: 0.875rem;
        line-height: 2.5;
        font-weight: 500;
        text-transform: uppercase;
        border-radius: 25px;
        padding: 0 24px;
        border: 1px solid #676778;
        background: #676778;
        color: #f1f1f1;
        cursor: pointer;
    }
</style>

<div>
    {#if number.total}
        <h4>
            New Cases:
        </h4>
        <p class="totals">
            {newCases}
        </p >
        <h4>
            New Deaths:
        </h4>
        <p class="totals">
            {newDeaths}
        </p>
        <h4>
            New Recoveries:
        </h4>
        <p class="totals">
            {newRecovered}
        </p>
    {:else}
        <h4>
            Total confirmed cases:
        </h4>
        <p class="totals">
            {totalCases}
        </p>
        <h4>
            Total Deaths:
        </h4>
        <p class="totals">
            {totalDeaths}
        </p>
        <h4>
            Total Recoveries:
        </h4>
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