export function compileRegex(input, flags = '') {
    try { return input ? new RegExp(input, flags) : null; }
    catch { return null; }
}

export function highligh(text, re) {
    if (!re) return text;
    return text.replace(re, m => `<mark>${m}</mark>`);
}