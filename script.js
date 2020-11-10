// Write your JavaScript code here!

//This block of code shows how to format the HTML once you fetch some planetary JSON!

//This is supposed to access the array in the url given by fetch in index.html.
let targetArray = [];
fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
       response.json().then( function(json) {
          targetArray = json[0];
          const missionTarget = document.getElementById('missionTarget');
          missionTarget.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                <li>Name: ${targetArray.name}</li>
                <li>Diameter: ${targetArray.diameter}</li>
                <li>Star: ${targetArray.star}</li>
                <li>Distance from Earth: ${targetArray.distance}</li>
                <li>Number of Moons: ${targetArray.moons}</li>
                </ol>
                <img src="${targetArray.image}"></img>`;      
        });
});

window.addEventListener("load", function() {
const form = document.querySelector("[id=launchForm]");
form.addEventListener("submit", function(event) {
        const pilotName = document.querySelector("input[name=pilotName]");
        const copilotName = document.querySelector("input[name=copilotName]");
        const fuelLevel = document.querySelector("input[name=fuelLevel]");
        const cargoMass = document.querySelector("input[name=cargoMass]");
        
                //These trigger alerts to have the user enter correct information. 

                if (isNaN(Number(fuelLevel.value)) === true || isNaN(Number(cargoMass.value)) === true) {
                        alert('Please re-enter valid information. Fuel level and cargo mass must be numbers.');
                }
                if (isNaN(Number(pilotName.value)) === false || isNaN(Number(copilotName.value)) === false) {
                        alert('Please re-enter valid information. Pilot and copilot cannot be numbers.');
                }
                if(pilotName.value === "" || pilotName.value === " ") {
                        alert('Pilot name is required.');

                }
                if(copilotName.value === "" || copilotName.value === " ") {
                        alert('Copilot name is required.');
                }
                if(fuelLevel.value === "" || fuelLevel.value === " ") {
                        alert('Fuel level is required.');
                }
                if(cargoMass.value === "" || cargoMass.value === " ") {
                        alert('Cargo mass is required.');
                }

                event.preventDefault(); 

        //This is meant to update the launch status and color.

        const list = document.querySelector('#faultyItems');
        const fuelStatus = document.querySelector('#fuelStatus');
        const cargoStatus = document.querySelector('#cargoStatus');
        const pilotStatus = document.querySelector('#pilotStatus');
        const copilotStatus = document.querySelector('#copilotStatus');
        const launchStatus = document.querySelector('#launchStatus');
        
        pilotStatus.innerHTML = `${pilotName.value} reporting for mission. Pilot Ready.`;
        copilotStatus.innerHTML = `${copilotName.value} reporting for mission. Co-pilot Ready.`;
        let fuelLevelEnough = '';
        let cargoMassLowEnough = '';

                if (fuelLevel.value < 10000) {
                        fuelStatus.innerHTML = "There is not enough fuel for the journey.";
                        fuelLevelEnough = false;
                }
                else {
                        fuelStatus.innerHTML = "Shuttle ready for launch.";
                        fuelLevelEnough = true;
                }
                if(cargoMass.value > 10000){
                        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
                        cargoMassLowEnough = false;
                }
                else {
                        cargoStatus.innerHTML = "Shuttle ready for launch.";
                        cargoMassLowEnough = true;
                }
                if (fuelLevelEnough === false || cargoMassLowEnough === false){
                        launchStatus.style.color = red;
                }
                else{
                        launchStatus.style.color = green;
                }

        list.style.visibility = "visible";
});
});
