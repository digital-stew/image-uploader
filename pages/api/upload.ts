import { NextApiRequest, NextApiResponse } from "next/types";
import formidable from "formidable";
import fs from "fs";

export default function upload(req: NextApiRequest, res: NextApiResponse) {
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

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err: Error, fields: any, files: formidable.File) => {
    console.log(files.image);
    saveFile(files.image);
  });
  res.status(200).json(true);
}

async function saveFile(file: formidable.File) {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public/uploaded/${file.originalFilename}`, data);
  await fs.unlinkSync(file.filepath);
  return;
}

function PATCH(req: NextApiRequest, res: NextApiResponse) {}
function DELETE(req: NextApiRequest, res: NextApiResponse) {}
function GET(req: NextApiRequest, res: NextApiResponse) {}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
