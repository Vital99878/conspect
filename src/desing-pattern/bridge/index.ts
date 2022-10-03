export interface UIToolkit {
  drawBorder(): void;
  drawImage(src: string): void;
  drawText(text: string): void;
}

abstract class UIElement {
  protected constructor(public toolkit: UIToolkit) {}
  abstract render(): void;
}

class TextElement extends UIElement {
  constructor(public text: string, toolkit: UIToolkit) {
    super(toolkit);
  }
  render(): void {
    this.toolkit.drawText(this.text);
  }
}

class ImageElement extends UIElement {
  constructor(public src: string, toolkit: UIToolkit) {
    super(toolkit);
  }
  render(): void {
    this.toolkit.drawImage(this.src);
  }
}

class SvgToolkit implements UIToolkit {
  drawBorder(): void {}

  drawImage(src: string): void {}

  drawText(text: string): void {}
}

class TextToolkit implements UIToolkit {
  drawBorder(): void {}

  drawImage(src: string): void {}

  drawText(text: string): void {}
}

// client code
let svgToolkit = new SvgToolkit();
let textToolkit = new TextToolkit();

let imageElement = new ImageElement('foo.jpg', svgToolkit);
let textElement = new TextElement('bar', textToolkit);
imageElement.render();
textElement.render();
