import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "../pdf";

const App = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

export default App;
