<script>
    import { onMount } from 'svelte';
	import Tab, {Icon, Label} from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import DataTable, {Body, Row, Cell} from '@smui/data-table';

    let activeTab = 'United States';
    let slug = 'united-states';
    let confirmed;
    let active;
    let recovered;
    let deaths;

    // onMount( 
    //     getCountryData(slug)
    // )

    function getCountryData(slug) {
        slug === 'United States' ? slug = 'united-states' : (slug === 'United Kingdom' ? slug = 'united kingdom' : 'china');
        fetch(`https://api.covid19api.com/total/dayone/country/${slug}`)
        .then(response => response.json())
        .then(data => {
            data.forEach( cases => {
                confirmed = cases.Confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                active = cases.Active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                recovered = cases.Recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                deaths = cases.Deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            })
        })
    }

</script>


<section>
    <TabBar tabs={['United States', 'United Kingdom', 'China']} let:tab bind:activeTab>
        <Tab {tab} on:click={getCountryData(tab)}>
        <Label>{tab}</Label>
        </Tab>
    </TabBar>
    <DataTable table$aria-label="Covid Numbers by Country">
      <Body>
        <Row>
          <Cell>Confirmed</Cell>
          <Cell>{confirmed}</Cell>
        </Row>
        <Row>
          <Cell>Active</Cell>
          <Cell>{active}</Cell>
        </Row>
        <Row>
          <Cell>Deaths</Cell>
          <Cell>{deaths}</Cell>
        </Row>
        <Row>
          <Cell>Recovered</Cell>
          <Cell>{recovered}</Cell>
        </Row>
      </Body>
    </DataTable>
</section>