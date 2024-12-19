import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  // Parse the incoming request body
  const data = await request.json();

  // Create a new comment object that matches the structure in 'data.ts'
  const newComment = {
    id: comments.length + 1, // Increment the id based on the current length
    name: data.name || "Anonymous", // Default name or get it from the request body if available
    comment: data.text, // Use 'text' from the request body as 'comment'
  };

  // Push the new comment into the comments array
  comments.push(newComment);

  // Return the new comment as a response
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
