import { useEffect } from "react"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const iconePoint = L.divIcon({
  className: "",
  html: '<span style="display:block;width:12px;height:12px;border-radius:9999px;background:#2563eb;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.25)"></span>',
  iconSize: [12, 12],
  iconAnchor: [6, 6],
})

const COORD_PARTH: [number, number] = [37.9715, 23.7266]

function CtrlCarte({ trigVol }: { trigVol: number }) {
  const carte = useMap()
  useEffect(() => {
    if (trigVol > 0) carte.setView(COORD_PARTH, 16, { animate: false })
  }, [carte, trigVol])
  return null
}

export function Map({ trigVol = 0 }: { trigVol?: number }) {
  return (
    <div className="group relative h-full w-full">
      <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
      <MapContainer
        center={COORD_PARTH}
        zoom={16}
        scrollWheelZoom={true}
        className="h-full w-full grayscale-[0.2] sepia-[0.3] contrast-[1.1] brightness-[0.95]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={COORD_PARTH} icon={iconePoint} />
        <CtrlCarte trigVol={trigVol} />
      </MapContainer>
    </div>
  )
}
