import ReactPDF, { renderToStream } from "@react-pdf/renderer";
import { MyDocument } from "./index";

ReactPDF.render(<MyDocument />, `./example.pdf`);

export async function createPdf() {
  return await renderToStream(<MyDocument />);
}
