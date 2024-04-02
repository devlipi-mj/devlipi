import Prism, { languages } from 'prismjs';

export const devLipi = languages.extend("clike",{
  'comment': {
    pattern: /->[\s\S]*?<-/,
    greedy: true
  },
  'string': {
    pattern: /'(?:\\.|[^\\'])*'/,
    greedy: true
  },
  'keyword': /\b(yadi|anyatha|kriya|yavat)\b/,
  'numeric': /\b\d+\b/,
  'variable': /\b(?:@)?\w+\b/,
  'entity': /\b(prakashan)\b|\b\w+(?=\|.*?\|)/
});

Prism.languages.devLipi = devLipi;

Prism.languages.insertBefore('devLipi', 'string', {
  'escape-char': {
    pattern: /\\./
  }
});