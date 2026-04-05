import { Link, NavLink, useLocation } from "react-router-dom"
import { Box, FileText, Landmark } from "lucide-react"
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

const itemsNav = [
  { libelle: "L'Acropole", icon: Landmark, to: "/carte" as const },
  { libelle: "Reliques 3D", icon: Box, to: "/3d" as const },
  { libelle: "Archives", icon: FileText, to: "/article" as const },
]

interface AppSidebarProps {
  allerAcropole: () => void
}

export function AppSidebar({ allerAcropole }: AppSidebarProps) {
  const { pathname } = useLocation()
  const estActif = (to: string) => (to === "/carte" ? pathname === "/" || pathname === "/carte" : pathname === to)

  return (
    <Sidebar className="border-r border-primary/20 marble-texture shadow-xl">
      <SidebarHeader className="flex flex-col items-center justify-center border-b border-primary/30 px-6 py-10 bg-white/40 backdrop-blur-sm">
        <Link
          to="/"
          className="flex flex-col items-center justify-center outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 rounded-sm"
        >
          <Landmark className="mb-3 h-10 w-10 text-primary" />
          <h1 className="font-greek text-xl font-bold tracking-widest text-primary text-glow-gold">PArthenon</h1>
          <div className="mt-2 h-0.5 w-12 bg-primary/40" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="font-greek text-xs uppercase tracking-tighter text-muted-foreground/60 mb-4">
            Navigation sacrée
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {itemsNav.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton
                    asChild
                    isActive={estActif(item.to)}
                    className="group relative flex items-center gap-4 rounded-none border-l-2 border-transparent px-4 py-6 transition-all hover:border-primary hover:bg-primary/5 active:scale-95"
                  >
                    <NavLink
                      to={item.to}
                      onClick={item.to === "/carte" ? () => allerAcropole() : undefined}
                      className="flex w-full items-center gap-4"
                    >
                      <item.icon className="h-5 w-5 shrink-0 text-primary/60 transition-colors group-hover:text-primary" />
                      <span className="font-marcellus text-sm font-medium tracking-wide text-foreground/80 group-hover:text-foreground">
                        {item.libelle}
                      </span>
                      <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-primary/10 opacity-50" />
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="p-6 text-center">
        <p className="font-greek text-[10px] text-muted-foreground/40 tracking-widest">An MCMXXVI</p>
      </div>
    </Sidebar>
  )
}
