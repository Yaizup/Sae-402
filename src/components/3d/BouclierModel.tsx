import "@google/model-viewer"
import { useState } from "react"
import { ModelInfoDialog } from "./ModelInfo"

const bouclierSrc = new URL("../../assets/bouclier.glb", import.meta.url).href

export function BouclierModel() {
  const [info, setInfo] = useState(false)

  return (
    <>
      <model-viewer src={bouclierSrc} alt="Bouclier" camera-controls className="h-full w-full">
        <button
          type="button"
          slot="hotspot-centre"
          data-position="-3m 1m 0m"
          data-normal="0m 0m 0m"
          className="h-3 w-3 cursor-pointer rounded-full border-2 border-amber-400 bg-amber-500/90 shadow-md outline-none ring-amber-300/50 hover:scale-125 hover:ring-2"
          aria-label="centre du bouclier"
          onClick={(e) => {
            e.stopPropagation()
            setInfo(true)
          }}
        />
      </model-viewer>
      <ModelInfoDialog ouvert={info} onOpenChange={setInfo} titre="Bouclier" description="Le bouclier réalisé." />
    </>
  )
}
