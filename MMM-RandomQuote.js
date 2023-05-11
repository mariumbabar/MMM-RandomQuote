Module.register("MMM-RandomQuote", {
  // Default module config.
  defaults: {
    quotes: [
      "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "The way to get started is to quit talking and begin doing. - Walt Disney",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "If life were predictable it would cease to be life and be without flavor. - Eleanor Roosevelt",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
      "The only way to do great work is to love what you do. - Steve Jobs",
      "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    ],
    updateInterval: 60000, // 1 minute
  },

  // Define start method.
  start: function () {
    this.randomQuote = "";
    this.scheduleUpdate();
  },

  // Override getDom method.
  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.className = "quote";

    var quoteText = document.createElement("div");
    quoteText.innerHTML = this.randomQuote;
    wrapper.appendChild(quoteText);

    return wrapper;
  },

  // Override notificationReceived method.
  notificationReceived: function (notification, payload, sender) {
    if (notification === "DOM_OBJECTS_CREATED") {
      this.updateQuote();
    }
  },

  // Schedule quote update.
  scheduleUpdate: function () {
    var self = this;
    setInterval(function () {
      self.updateQuote();
    }, this.config.updateInterval);
  },

  // Update the displayed quote.
  updateQuote: function () {
    var randomIndex = Math.floor(Math.random() * this.config.quotes.length);
    this.randomQuote = this.config.quotes[randomIndex];
    this.updateDom();
  },
});
