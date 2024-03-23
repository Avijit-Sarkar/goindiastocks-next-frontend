import { marketData } from "@/data/market-stories";

export async function GET() {
  return Response.json(marketData);
}
