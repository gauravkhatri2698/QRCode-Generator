import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {

  const [inputText, setInputText] = useState('');
  const [qrCodeText, setQRCodeText] = useState('');

  // generate QR code
  const generateQRCode = () => {
    setQRCodeText(inputText);
  }

  // download QR code
  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  return (
    <div className="App">
      <h3>Generate and download a QR code image in React</h3>
      <div className="qr-input">
        <input
          type="text"
          placeholder="Enter input"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <input
          type="button"
          value="Generate"
          onClick={generateQRCode}
        />
      </div>
      <div className='qrcode-generator'>
        <QRCode
          id="qrCodeEl"
          size={200}
          value={qrCodeText}
        />
      </div>
      <br />
      <div className='download-btn'>
        <input
          type="button"
          value="Download"
          onClick={downloadQRCode}
        />
      </div>
    </div>
  );
}

export default App;