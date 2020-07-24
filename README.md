# COVID-19 DASHBOARD

This app consumes the [covid-19 API](https://covid19api.com/)

### Summary

The current version shows a summary at the start of the page which displays total numbers for the world and can toggle to display new totals for the world.

### View by Country

This section currently has two sections that show active cases and recovered cases. By default it loads with United States as the active data. There is a dropdown which will fetch the data for the new selected country. If no records are available a message shows that as well.

### Install

To run locally: 
- First clone the project
- Then install dependencies > npm install
- Finally > npm run dev

### Visit

This project is being hosted with [Surge.sh](https://surge.sh)

You can view the project at [silent-pies.surge.sh](silent-pies.surge.sh)

There is a valid auth handler working using Github credentials as a login process. 

Currently, the button just transitions to show "Login" or "Log out", no hidden features when not logged in.
