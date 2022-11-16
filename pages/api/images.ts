import { NextApiRequest, NextApiResponse } from "next/types";
import { db } from "../../components/sqlite";

export interface dbImage {
  fileName: string;
  uuid: string;
}

function GET(req: NextApiRequest, res: NextApiResponse) {
  db.all("SELECT * from images", (err, rows: dbImage[]) => {
    if (err) console.error(err);
    res.status(200).json(rows);
  });
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

function PATCH(_req: NextApiRequest, _res: NextApiResponse) {}
function DELETE(_req: NextApiRequest, _res: NextApiResponse) {}
function POST(req: NextApiRequest, res: NextApiResponse) {}

export default function image(req: NextApiRequest, res: NextApiResponse) {
  req.method === "POST"
    ? POST(req, res)
    : req.method === "PATCH"
    ? PATCH(req, res)
    : req.method === "DELETE"
    ? DELETE(req, res)
    : req.method === "GET"
    ? GET(req, res)
    : res.status(404).send("");
}
