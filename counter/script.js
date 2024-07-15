function countText() {
    let text = document.getElementById('text-input').value;

    // Count words
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById('word-count').innerText = words.length;

    // Count characters
    document.getElementById('char-count').innerText = text.length;

    // Count numbers
    let numbers = text.match(/\d/g);
    document.getElementById('number-count').innerText = numbers ? numbers.length : 0;

    // Count special characters
    let specialChars = text.match(/[^a-zA-Z0-9\s]/g);
    document.getElementById('special-char-count').innerText = specialChars ? specialChars.length : 0;
}

