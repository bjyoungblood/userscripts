// ==UserScript==
// @name         AWS SSO auto click & close window
// @version      0.1.0
// @description  Clicks through the AWS SSO auth confirmation screens and closes the window when done
// @author       Ben Youngblood
// @match        https://*.awsapps.com/start*
// @grant        window.close
// @grant        window.onurlchange
// ==/UserScript==

(function() {
    'use strict';

    let run = () => {
        console.log('run', window.location);
        setTimeout(() => {
            if (window.location.pathname == '/start/' && window.location.hash.startsWith('#/device')) {
                let el = document.querySelector("button#cli_verification_btn");
                if (el) {
                    el.click();
                }
            }

            if (window.location.hash.startsWith('#/?clientId=')) {
                document.querySelector('button[data-analytics=consent-allow-access]').click();
            }

            if (document.body.textContent.includes('You have approved the request for access')) {
                window.close();
            }
        }, 1500);
    };

    run();

    if (window.onurlchange === null) {
        window.addEventListener('urlchange', () => run());
    }
})();
