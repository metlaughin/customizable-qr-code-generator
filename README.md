## customizable-qr-code-generator

A customizable QR code generator library for Node.js.

### Installation

```bash
npm install customizable-qr-code-generator
```

### Usage

```javascript
const { generateQRCode } = require('customizable-qr-code-generator');

(async () => {
  try {
    const qrCodeDataURL = await generateQRCode('Your text here', {
      size: 200, // Width and height of the QR code
      margin: 4, // Margin around the QR code
      darkColor: '#000000', // Color of the dark modules
      lightColor: '#ffffff', // Color of the light modules
      errorCorrectionLevel: 'M' // Error correction level
    });
    console.log('Generated QR code data URL:', qrCodeDataURL);
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
})();
```

### API

#### `generateQRCode(text, options)`

Generates a customizable QR code image.

- `text` (string): The text to encode in the QR code.
- `options` (object, optional): Options for customizing the QR code.
  - `size` (number, default: 200): The size of the QR code (width and height).
  - `margin` (number, default: 4): The margin around the QR code.
  - `darkColor` (string, default: '#000000'): The color of the dark modules in the QR code.
  - `lightColor` (string, default: '#ffffff'): The color of the light modules in the QR code.
  - `errorCorrectionLevel` (string, default: 'M'): The error correction level for the QR code.

Returns the data URL of the generated QR code image.

Throws an error if an error occurs during QR code generation.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
