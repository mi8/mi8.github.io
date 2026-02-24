function renderMarkdown(text) {
  var s = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  var codeBlocks = [];
  s = s.replace(/```(?:\w*)\n([\s\S]*?)```/g, function (m, code) {
    codeBlocks.push('<pre><code>' + code + '</code></pre>');
    return '%%CB' + (codeBlocks.length - 1) + '%%';
  });
  var inlineCodes = [];
  s = s.replace(/`([^`]+)`/g, function (m, code) {
    inlineCodes.push('<code>' + code + '</code>');
    return '%%IC' + (inlineCodes.length - 1) + '%%';
  });
  s = s.replace(/^### (.+)$/gm, '<strong>$1</strong>');
  s = s.replace(/^## (.+)$/gm, '<strong>$1</strong>');
  s = s.replace(/^# (.+)$/gm, '<strong>$1</strong>');
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (m, t, url) {
    if (/^https?:\/\//i.test(url) || url.charAt(0) === '/' || url.charAt(0) === '#') {
      return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + t + '</a>';
    }
    return t;
  });
  s = s.replace(/(^|\n)((?:- .+(?:\n|$))+)/g, function (m, pre, list) {
    var items = list.trim().split('\n').map(function (li) {
      return '<li>' + li.replace(/^- /, '') + '</li>';
    }).join('');
    return pre + '<ul>' + items + '</ul>';
  });
  s = s.replace(/(^|\n)((?:\d+\. .+(?:\n|$))+)/g, function (m, pre, list) {
    var items = list.trim().split('\n').map(function (li) {
      return '<li>' + li.replace(/^\d+\. /, '') + '</li>';
    }).join('');
    return pre + '<ol>' + items + '</ol>';
  });
  s = s.replace(/%%IC(\d+)%%/g, function (m, i) {
    return inlineCodes[parseInt(i)];
  });
  s = s.replace(/%%CB(\d+)%%/g, function (m, i) {
    return codeBlocks[parseInt(i)];
  });
  return s;
}
