import react, { Component } from "react";
import "../styles/Header.css";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";

class Header extends Component {
  constructor(props) {
    super(props);

    this.generatePDF = this.generatePDF.bind(this);
  }

  generatePDF() {
    const input = document.querySelector(".resume");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new JsPDF("portrait", "pt", "a4");
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("report.pdf");
    });
  }

  render() {
    return (
      <div className="header">
        <h1 className="app-Title">r/Resume Builder</h1>
        <div className="exportPDF" onClick={this.generatePDF}>
          Export as PDF
        </div>
      </div>
    );
  }
}

export default Header;
