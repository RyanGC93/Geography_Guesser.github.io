import styles from './styles.module.css'
import './styles.css'
import MapChart from './Map'
import React, { useState } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Map = ({ isChecked }) => {
  const [content, setContent] = useState('')
  return (
    <>
      <div className="map-border">
        <MapChart isChecked={isChecked} setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </>
  )
}

export default Map
