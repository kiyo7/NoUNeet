import React, { Component } from 'react'
import '../App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiZnUtdGEyNTExIiwiYSI6ImNrdHc3azZwYzI3bWwybm8xaDZlYzNuYTAifQ.iF3783k67PmflH1wPU-_gw'
class MapBox extends Component {
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.container,
            style: 'mapbox://styles/fu-ta2511/cktye8opm2jb319o4uwvugxgo',
            center: [139.7670516, 35.6811673],
            zoom: 12
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