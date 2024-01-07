"use server";

export async function GET(request: Request) {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    return Response.json({ success: true, data });
  } catch (error) {
    console.log("error", error);
    return Response.json({ success: false });
  }
}
