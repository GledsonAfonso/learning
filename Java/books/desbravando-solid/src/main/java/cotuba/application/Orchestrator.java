package cotuba.application;

import cotuba.domain.Ebook;
import cotuba.md.HtmlRender;

public class Orchestrator {
  public void execute(OrchestratorParameters parameters) {
    var htmlRender = new HtmlRender();
    var chapters = htmlRender.render(parameters.getMarkdownPath());

    var ebook = new Ebook();
    ebook.setFormat(parameters.getFormat());
    ebook.setOutputPath(parameters.getOutputPath());
    ebook.setChapters(chapters);

    var ebookGenerator = EbookGenerator.create(parameters.getFormat());
    ebookGenerator.generate(ebook);
  }
}
