import "@google/model-viewer"
import { XIcon } from "lucide-react"
import { Dialog } from "radix-ui"
import { useState } from "react"
import { cn } from "@/lib/utils"

const parthUrl = new URL("../../assets/sae402vgood.glb", import.meta.url).href

export function ParthenonModel({ onPorteClick }: { onPorteClick?: () => void } = {}) {
  const [infoPorte, setInfoPorte] = useState(false)
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
          onClick={(e) => { e.stopPropagation(); setInfoPorte(true); onPorteClick?.() }}
        />
      </model-viewer>
      <Dialog.Root open={infoPorte} onOpenChange={setInfoPorte}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content
            className={cn(
              "fixed top-[50%] left-[50%] z-50 grid w-[min(calc(100vw-2rem),28rem)] max-h-[min(85vh,32rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto border-2 border-primary/25 bg-white/95 p-6 shadow-2xl backdrop-blur-md",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            )}
          >
            <Dialog.Title className="pr-8 font-greek text-xl text-primary">La porte du parthénon</Dialog.Title>
            <Dialog.Description className="text-sm leading-relaxed text-foreground/85">
              La porte du parthénon mesure 10 mètres de haut et 5 mètres de large, ce qui était gigantesque pour l'époque. 
            </Dialog.Description>
            <Dialog.Close
              type="button"
              className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden"
              aria-label="fermer"
            >
              <XIcon className="size-4" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
