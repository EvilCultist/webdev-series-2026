const url = "https://www.google.com";

async function fetchGoogle() {
  try {
    const response = await fetch(url);
    const text = await response.text(); // Google returns HTML
    console.log("Fetched content length:", text.length);
    // Uncomment the next line to see raw HTML (very long!)
    // console.log(text);
  } catch (err) {
    console.error("Error fetching URL:", err);
  }
}

fetchGoogle();

