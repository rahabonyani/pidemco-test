import { cookies } from "next/headers";

// To handle a GET request to /api
export async function GET() {
    try {
        const data = cookies().has('monthTasks') ? JSON.parse(cookies().get('monthTasks')?.value!) : []
        return Response.json({ data }, { status: 200 });

    } catch (err) {
        return Response.json({ message: "Something went wrong" }, { status: 500 });
    }
}
