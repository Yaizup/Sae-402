import { useState } from "react"
import { Map } from "@/components/Map"
import { ModelViewerContainer } from "@/components/ModelViewerContainer"
import { Archive } from "@/components/Archive"
import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const COORD_PARTH: [number, number] = [37.9715, 23.7266]

function App() {
  const [trigVol, setTrigVol] = useState(1)
  const [vueAct, setVueAct] = useState<"carte" | "3d" | "article">("carte")
  const [titreP, setTitreP] = useState("Parthénon - Carte")

  // gestion nav via sidebar
  const gererNav = (action: string) => {
    if (action === "parth-carte") {
      setTitreP("Parthénon - Carte")
      setTrigVol((n) => n + 1)
      setVueAct("carte")
    } else if (action === "parth-3d") {
      setTitreP("Parthénon - 3D")
      setVueAct("3d")
    } else if (action === "parth-article") {
      setTitreP("Parthénon - Article")
      setVueAct("article")
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar surNav={gererNav} />
      <SidebarInset className="overflow-hidden flex flex-col bg-[url('https://www.transparenttextures.com/patterns/white-marble.png')]">
        <header className="flex h-20 shrink-0 items-center justify-between gap-4 border-b-2 border-primary/20 px-8 bg-white/60 backdrop-blur-md z-20 shadow-sm relative">
          <div className="absolute top-0 left-0 right-0 h-1 gold-gradient opacity-80" />
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hover:text-primary transition-colors h-10 w-10 text-primary/70" />
            <Separator orientation="vertical" className="h-8 bg-primary/20" />
            <h2 className="font-greek text-lg font-bold tracking-[0.2em] text-primary truncate max-w-[300px]">
              {titreP}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            {vueAct !== "carte" && (
              <Button
                variant="outline"
                className="font-greek text-xs tracking-widest border-primary/20 hover:bg-primary/5 hover:text-primary transition-all rounded-none px-6"
                onClick={() => {
                  setVueAct("carte")
                  setTrigVol((v) => v + 1)
                  setTitreP("Parthénon - Carte")
                }}
              >
                Retour à l'Acropole
              </Button>
            )}
            {vueAct === "carte" && (
              <Button
                variant="outline"
                className="font-greek text-xs tracking-widest border-primary/20 hover:bg-primary/5 hover:text-primary transition-all rounded-none px-6"
                onClick={() => setTrigVol((v) => v + 1)}
              >
                Recentrer sur le Parthénon
              </Button>
            )}
          </div>


        </header>
        <main className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none border-t border-primary/5 shadow-[inset_0_20px_50px_rgba(184,134,11,0.05)] z-10" />
          {vueAct === "3d" && <ModelViewerContainer />}
          {vueAct === "article" && <Archive />}
          {vueAct === "carte" && <Map coordCible={COORD_PARTH} trigVol={trigVol} />}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
