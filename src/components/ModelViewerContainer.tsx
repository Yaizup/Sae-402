import { useState } from "react"
import { ParthenonModel } from "./3d/ParthenonModel"
import { LanceModel } from "./3d/LanceModel"
import { BouclierModel } from "./3d/BouclierModel"
import { Button } from "@/components/ui/button"

// container 3 mods partagés
export function ModelViewerContainer() {
  const [ordreMod, setOrdreMod] = useState<("parthenon" | "lance" | "bouclier")[]>([
    "parthenon",
    "lance",
    "bouclier",
  ])

  const affMod = (model: "parthenon" | "lance" | "bouclier") => {
    if (model === "parthenon") return <ParthenonModel />
    if (model === "lance") return <LanceModel />
    return <BouclierModel />
  }

  const [modP, modH, modB] = ordreMod
  const switchModP = (smallModel: "parthenon" | "lance" | "bouclier") =>
    setOrdreMod((currentModels) => [smallModel, ...currentModels.filter((model) => model !== smallModel)])

  return (
    <div className="relative h-full w-full grid grid-cols-[3fr_1fr] gap-6 p-8">
      {/* gauche: mod princ (3/4) */}
      <div className="relative border-2 border-primary/30 overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm group">
        <div className="absolute top-0 left-0 w-full h-1 gold-gradient z-10" />
        <div className="absolute bottom-0 right-0 p-4 z-10 pointer-events-none">
           <span className="font-greek text-xs text-primary/40 tracking-[0.4em] uppercase">Observation Principale</span>
        </div>
        {affMod(modP)}
      </div>

      {/* droite: pile secondaires */}
      <div className="grid grid-rows-2 gap-6">
        {[modH, modB].map((typeMod, idx) => (
          <div key={idx} className="relative border border-primary/20 bg-white/30 backdrop-blur-sm overflow-hidden shadow-lg hover:border-primary/50 transition-all group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
            <div className="absolute right-3 top-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button 
                variant="outline" 
                size="sm" 
                className="font-greek text-[10px] tracking-tighter bg-white/80 hover:bg-primary hover:text-white border-primary/30 rounded-none px-3 h-7"
                onClick={() => switchModP(typeMod)}
              >
                Expansion
              </Button>
            </div>
            <div className="absolute bottom-2 left-4 z-10">
               <span className="font-greek text-[9px] text-primary/60 tracking-widest uppercase">{typeMod}</span>
            </div>
            {affMod(typeMod)}
          </div>
        ))}
      </div>
    </div>
  )
}
