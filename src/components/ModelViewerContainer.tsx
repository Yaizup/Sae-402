import { useState } from "react"
import { ParthenonModel } from "./3d/ParthenonModel"
import { LanceModel } from "./3d/LanceModel"
import { BouclierModel } from "./3d/BouclierModel"
import { Button } from "@/components/ui/button"

type Mod = "parthenon" | "lance" | "bouclier"

const TOUS: Mod[] = ["parthenon", "lance", "bouclier"]

function renduMod(m: Mod) {
  if (m === "parthenon") return <ParthenonModel />
  if (m === "lance") return <LanceModel />
  return <BouclierModel />
}

export function ModelViewerContainer() {
  const [principal, setPrincipal] = useState<Mod>("parthenon")
  const secondaires = TOUS.filter((x) => x !== principal)

  return (
    <div className="relative grid h-full w-full grid-cols-[3fr_1fr] gap-6 p-8">
      <div className="relative overflow-hidden border-2 border-primary/30 bg-white/20 shadow-2xl backdrop-blur-sm">
        <div className="absolute top-0 left-0 z-10 h-1 w-full gold-gradient" />
        {renduMod(principal)}
      </div>
      <div className="grid grid-rows-2 gap-6">
        {secondaires.map((m) => (
          <div key={m} className="group relative overflow-hidden border border-primary/20 bg-white/30 shadow-lg backdrop-blur-sm">
            <div className="absolute top-0 left-0 z-20 h-full w-1 bg-primary/20 transition-colors group-hover:bg-primary" />
            <div className="absolute top-3 right-3 z-20 opacity-0 transition-opacity group-hover:opacity-100">
              <Button
                variant="outline"
                size="sm"
                className="h-7 rounded-none border-primary/30 bg-white/80 px-3 font-greek text-[10px] tracking-tighter hover:bg-primary hover:text-white"
                onClick={() => setPrincipal(m)}
              >
                Agrandir
              </Button>
            </div>
            {renduMod(m)}
          </div>
        ))}
      </div>
    </div>
  )
}
