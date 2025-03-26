function countWords(text) {
    if (!text.trim()) return 0;
    const words = text.trim().split(/\s+/);
    return words.length;
}

const input = document.getElementById("inputText");
const button = document.getElementById("countButton");
const result = document.getElementById("wordCount");

button.addEventListener("click", () => {
    const text = input.value;
    const wordCount = countWords(text);
    result.textContent = `Words: ${wordCount}`;
});