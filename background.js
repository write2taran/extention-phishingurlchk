chrome.tabs.onUpdated.addListener(function(buttonId, changeInfo, button) {
    if (changeInfo.status === 'complete' && tab.active) {
      const url = new URL(tab.url);
      const domain = url.hostname;

      // Define the URL to the phishing database file
const phishingDatabaseURL = 'https://github.com/mitchellkrogza/Phishing.Database/blob/master/phishing-links-ACTIVE-TODAY.txt';

// Create an empty array to store phishing domains
const phishingDomains = [];

// Function to fetch the phishing database file from GitHub and update the phishingDomains array
async function fetchPhishingDomains() {
    try {
        // Fetch the data from the GitHub URL
        const response = await fetch(phishingDatabaseURL);
        
        // Check if the response is OK (HTTP status code 200)
        if (!response.ok) {
            throw new Error(Failed to fetch phishing database: ${response.statusText});
        }
        
        // Get the text content of the response
        const data = await response.text();
        
        // Split the text into lines (each line contains a phishing domain)
        const lines = data.split('\n');
        
        // Add each line to the phishingDomains array
        for (let line of lines) {
            // Trim whitespace and ignore empty lines
            line = line.trim();
            if (line) {
                phishingDomains.push(line);
            }
        }
        
        console.log('Phishing domains fetched and stored:', phishingDomains);
        
    } catch (error) {
        console.error('Error fetching phishing domains:', error);
    }
}

// Call the function to fetch phishing domains
fetchPhishingDomains();
  
      // Replace this with a real list of phishing domains
    //   const phishingDomains = ['phishing.com', 'dangerous-site.net'];
  
      if (phishingDomains.includes(domain)) {
        alert('WARNING: The domain you have entered is known for phishing attempts!');
      }
    }
  });

  // Define the URL to the phishing database file
const phishingDatabaseURL = 'https://github.com/mitchellkrogza/Phishing.Database/blob/master/phishing-links-ACTIVE-TODAY.txt';

// Create an empty array to store phishing domains
const phishingDomains = [];

// Function to fetch the phishing database file from GitHub and update the phishingDomains array
async function fetchPhishingDomains() {
    try {
        // Fetch the data from the GitHub URL
        const response = await fetch(phishingDatabaseURL);
        
        // Check if the response is OK (HTTP status code 200)
        if (!response.ok) {
            throw new Error(Failed to fetch phishing database: ${response.statusText});
        }
        
        // Get the text content of the response
        const data = await response.text();
        
        // Split the text into lines (each line contains a phishing domain)
        const lines = data.split('\n');
        
        // Add each line to the phishingDomains array
        for (let line of lines) {
            // Trim whitespace and ignore empty lines
            line = line.trim();
            if (line) {
                phishingDomains.push(line);
            }
        }
        
        console.log('Phishing domains fetched and stored:', phishingDomains);
        
    } catch (error) {
        console.error('Error fetching phishing domains:', error);
    }
}

// Call the function to fetch phishing domains
fetchPhishingDomains();