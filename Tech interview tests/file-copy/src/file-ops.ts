import fs from "fs/promises";

const BUFFER_CHUNK_BYTES_SIZE = 10;

interface GetDataChunkPayload {
  startReadingPosition?: number;
  bufferSize?: number;
}

interface GetDataChunkResponse {
  buffer: Buffer;
  lastPosition: number;
  bytesRead: number;
}

interface WriteAtEOFPayload {
  buffer: Buffer;
  bytesRead: number;
}

export class FileOps {
  path: string;

  constructor (path: string) {
    this.path = path;
  }

  async getDataChunk({
    startReadingPosition = 0,
    bufferSize = BUFFER_CHUNK_BYTES_SIZE,
  }: GetDataChunkPayload): Promise<GetDataChunkResponse> {
    let chunkBuffer = Buffer.alloc(bufferSize);

    const fileHandler = await fs.open(this.path, "r");
    const {
      buffer,
      bytesRead,
    } = await fileHandler.read({
      buffer: chunkBuffer,
      offset: 0, // where to start writing in the buffer; always at the very beginning in our case
      position: startReadingPosition,
      length: bufferSize, // size of the chunk to read from the original file per call
    });

    console.log("---");
    console.log(bytesRead === 0 ? "Empty buffer" : buffer.toString('utf8', 0, bytesRead));
    console.log("---");

    fileHandler.close();

    return {
      buffer,
      lastPosition: startReadingPosition + bufferSize,
      bytesRead,
    };
  }

  async append({
    buffer,
    bytesRead,
  }: WriteAtEOFPayload): Promise<void> {
    await fs.appendFile(
      this.path,
      buffer.subarray(0, bytesRead), // this is to prevent file corruption. If we pass only the buffer it can append unwanted characters at the EOF, corrupting it in the process
    );
  }
}
