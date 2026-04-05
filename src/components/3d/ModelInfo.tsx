import { XIcon } from "lucide-react"
import { Dialog } from "radix-ui"
import { cn } from "@/lib/utils"

type Props = {
  ouvert: boolean
  onOpenChange: (o: boolean) => void
  titre: string
  description: string
}

// dialogue info partage entre les modeles 3d
export function ModelInfoDialog({ ouvert, onOpenChange, titre, description }: Props) {
  return (
    <Dialog.Root open={ouvert} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            "fixed top-[50%] left-[50%] z-50 grid w-[min(calc(100vw-2rem),28rem)] max-h-[min(85vh,32rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto border-2 border-primary/25 bg-white/95 p-6 shadow-2xl backdrop-blur-md",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          )}
        >
          <Dialog.Title className="pr-8 font-greek text-xl text-primary">{titre}</Dialog.Title>
          <Dialog.Description className="text-sm leading-relaxed text-foreground/85">{description}</Dialog.Description>
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
  )
}
