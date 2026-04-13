function getObjects(offset, charactersNumber) {
  const simulatedData = `
      {"id":1,"name":"Alice","active":true}
      {"id":2,"name":"Bob","active":false}
      {"id":3,"name":"Charlie","active":true}
      {"id":4,"name":"Dana","active":false}
      {"id":5,"name":"Eve","active":true}
  `.trim();
  return simulatedData.slice(offset, offset + charactersNumber);
}

class LineReader {
  chunkSize;
  lastPositionOffset;
  currentLine;
  nextLine;
  isEOF;

  constructor() {
    this.chunkSize = 14;
    this.lastPositionOffset = 0;
    this.currentLine = "";
    this.nextLine = "";
    this.isEOF = false;
  }
  
  next() {
    if (this.isEOF) {
      return null;
    }

    this.currentLine = this.nextLine;
    this.nextLine = "";

    while(true) {
      const dataChunk = getObjects(this.lastPositionOffset, this.chunkSize);
      this.lastPositionOffset += this.chunkSize;

      if (dataChunk.length === 0) {
        this.isEOF = true;
        break;
      }

      if (dataChunk.length === 0 && this.currentLine === null) {
        this.currentLine = null;
        break;
      }

      const dataChunks = dataChunk.split("\n");

      this.currentLine += dataChunks[0];

      if (dataChunks.length > 1) {
        this.nextLine += dataChunks[1];

        // correcting offset position
        this.lastPositionOffset -= this.chunkSize;
        this.lastPositionOffset += dataChunks[0].length + 1;
        this.lastPositionOffset += dataChunks[1].length;
        break;
      }
    }

    return this.currentLine;
  }
}

const lineReader = new LineReader();
while(true) {
  const line = lineReader.next();
  if (line === null) {
    break;
  }
  console.log(line);
}
