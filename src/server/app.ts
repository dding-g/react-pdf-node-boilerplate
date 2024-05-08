import express, { Request, Response, NextFunction } from "express";
import { createPdf } from "../pdf/renderer";

const app = express();

app.get(
  "/create-pdf",
  async (req: Request, res: Response, next: NextFunction) => {
    const readStream = await createPdf();

    res.contentType("application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=example.pdf");

    return readStream.pipe(res);
  }
);

app.listen("3000", () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 3000🛡️
  ################################################
`);
});
