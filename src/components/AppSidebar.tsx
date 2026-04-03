import { Map, Box, FileText, Landmark } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

// elements de la sidebar
const itemsNav = [
  { libelle: "L'Acropole", icon: Landmark, action: "parth-carte" },
  { libelle: "Reliques 3D", icon: Box, action: "parth-3d" },
  { libelle: "Archives", icon: FileText, action: "parth-article" },
]

interface AppSidebarProps {
  surNav: (action: string) => void
}

export function AppSidebar({ surNav }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-primary/20 marble-texture shadow-xl">
      <SidebarHeader className="flex flex-col items-center justify-center border-b border-primary/30 px-6 py-10 bg-white/40 backdrop-blur-sm">
        <Landmark className="mb-3 h-10 w-10 text-primary" />
        <h1 className="font-greek text-xl font-bold tracking-widest text-primary text-glow-gold">
          PArthenon
        </h1>
        <div className="mt-2 h-0.5 w-12 bg-primary/40" />
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="font-greek text-xs uppercase tracking-tighter text-muted-foreground/60 mb-4">
            Navigation sacrée
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {itemsNav.map((item) => (
                <SidebarMenuItem key={item.action}>
                  <SidebarMenuButton
                    onClick={() => surNav(item.action)}
                    className="group relative flex items-center gap-4 rounded-none border-l-2 border-transparent px-4 py-6 transition-all hover:border-primary hover:bg-primary/5 active:scale-95"
                  >
                    <item.icon className="h-5 w-5 text-primary/60 transition-colors group-hover:text-primary" />
                    <span className="font-marcellus text-sm font-medium tracking-wide text-foreground/80 group-hover:text-foreground">
                      {item.libelle}
                    </span>
                    <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-primary/10 opacity-50" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="p-6 text-center">
         <p className="font-greek text-[10px] text-muted-foreground/40 tracking-widest">
           An MCMXXVI
         </p>
      </div>
    </Sidebar>
  )
}
