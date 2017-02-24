/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import MapView from 'react-native-maps';

export default class NativeMapsGhostCallout extends Component {

    constructor() {
        super();

        var initialRegion = {
            latitude: 37.78825,
            longitude: -122.4624,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };

        var markers = [
            {id: 'm1', latlng: {latitude: 37.78025, longitude: -122.4701}, title: 'Marker 1', description: 'Test marker 1'},
            {id: 'm2', latlng: {latitude: 37.78134, longitude: -122.4812}, title: 'Marker 2', description: 'Test marker 2'},
            {id: 'm3', latlng: {latitude: 37.78243, longitude: -122.4623}, title: 'Marker 3', description: 'Test marker 3'},
            {id: 'm4', latlng: {latitude: 37.78312, longitude: -122.4534}, title: 'Marker 4', description: 'Test marker 4'},
            {id: 'm5', latlng: {latitude: 37.78471, longitude: -122.4445}, title: 'Marker 5', description: 'Test marker 5'},
        ];

        this.state = {
            region: initialRegion,
            markers
        }

        this.onRegionChange = this.onRegionChange.bind(this);
        this.removeMarkers = this.removeMarkers.bind(this);
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    removeMarkers() {
        this.setState({ markers: [] });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                <Button
                    onPress={this.removeMarkers}
                    title="Remove markers"
                    color="#841584"
                />
                </View>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                >
                {this.state.markers.map(marker => (
                    <MapView.Marker
                        key={marker.id}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    >
                        <MapView.Callout style={styles.callout}>
                            <View style={styles.calloutInner}>
                                <Text style={styles.markerTitle}>{marker.title}</Text>
                            </View>
                        </MapView.Callout>
                    </MapView.Marker>
                ))}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        height: 60,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    map: {
        flex: 1,
    },
    callout: {
        height: 100,
        width: 200,
    },
    calloutInner: {
        padding: 5,
        flex: 1
    },
    markerTitle: {
        color: 'black'
    }
});

AppRegistry.registerComponent('NativeMapsGhostCallout', () => NativeMapsGhostCallout);
