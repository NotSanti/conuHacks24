import "mapbox-gl/dist/mapbox-gl.css";
import DeckGL from "@deck.gl/react/typed";
import { Map as Mapper } from "react-map-gl";

const INITIAL_VIEW_STATE = {
  longitude: -73.567253,
  latitude: 45.50169,
  zoom: 12,
  pitch: 0,
  bearing: 0,
};

function Map() {
  const mapSettings = {
    accessToken: import.meta.env.VITE_MAPBOX_ACESS_TOKEN,
    style: "mapbox://styles/mapbox/standard",
  }

  return (
    <div>
     
      <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    >
        <Mapper mapboxAccessToken={mapSettings.accessToken} mapStyle={mapSettings.style}/>
      </DeckGL>
    </div>
  );
}

export default Map;
