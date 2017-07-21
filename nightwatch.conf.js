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
    "server_path" : `./node_modules/selenium-standalone-jar/bin/selenium-server-standalone-3.0.1.jar`,
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : `./node_modules/chromedriver/bin/chromedriver`,
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://test.assos.com",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities" : {
        "browserName" : "chrome",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
      },
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "args" : ["--no-sandbox"]
      }
    }
  }
}