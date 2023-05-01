import "../styles/Header.css";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";

const Header = () => {
  function generatePDF() {
    const input = document.querySelector(".resume");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new JsPDF("portrait", "pt", "a4");
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("report.pdf");
    });
  }

  return (
    <div className="header">
      <h1 className="app-Title">r/Resume Builder</h1>
      <div className="exportPDF" onClick={generatePDF}>
        Export as PDF
      </div>
    </div>
  );
};

export default Header;
