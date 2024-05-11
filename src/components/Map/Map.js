import React from 'react'
import {memo} from 'react'
 import {
  useZoomPan,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps'

let geoUrl = null // Declare a global variable

import('./features.json')
  .then((data) => {
    geoUrl = data.default // Assign the JSON data to the global variable
    console.log(geoUrl) // Use or log the data
  })
  .catch((error) => console.error('Error loading JSON:', error))

// coordinates are stored as >> [lon,lat]
const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + 'Bn'
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + 'M'
  } else {
    return Math.round(num / 100) / 10 + 'K'
  }
}

const CustomZoomableGroup = ({ children, ...restProps }) => {
  const { mapRef, transformString, position } = useZoomPan(restProps)
  return (
    <g ref={mapRef}>
      <rect fill="transparent" />
      <g transform={transformString}>{children(position)}</g>
    </g>
  )
}

const MapChart = ({  isChecked }) => {
  return (
    <>
      <div>
        <ComposableMap data-tip="" projectionConfig={{ scale: 220 }}>
          <CustomZoomableGroup center={[0, 0]}>
            {(position) => (
              <>
                <Geographies geography={geoUrl}>
                  console.log(geographies)
                  {({ geographies }) =>
                    geographies.map(
                      (geo) => (
                        console.log(geo, 'geo'),
                        (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => {
                              console.log(geo, 'geo')
                            }}
                            style={{
                              default: {
                                fill: '#D6D6DA',
                                outline: 'none',
                              },
                              hover: {
                                fill: '#F53',
                                outline: 'none',
                              },
                              pressed: {
                                fill: '#E42',
                                outline: 'none',
                              },
                            }}
                          />
                        )
                      )
                    )
                  }
                </Geographies>
              </>
            )}
          </CustomZoomableGroup>
        </ComposableMap>
      </div>
    </>
  )
}

export default memo(MapChart)
