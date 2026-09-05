const appName = "HelperBot";
let userLoggedIn = true;
let visitorCount = 42;

// 2. A Simple Function
function greetUser(username) {
    return `Hello, ${username}! Welcome back to ${appName}.`;
}

// 3. Conditional Logic
if (userLoggedIn) {
    const message = greetUser("Alice");
    console.log(message); // Prints to the browser developer console or terminal
} else {
    console.log("Please log in to continue.");
}

// 4. Arrays and Looping
const features = ["Chat", "Calculator", "Weather Updates", "To-Do List"];

console.log("\nAvailable Features:");
features.forEach((feature, index) => {
    console.log(`${index + 1}. ${feature}`);
});

// 5. Objects
const systemStatus = {
    status: "Online",
    version: "2.1.0",
    uptimeHours: 120
};

console.log(`\nSystem Status: ${systemStatus.status} (v${systemStatus.version})`);