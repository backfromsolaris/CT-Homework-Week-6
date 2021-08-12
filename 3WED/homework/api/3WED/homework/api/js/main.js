

// Template for each user requesting F1 racer data, for a given season & round via form
class racersData{
    constructor(season,round){
        this.season = season;
        this.round = round;
    };

    // Method to retrieve data from API
    getData = async () => {
        let response = await axios.get(`http://ergast.com/api/f1/${this.season}/${this.round}/driverStandings.json`);
        return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    };    
    
    // Method to load data via submit button & query results
    loadData = async () => {
        const racers = await this.getData();
        console.log(racers)
        racers.forEach( racer => this.createTableRow(racer.position,racer.Driver.givenName,racer.Driver.familyName,racer.Driver.nationality,racer.Constructors[0].name,racer.points,racer.Driver.url))
    };

    // Creating HTML to populate table with driver info, with Bootstrap table rows
    createTableRow = (position,givenName,familyName,nationality,sponsor,points,url) => {
        let position_col = `${position}`;
        let name_col = `<a target='_blank' href='${url}' id='${position}'>${givenName} ${familyName}</a>`;
        let nationality_col = `${nationality}`;
        let sponsor_col = `${sponsor}`;
        let points_col =   `${points}`;
        document.querySelector(this.DOM_Elements.racer_position).insertAdjacentHTML('beforeend',position_col);
        document.querySelector(this.DOM_Elements.racer_full_name).insertAdjacentHTML('beforeend',name_col);
        document.querySelector(this.DOM_Elements.racer_nationality).insertAdjacentHTML('beforeend',nationality_col);
        document.querySelector(this.DOM_Elements.racer_sponsor).insertAdjacentHTML('beforeend',sponsor_col);
        document.querySelector(this.DOM_Elements.racer_points).insertAdjacentHTML('beforeend',points_col);
    };


    // stored DOM element selectors
    DOM_Elements = {
        racerDataForm: '#racerDataForm',
        racer_position: '.racer-position',
        racer_full_name: ".racer-full-name",
        racer_nationality: ".racer-nationality",
        racer_sponsor: ".racer-sponsor",
        racer_points: ".racer-points"
    };
};



// grabbing some form data from a submit event
let form = document.querySelector('#racerDataForm')


// event listener for submit button (form provides input)
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let season = document.querySelector('#season');
    let round = document.querySelector('#round');
    let getRacersData = new racersData(season.value,round.value);
    // let season = event.path[0][0].value;
    // let round = event.path[0][1].value;
    console.log(`The season is ${season.value}, & the round is ${round.value}`)
    getRacersData.loadData()
    return getRacersData
})

let racersInstance = form.addEventListener;

let clearData = () => {
    document.querySelector(racersInstance.DOM_Elements.values).innerHTML = ''
};