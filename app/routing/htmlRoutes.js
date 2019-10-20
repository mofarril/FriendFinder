// ===============================================================================
// DEPENDENCIES
// Include the path package to get the correct file path for html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each case the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/survey.html"));
  });
  
  // If no matching route is found default to home (.use does this)
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "../public/home.html"));
  }); 
};
