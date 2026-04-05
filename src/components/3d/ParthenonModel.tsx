import "@google/model-viewer"
import { useState } from "react"
import { ModelInfoDialog } from "./ModelInfo"

const parthUrl = new URL("../../assets/sae402vgood.glb", import.meta.url).href

export function ParthenonModel({ onPorteClick }: { onPorteClick?: () => void } = {}) {
  const [info, setInfo] = useState(false)

  return (
    <>
      <model-viewer src={parthUrl} alt="Parthénon" camera-controls auto-rotate className="h-full w-full">
        <button
          type="button"
          slot="hotspot-porte"
          data-position="-7.27m 7.71m 23.0m"
          data-normal="0m 0m 1m"
          className="h-3 w-3 cursor-pointer rounded-full border-2 border-amber-400 bg-amber-500/90 shadow-md outline-none ring-amber-300/50 hover:scale-125 hover:ring-2"
          aria-label="porte"
          onClick={(e) => {
            e.stopPropagation()
            setInfo(true)
            onPorteClick?.()
          }}
        />
      </model-viewer>
      <ModelInfoDialog
        ouvert={info}
        onOpenChange={setInfo}
        titre="La porte du parthénon"
        description="La porte du parthénon mesure 10 mètres de haut et 5 mètres de large, ce qui était gigantesque pour l'époque."
      />
    </>
  )
}
