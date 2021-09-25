import React, { Component } from 'react'
import '../App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import Calender from '../components/Calender'


mapboxgl.accessToken = 'pk.eyJ1IjoiZnUtdGEyNTExIiwiYSI6ImNrdHc3azZwYzI3bWwybm8xaDZlYzNuYTAifQ.iF3783k67PmflH1wPU-_gw'
class MapBox extends Component {
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.container,
            style: 'mapbox://styles/fu-ta2511/cktye8opm2jb319o4uwvugxgo',
            center: [139.7670516, 35.6811673],
            zoom: 12
        })
        this.map.addControl(new mapboxgl.NavigationControl());
        const html = `<H3>あばばば会社</H3>
        <span>
        あばばば会社（Abababa.co）は、東京都に跨る営利主義団体である。ビルの高さ3776.12 m、日本最高峰で日本国外でも日本の象徴として広く知られている。
        <span>
        `;

        const popup = new mapboxgl.Popup({
            //anchor: 'bottom',
            className: 'my-class',
            closeButton: false,
        })
            .setMaxWidth('400px')
            .setHTML(html);

        // create the marker
        new mapboxgl.Marker()
            .setLngLat([139.7670516, 35.6811673])
            .setPopup(popup) // sets a popup on this marker
            .addTo(this.map)
            .togglePopup();

    }

    componentWillUnmount() {
        this.map.remove()
    }


    render() {
        return (

            <div className={'map'} ref={e => (this.container = e)} >
                <Calender className={'calender'} />
            </div>

        )


    }
}

export default MapBox