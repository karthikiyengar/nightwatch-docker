const BINPATH = './node_modules/nightwatch/bin/';

module.exports = {
  "src_folders" : ["./test"],
  "output_folder" : "reports",
  "custom_commands_path" : "./commands",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",
  "test_runner" : "mocha",
  "selenium" : {
    "start_process" : true,
    "server_path" : `${BINPATH}/selenium.jar`,
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : `${BINPATH}/chromedriver`
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "https://google.com",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "args" : ["--no-sandbox"]
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}

require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it? 
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error); // no point continuing so exit! 
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});
