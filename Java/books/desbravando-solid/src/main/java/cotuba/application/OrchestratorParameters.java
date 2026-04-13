package cotuba.application;

import java.nio.file.Path;

public interface OrchestratorParameters {
  Path getMarkdownPath();
  String getFormat();
  Path getOutputPath();
}