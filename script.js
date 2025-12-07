const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;
const resultDisplay = document.getElementById('result');
const arrayDisplay = document.getElementById('array');

// Function to update the target value
function updateTarget() {
    target = parseInt(document.getElementById('target').value);
    resetVisualizer();
}

// Function to display the array with highlighted elements
function displayArray(highlightIndex = -1) {
    arrayDisplay.innerHTML = arr.map((value, index) => {
        if (index === highlightIndex) {
            return `<span style="background-color: yellow; padding: 5px;">${value}</span>`;
        }
        return `<span>${value}</span>`;
    }).join(' | ');
}

// Reset the visualizer after each search
function resetVisualizer() {
    resultDisplay.textContent = "None";
    displayArray();
}

// Linear Search Algorithm
function linearSearch() {
    let result = -1;
    let i = 0;
    let interval = setInterval(() => {
        if (i < arr.length) {
            displayArray(i);  // Highlight the current element
            if (arr[i] === target) {
                result = i + 1; // 1-based index
                resultDisplay.textContent = `Found at position ${result}`;
                clearInterval(interval);
            }
            i++;
        } else {
            resultDisplay.textContent = "Element not found!";
            clearInterval(interval);
        }
    }, 500); // Step delay to show each comparison
}

// Binary Search Algorithm
function binarySearch() {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    let interval = setInterval(() => {
        if (start <= end) {
            let mid = Math.floor((start + end) / 2);
            displayArray(mid);  // Highlight the middle element
            if (arr[mid] === target) {
                result = mid + 1; // 1-based index
                resultDisplay.textContent = `Found at position ${result}`;
                clearInterval(interval);
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            resultDisplay.textContent = "Element not found!";
            clearInterval(interval);
        }
    }, 500); // Step delay to show each comparison
}

// Interpolation Search Algorithm
function interpolationSearch() {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;
    let interval = setInterval(() => {
        if (low <= high && target >= arr[low] && target <= arr[high]) {
            let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
            displayArray(pos);  // Highlight the estimated position
            if (arr[pos] === target) {
                result = pos + 1; // 1-based index
                resultDisplay.textContent = `Found at position ${result}`;
                clearInterval(interval);
            } else if (arr[pos] < target) {
                low = pos + 1;
            } else {
                high = pos - 1;
            }
        } else {
            resultDisplay.textContent = "Element not found!";
            clearInterval(interval);
        }
    }, 500); // Step delay to show each comparison
}

// Hash-Based Search Algorithm
function hashBasedSearch() {
    let result = -1;
    const hashTable = {};

    // Insert elements into hash table
    for (let i = 0; i < arr.length; i++) {
        hashTable[arr[i]] = i + 1; // 1-based index
    }

    // Check if the target is in the hash table
    result = hashTable[target] || -1;

    resultDisplay.textContent = result !== -1 ? `Found at position ${result}` : "Element not found!";
}

// Initialize the visualizer
resetVisualizer();
