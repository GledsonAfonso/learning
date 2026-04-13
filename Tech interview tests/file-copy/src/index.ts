import { FileOps } from "@root/file-ops";

(async () => {  
  const file1Ops = new FileOps("original-file.txt");
  const file2Ops = new FileOps("file-copy.txt");

  let startReadingPosition = 0;

  while(true) {
    const {
      buffer,
      lastPosition,
      bytesRead,
    } = await file1Ops.getDataChunk({
      startReadingPosition,
      bufferSize: 10,
    });
  
    if (bytesRead === 0) {
      break;
    }

    await file2Ops.append({
      buffer,
      bytesRead,
    });
  
    startReadingPosition = lastPosition;
  }
})();
