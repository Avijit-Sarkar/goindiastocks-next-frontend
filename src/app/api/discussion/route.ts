import { discussionData } from "@/data/discussion";

export async function GET() {
  return Response.json(discussionData);
}
