package cotuba.application;

import cotuba.domain.Ebook;
import cotuba.epub.EpubGenerator;
import cotuba.pdf.PdfGenerator;

public interface EbookGenerator {
  void generate(Ebook ebook);
  
  static EbookGenerator create(String format) {
    if ("pdf".equalsIgnoreCase(format)) {
      return new PdfGenerator();
    } else if ("epub".equalsIgnoreCase(format)) {
      return new EpubGenerator();
    } else {
      throw new IllegalArgumentException("Invalid ebook format: " + format);
    }
  }
}
