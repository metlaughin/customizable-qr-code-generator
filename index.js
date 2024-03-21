const QRCode = require('qrcode');
const { createCanvas } = require('canvas');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

/**
 * Generates a customizable QR code image.
 * @param {string} text - The text to encode in the QR code.
 * @param {object} options - Options for customizing the QR code.
 * @param {number} [options.size=200] - The size of the QR code (width and height).
 * @param {number} [options.margin=4] - The margin around the QR code.
 * @param {string} [options.darkColor='#000000'] - The color of the dark modules in the QR code.
 * @param {string} [options.lightColor='#ffffff'] - The color of the light modules in the QR code.
 * @param {string} [options.errorCorrectionLevel='M'] - The error correction level for the QR code.
 * @returns {string} - The data URL of the generated QR code image.
 * @throws {Error} - If an error occurs during QR code generation.
 */
const generateQRCode = async (text, options = {}) => {
  const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
  global.document = dom.window.document;
  const canvas = createCanvas(options.size || 200, options.size || 200);
  try {
    await QRCode.toCanvas(canvas, text, {
      width: options.size || 200,
      margin: options.margin || 4,
      color: {
        dark: options.darkColor || '#000000',
        light: options.lightColor || '#ffffff'
      },
      errorCorrectionLevel: options.errorCorrectionLevel || 'M'
    });
    return canvas.toDataURL();
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
};

module.exports = { generateQRCode };
