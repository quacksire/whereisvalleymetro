import {Info, TramFront } from "lucide-react"
import Link from "next/link"
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/theme-provider";

export default function Navbar() {
    return (
        <header className="absolute sticky z-10 top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav
                className="flex-col gap-6 text-lg font-medium">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base w-max"
                >
                    <TramFront/>
                    <span className="text-foreground">Where is Valley Metro?</span>
                </Link>
            </nav>

            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <div className="ml-auto flex-initial grid grid-cols-2 gap-2">
                    <ModeToggle />

                        <Button variant="ghost" asChild size="icon">
                            <Link href={'/about'}>
                                <Info />
                            </Link>
                        </Button>

                </div>

            </div>
        </header>
    )
}
