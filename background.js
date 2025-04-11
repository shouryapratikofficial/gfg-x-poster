chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "just_post") {
      const tweetText = `✅ Day ${message.day}/160 of GFG Challenge: Solved "${message.title}" 💻🔥 #160DaysOfCode #GFGChallenge`;
      const twitterUrl = `https://x.com/compose/post?text=${encodeURIComponent(tweetText)}`;
  
      chrome.tabs.create({ url: twitterUrl, active: true });
    }
  });
  