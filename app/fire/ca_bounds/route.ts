import {NextResponse} from "next/server";

// fore dynamic
export const dynamic = 'force-dynamic'
export const runtime = 'edge';
export async function GET() {



    try {
        const response = await fetch("https://raw.githubusercontent.com/catenarytransit/fire-bounds-cache/refs/heads/main/data/ca_fire_bounds.json", {});
        if (!response.ok) {
            const error = new Error(`${response.url}: ${response.status} ${response.statusText}`);
            return NextResponse.error();
        }
        const firebounds = await response.json();

        // this data updates every hour, cache it for 1 hour

        // @ts-ignore
        return new Response(JSON.stringify(firebounds), {
            headers: {
                "content-type": "application/json",
                "cache-control": "public, max-age=3600"
            },
        })
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }

}
