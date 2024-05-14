import './styles.css'
import MapChart from './Map'
import React from 'react'

const Map = ({ isChecked }) => {
  return (
    <>
      <div className="map-border">
        <h1 >asdaws</h1>
        <MapChart isChecked={isChecked} />
      </div>
    </>
  )
}

export default Map
