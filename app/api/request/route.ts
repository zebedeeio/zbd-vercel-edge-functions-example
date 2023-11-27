import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const ZBD_BASE_URL = 'https://api.zebedee.io';
const ZBD_API_KEY = 'b7YW3s2JzZKGcXjIf5Dqof8wjKT2RuWr8';

export async function GET() {
  const res = await fetch(`${ZBD_BASE_URL}/v0/charges`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': `${ZBD_API_KEY}`,kcrane2487@zbd.gg
    },
    body: JSON.stringify({
      amount: '1000000', // 1000 satoshis (1,000,000 msats) -- ~$0.48
      description: 'Money at internet speed', // What is this payment request for?
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);recieve payment
