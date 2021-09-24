import React, { Component } from 'react'
import '../App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiZnUtdGEyNTExIiwiYSI6ImNrdHc3azZwYzI3bWwybm8xaDZlYzNuYTAifQ.iF3783k67PmflH1wPU-_gw'
class MapBox extends Component {
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.container,
            style: 'mapbox://styles/fu-ta2511/cktxw58550e5918njyst58c5w',
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return <div className={'map'} ref={e => (this.container = e)} />
    }
}

export default MapBox