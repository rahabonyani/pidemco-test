import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// To handle a GET request to /api
export async function POST(request: NextRequest) {
    const body = await request.json();
    const data = cookies().has('dayTasks') ? JSON.parse(cookies().get('dayTasks')?.value!) : []

    try {
        cookies().set('dayTasks', JSON.stringify([...data, body.task]))
        return Response.json({ data: [...data, body.task] }, { status: 200 });
    } catch (err) {
        return Response.json({ message: "Something went wrong" }, { status: 500 });
    }
}
