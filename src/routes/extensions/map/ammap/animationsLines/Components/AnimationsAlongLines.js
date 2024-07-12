import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import "./styles.css";
import "leaflet/dist/leaflet.css";

export default class App extends Component {
  state = {
    center: [51.505, -0.091],
    zoom: 13,
  };

  render() {
    return (
      <div>
        <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={this.state.center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
