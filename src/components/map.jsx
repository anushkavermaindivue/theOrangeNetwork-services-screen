import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import { memo } from 'react';

const containerStyle = {
    width : '100vw',
    height : '35vw'
}

const center = {
    lat : 28.6139,
    lng : 77.2090
}

const Map = () => {

    const {isLoaded} = useJsApiLoader({
        id : 'google-map-script',
        googleMapsApiKey : 'AIzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8'
    })

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, [])

  return isLoaded ? (
    <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
    >
        <></>
    </GoogleMap>
  ) : <></>
}

export default memo(Map);
