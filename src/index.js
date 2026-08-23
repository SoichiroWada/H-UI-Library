console.log('index.js file');

function gen() {
    const timestamp = Date.now();
    const dateObject = new Date(timestamp);

    const day = dateObject.getDate();              // 1 - 31
    const month = dateObject.getMonth() + 1;       // 1 - 12 (getMonth() is 0-indexed, so Jan is 0)
    const year = dateObject.getFullYear();         // 4-digit year (e.g., 2026)

    return `Day: ${day}, Month: ${month}, Year: ${year}`;
}

console.log(gen());