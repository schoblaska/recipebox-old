// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/* https://github.com/PrismJS/prism-themes/blob/master/themes/prism-material-dark.css */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  color: #eee;\n  background: #2f2f2f;\n  font-family: Roboto Mono, monospace;\n  font-size: 1em;\n  line-height: 1.5em;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\ncode[class*=\"language-\"]::-moz-selection,\npre[class*=\"language-\"]::-moz-selection,\ncode[class*=\"language-\"] ::-moz-selection,\npre[class*=\"language-\"] ::-moz-selection {\n  background: #363636;\n}\n\ncode[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection, pre[class*=\"language-\"] ::-moz-selection {\n  background: #363636;\n}\n\ncode[class*=\"language-\"]::selection,\npre[class*=\"language-\"]::selection,\ncode[class*=\"language-\"] ::selection,\npre[class*=\"language-\"] ::selection {\n  background: #363636;\n}\n\n:not(pre) > code[class*=\"language-\"] {\n  white-space: normal;\n  border-radius: 0.2em;\n  padding: 0.1em;\n}\n\npre[class*=\"language-\"] {\n  overflow: auto;\n  position: relative;\n  margin: 0.5em 0;\n  padding: 1.25em 1em;\n}\n\n.language-css > code,\n.language-sass > code,\n.language-scss > code {\n  color: #fd9170;\n}\n\n[class*=\"language-\"] .namespace {\n  opacity: 0.7;\n}\n\n.token.atrule {\n  color: #c084fc; /* purple-400 */\n}\n\n.token.attr-name {\n  color: #ffcb6b;\n}\n\n.token.attr-value {\n  color: #a5e844;\n}\n\n.token.attribute {\n  color: #a5e844;\n}\n\n.token.boolean {\n  color: #c084fc; /* purple-400 */\n}\n\n.token.builtin {\n  color: #ffcb6b;\n}\n\n.token.cdata {\n  color: #80cbc4;\n}\n\n.token.char {\n  color: #80cbc4;\n}\n\n.token.class {\n  color: #ffcb6b;\n}\n\n.token.class-name {\n  color: #f2ff00;\n}\n\n.token.comment {\n  color: #616161;\n}\n\n.token.constant {\n  color: #c084fc; /* purple-400 */\n}\n\n.token.deleted {\n  color: #f87171; /* red-400 */\n}\n\n.token.doctype {\n  color: #616161;\n}\n\n.token.entity {\n  color: #f87171; /* red-400 */\n}\n\n.token.function {\n  color: #c084fc; /* purple-400 */\n}\n\n.token.hexcode {\n  color: #f2ff00;\n}\n\n.token.id {\n  color: #c084fc; /* purple-400 */\n  font-weight: bold;\n}\n\n.token.important {\n  color: #c084fc; /* purple-400 */\n  font-weight: bold;\n}\n\n.token.inserted {\n  color: #80cbc4;\n}\n\n.token.keyword {\n  color: #c084fc; /* purple-400 */\n}\n\n.token.number {\n  color: #fd9170;\n}\n\n.token.operator {\n  color: #22d3ee; /* cyan-400 */\n}\n\n.token.prolog {\n  color: #616161;\n}\n\n.token.property {\n  color: #80cbc4;\n}\n\n.token.pseudo-class {\n  color: #a5e844;\n}\n\n.token.pseudo-element {\n  color: #a5e844;\n}\n\n.token.punctuation {\n  color: #22d3ee; /* cyan-400 */\n}\n\n.token.regex {\n  color: #f2ff00;\n}\n\n.token.selector {\n  color: #f87171; /* red-400 */\n}\n\n.token.string {\n  color: #a5e844;\n}\n\n.token.symbol {\n  color: #c084fc; /* purple-400 */\n}\n\n.token.tag {\n  color: #f87171; /* red-400 */\n}\n\n.token.unit {\n  color: #fd9170;\n}\n\n.token.url {\n  color: #f87171; /* red-400 */\n}\n\n.token.variable {\n  color: #f87171; /* red-400 */\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}