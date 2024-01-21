/* eslint-disable @typescript-eslint/no-explicit-any */
import "mapbox-gl/dist/mapbox-gl.css";
import DeckGL from "@deck.gl/react/typed";
import Button from "./Button.tsx"
import Popup from "./Popup.tsx"
import { Map as Mapper } from "react-map-gl";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import * as parkingDataJson from '../data/parkingData.json';
import {IconLayer} from '@deck.gl/layers';
import { useState } from "react";

const parkingData = parkingDataJson.parkingData.data;
const takenData = parkingDataJson.parkingData.takenSpots.data;

const ICON_MAPPING = {
  marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
};


const heatLayer = new HeatmapLayer({
  id: 'heatmapLayer',
  data: parkingData,
  getPosition: (d: { COORDINATES: number; }) => d.COORDINATES,
  getWeight: (d: { WEIGHT: number; }) => d.WEIGHT,
  aggregation: 'SUM'
});



const INITIAL_VIEW_STATE = {
  longitude: -73.567253,
  latitude: 45.50169,
  zoom: 12,
  pitch: 0,
  bearing: 0,
};

function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  console.log('selectedMarker', selectedMarker);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const iconLayer = new IconLayer({
    id: 'icon-layer',
    data: takenData,
    pickable: true,
    onHover: (info: any, event: any) => {
      setSelectedMarker(info.object?.name);
      info.color = [255, 255, 255];
      console.log('Hovered:', info, event)},
    onClick: (info: any, event: any) => console.log('Clicked:', info, event),
    iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
    iconMapping: ICON_MAPPING,
    getIcon: () => 'marker',
  
    sizeScale: 5,
    getPosition: (d: { coordinates: number; }) => d.coordinates,
    getSize: () => 5,
    getColor: () => [255, 49, 49],
    updateTriggers: {
      getFillColor: [selectedMarker]
    },
  });

  const mapSettings = {
    accessToken: import.meta.env.VITE_MAPBOX_ACESS_TOKEN,
    style: "mapbox://styles/mapbox/standard",
  }

  return (
    <div>     
      <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[heatLayer, iconLayer]}
      onClick={(info: any) => {
        if(info.layer) setSelectedMarker(info.object);
        // console.log('Clicked:', info, event)
      }
      }
    >
        <Mapper mapboxAccessToken={mapSettings.accessToken} mapStyle={mapSettings.style}/>
        <img
          className="fixed top-4 left-5"
          src="/logo.svg"
          alt="Spot Saver"
          width="40"
          height="30"
        />
        <Button 
        hoverClassName="bg-white text-black"
        className="fixed top-5 left-20 flex items-center bg-[#ff3131] "
        imageSrc={true}>
          Find a spot
        </Button>
        <Button 
        hoverClassName="bg-[#f46666]"
        className="fixed bottom-16 right-5 bg-[#ff3131]"
        imageSrc={false}
        onClick={() => setPopupVisible(true)}>
          Reserve Spot
        </Button>
        {isPopupVisible && <Popup onClose={() => setPopupVisible(false)} />}
      </DeckGL>
    </div>
  );
}

export default Map;
