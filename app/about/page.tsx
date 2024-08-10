import Link from "next/link";
import Image from 'next/image'

export default function About() {
    return (
        <>
            <main className="flex flex-col items-center justify-center bg-background text-foreground">
                <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid gap-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Phoenix Light Rail
                                Tracker</h1>
                            <p className="mt-3 text-lg text-muted-foreground">
                                Real-time location of Valley Metro light rail trains in Phoenix, Arizona.
                            </p>
                        </div>
                        <div className="leading-7 [&:not(:first-child)]:mt-6 mx-auto">
                            <p className={'text-center pt-4'}>
                                This project is not affiliated or endorsed with Valley Metro.
                            </p>
                        </div>
                    </div>
                </div>
                <Link href={'https://catenarymaps.org/'} target={'_blank'}>
                    <Image
                        src="/poweredby.png"
                        width={200}
                        height={500}
                        alt="Powered by Catenary"
                        className={'cursor-pointer'}
                    />
                </Link>
                <footer className="bottom-0 text-center m-5 text-default-500">
                    {"Made with ❤️ by "}
                    <Link
                        href={"https://twitter.com/@duckdoquack"}
                        className={'text-default-500'}
                        target="_blank"
                    >
                        @duckdoquack
                    </Link>
                    <br/>
                    <Link
                        href="https://github.com/quacksire/old-bart-cars-live"
                        target="_blank"
                        className={'m-2 text-default-500'}
                    >
                        Source
                    </Link>
                    <Link
                        href="https://ko-fi.com/quacksire"
                        target="_blank"
                        className={'m-2 text-default-500'}
                    >
                        Buy me a coffee ☕
                    </Link>
                </footer>
            </main>

        </>

    )
        ;
}
