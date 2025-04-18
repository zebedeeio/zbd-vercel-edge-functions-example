import { NextResponse } from 'next/server';
import ZbdPayments from "@zbddev/payments-sdk";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const ZBD_API_KEY = 'b7YW3s2JzZKGcXjIf5Dqof8wjKT2RuWr8';

export async function GET() {
  const client = new ZbdPayments({
    apikey: ZBD_API_KEY,
  });

  const data = await client.lightningCharges.create({
      amount: "100000", // 100 satoshis (100,000 msats)
      description: "Vercel Edge Functions + ZBD Payments",
      callbackUrl: "https://your-app.com/callback",
    });

  return NextResponse.json(data);
}
