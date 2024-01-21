import fs from 'fs';
import csvParser from 'csv-parser';

// interface ParkingDataRow {
//   sNoPlace: string;
//   nLongitude: string;
//   nLatitude: string;
//   nPositionCentreLongitude: string;
//   nPositionCentreLatitude: string;
//   sStatut: string;
//   sGenre: string;
//   sType: string;
//   sAutreTete: string;
//   sNomRue: string;
//   nSupVelo: string;
//   sTypeExploitation: string;
//   nTarifHoraire: string;
//   sLocalisation: string;
//   nTarifMax: string;
// }

// interface ParkingData {
//   data: { COORDINATES: [number, number]; WEIGHT: number }[];
// }

const csvFilePath = 'src/data/Places.csv';
const outputJsonFilePath = 'src/data/parkingData.json';

const parkingData = {
  data: [],
  takenSpots: {
    data: [],
  },
};

fs.createReadStream(csvFilePath)
  .pipe(csvParser())
.on('data', (data) => {
    // Extract longitude and latitude from the specified columns
    const longitude = parseFloat(data.nPositionCentreLongitude);
    const latitude = parseFloat(data.nPositionCentreLatitude);

    // Create a new data entry
    const newDataEntry = {
        COORDINATES: [longitude, latitude],
        WEIGHT: Math.floor(Math.random() * 10) + 1, // Random weight between 1 and 10
    };

    // Push the new data entry to the array
    parkingData.data.push(newDataEntry);

    if (parkingData.data.length % 120 === 0) {
      // Create a new taken spot entry
      const newTakenSpot = {
        name: data.sNomRue,
        address: data.sNomRue,
        exits: Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000, // Random exits between 3000 and 5000
        coordinates: [longitude, latitude],
      };

      // Push the new taken spot entry to the array
      parkingData.takenSpots.data.push(newTakenSpot);
    }
})
  .on('end', () => {
    // Convert the parkingData object to a JSON string
    const jsonData = JSON.stringify({ parkingData }, null, 2);

    // Write the JSON string to a file
    fs.writeFileSync(outputJsonFilePath, jsonData);

    console.log('CSV file successfully converted to parkingData.json.');
  });