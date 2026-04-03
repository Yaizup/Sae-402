import { useEffect } from "react"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const templeIcon = L.divIcon({
  html: `
    <div class="flex items-center justify-center p-2 rounded-none bg-primary text-white shadow-lg border border-white/40 ring-4 ring-primary/20">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark"><line x1="3" x2="21" y1="22"/><line x1="6" x2="6" y1="18"/><line x1="10" x2="10" y1="18"/><line x1="14" x2="14" y1="18"/><line x1="18" x2="18" y1="18"/><path d="M12 2 2 7v1h20V7Z"/><path d="M2 11h20v2H2Z"/></svg>
    </div>
  `,
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})
L.Marker.prototype.options.icon = templeIcon

const COORD_PARTH: [number, number] = [37.9715, 23.7266]

function CtrlCarte({
  coordCible,
  trigVol,
}: {
  coordCible: [number, number] | null
  trigVol: number
}) {
  const carte = useMap()
  useEffect(() => {
    if (coordCible && trigVol > 0) {
      carte.setView(coordCible, 16, { animate: false })
    }
  }, [carte, coordCible, trigVol])
  return null
}

interface MapProps {
  coordCible?: [number, number] | null
  trigVol?: number
}

export function Map({ coordCible = null, trigVol = 0 }: MapProps) {
  return (
    <div className="h-full w-full relative group">
      <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
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
        <Marker position={COORD_PARTH} />
        <CtrlCarte coordCible={coordCible} trigVol={trigVol} />
      </MapContainer>
      
      {/* Coins décoratifs */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40 z-20 pointer-events-none" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40 z-20 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40 z-20 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40 z-20 pointer-events-none" />
    </div>
  )
}
