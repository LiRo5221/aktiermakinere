// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fin from "yahoo-finance2";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const start = Date.now();
  const data = await fin.quote(req.query.stock);
  const end = Date.now();
  console.log(`${req.query.stock} took ${end - start}ms`);
  res.status(200).json({
    data: {
      meta: {
        name: data.shortName,
        symbol: data.symbol,
        region: data.region,
        timezone: data.exchangeTimezoneName,
      },
      info: {
        price: data.regularMarketPrice,
        open: data.regularMarketOpen,
        high: data.regularMarketDayHigh,
        low: data.regularMarketDayLow,
        close: data.regularMarketPreviousClose,
        ask: data.ask,
        bid: data.bid,
      },
    },
  });
}
