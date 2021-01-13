//to use debug option run `DEBUG=true followed by your .conf.js`
const defaultTimeoutInterval  = process.env.DEBUG ? (60 * 60 * 500) : 90000;
const pause = 200

exports.config = {
    
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        complete: [
            './test/specs/centauro-busca-produto.spec.js',
            './test/specs/centauro-login.spec.js',
            //'./test/specs/centauro-cadastro-pf.spec.js'
        ],
        dev: [
            './test/specs/centauro-cadastro-pf.spec.js',
        ]
    },
    exclude: [
        // './test/specs/file-to-exclude.js'
    ],
    maxInstances: 3,
    capabilities: [
      {
        maxInstances: 3,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        setWindowRect: true,
        //browserVersion: '',
        //platformName: '',
        //proxy: {},
        //timeouts: {},
        //strictFileInteractability: true,
        //unhandledPromptBehavior: ''
        //pageLoadStrategy: 'none', //none, eager, normal
        'goog:chromeOptions': {
          // to run chrome headless the following flags are required
          // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
          // args: ['--headless', '--disable-gpu'],
        }
      },

      // {
      //   maxInstances: 5,
      //   browserName: 'firefox',
      //   "moz:firefoxOptions": {
      //     // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
      //     //args: ['-headless']
      //   }
      // },

      // {
      //   maxInstances: 5,
      //   browserName: 'safari',
      // },

      // {
      //   maxInstances: 5,
      //   browserName: 'internet explorer',
      //   acceptUntrustedCertificates: true,
      //   ignoreProtectedModeSettings: true,    //only applicable to IE browser
      //   ignoreZoomSetting: true,              //only applicable to IE browser
      //   ensureCleanSession: true,
      // },
  ],
    //sync: true,
    logLevel: 'silent',     // Level of logging verbosity: silent | verbose | command | data | result | error
    coloredLogs: true,
    screenshotPath: './errorShots/',
    deprecationWarnings: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    baseUrl: 'http://www.centauro.com.br',
    waitforTimeout: 10000,            // Default timeout for all waitFor* commands.
    connectionRetryTimeout: 90000,    // Default timeout in milliseconds for request  // if Selenium Grid doesn't send response
    connectionRetryCount: 3,          // Default request retries count
    services: ['selenium-standalone'],
    // services: [browserstack'],
    // user: process.env.BROWSERSTACK_USERNAME,
    // key: process.env.BROWSERSTACK_ACCESS_KEY,
    // browserstackLocal: true,

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'jasmine',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    // reporters: ['dot'],
    //
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        //
        // The Jasmine framework allows interception of each assertion in order to log the state of the application
        // or website depending on the result. For example, it is pretty handy to take a screenshot every time
        // an assertion fails.
        expectationResultHandler: (passed, assertion) => {
            // do something
        }
    },
    reporters: [
        'spec',
        ['junit', {
            outputDir: './test/reports/junit-results/',
            outputFileFormat: (opts) => { // optional
                return `results-${opts.cid}.${opts.capabilities}.xml`
            }
          }
        ],
        ['allure', {
            outputDir: './test/reports/allure-results/',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
          }
        ],
    ],

    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
     onPrepare: (config, capabilities) => {
         console.log('onPrepare');
     },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) {
        require('@babel/register');
    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: (capabilities, specs) => {
        browser.addCommand("waitToClick", (elem) => {
            console.log('waitToClick');
            browser.pause(pause);
            elem.waitForDisplayed();
            elem.click();
        });

        browser.addCommand("waitToSetValue", (elem, value) => {
            // console.log('waitToSetValue');
            // browser.pause(pause);
            // elem.waitForDisplayed();
            // elem.click();
            // elem.setValue(value);
            // browser.keys(['Tab']);

            console.log('setValueSafe');
            browser.pause(pause);
            elem.waitForDisplayed();
            while(elem.getValue() != value){
                elem.click();

                for(let i=0; i<value.length; i++){
                    browser.keys([value[i]]);
                    browser.pause(10);
                }
            
                browser.keys(['Tab']);
            }


        });

        // browser.addCommand("setValue", (elem, value) => {
        //     console.log('waitToSetValue');
            
        // });

        browser.addCommand("waitToSelectByVisibleText", (elem, value) => {
            console.log('waitToSetValue');
            browser.pause(pause);
            elem.waitForDisplayed();
            elem.selectByVisibleText(value);
            browser.keys(['Tab']);
        });

        // browser.addCommand('setValueSafe', (elem, value) => {
        //     console.log('setValueSafe');
        //     browser.pause(pause);
        //     elem.waitForDisplayed();
        //     while(elem.getValue() != value){
        //         elem.click();

        //         for(let i=0; i<value.length; i++){
        //             browser.keys([value[i]]);
        //             browser.pause(20);
        //         }
            
        //         browser.keys(['Tab']);
        //     }
            
             
        // });
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
     beforeCommand: (commandName, args) => {    
     },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeSuite: (suite) => {
    },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    beforeTest: (test) => {
    },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    beforeHook: () => {
    },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    afterHook: () => {
    },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    afterTest: (test) => {
      if (test.error !== undefined) {
        browser.takeScreenshot();
      }
    },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    afterSuite: (suite) => {
    },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    afterCommand: (commandName, args, result, error) => {
    },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: (result, capabilities, specs) => {
    },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
     afterSession: (config, capabilities, specs) => {
         console.log('terminating the webdriver session');
     },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
     onComplete: (exitCode, config, capabilities, results) => {
        console.log('Gets executed after all workers got shut down and the process is about to exit.');
     },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    onReload: (oldSessionId, newSessionId) => {
    }
}
