import CodeMirror from 'codemirror/lib/codemirror'

CodeMirror.defineExtension("autoFormatRange", function (from, to) {
  const cm = this;
  const outer = cm.getMode(), text = cm.getRange(from, to).split("\n");
  const state = CodeMirror.copyState(outer, cm.getTokenAt(from).state);
  const tabSize = cm.getOption("tabSize");

  let out = "", lines = 0, atSol = from.ch === 0;

  function newline() {
    out += "\n";
    atSol = true;
    ++lines;
  }

  for (var i = 0; i < text.length; ++i) {
    var stream = new CodeMirror.StringStream(text[i], tabSize);
    while (!stream.eol()) {
      var inner = CodeMirror.innerMode(outer, state);
      var style = outer.token(stream, state), cur = stream.current();
      stream.start = stream.pos;
      if (!atSol || /\S/.test(cur)) {
        out += cur;
        atSol = false;
      }
      if (!atSol && inner.mode.newlineAfterToken &&
        inner.mode.newlineAfterToken(style, cur, stream.string.slice(stream.pos) || text[i+1] || "", inner.state))
        newline();
    }
    if (!stream.pos && outer.blankLine) outer.blankLine(state);
    if (!atSol && i < text.length - 1) newline();
  }

  cm.operation(function () {
    cm.replaceRange(out, from, to);
    for (var cur = from.line + 1, end = from.line + lines; cur <= end; ++cur)
      cm.indentLine(cur, "smart");
  });
});
