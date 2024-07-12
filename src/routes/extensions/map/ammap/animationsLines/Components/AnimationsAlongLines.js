import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import "./styles.css";
import "leaflet/dist/leaflet.css";
// import { Icon } from "leaflet";
import L from "leaflet";

import customicon from "../../../../../../assets/vendors/placeholder.png";
let DefaultIcon = L.icon({
  iconUrl: customicon,
  iconSize: [40, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;
export default class App extends Component {
  state = {
    center: [
      [46.808327, -100.783737],
      [37.0902, -95.7129],
    ],
    zoom: 3,
  };
  render() {
    return (
      <div>
        <Map center={this.state.center[0]} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {this.state.center.map((e) => {
            return (
              <Marker position={e}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })}
        </Map>
      </div>
    );
  }
}
