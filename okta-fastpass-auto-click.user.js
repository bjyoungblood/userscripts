// ==UserScript==
// @name         Auto-click Okta FastPass on login screen
// @version      0.1.0
// @description  Auto-click the "Sign in with Okta FastPass" button
// @author       Ben Youngblood
// @match        https://smartrent.okta.com/oauth2/v1/authorize*
// @match        https://smartrent.okta.com/app/*
// @match        https://okta.smartrent.com/oauth2/v1/authorize*
// @match        https://okta.smartrent.com/app/*
// ==/UserScript==

(function() {
    'use strict';
    console.log('hi');

    setTimeout(() => {
        let el = document.querySelector('.okta-verify-container a.button');
        if (el) {
            el.click();
        } else {
            console.error("Couldn't find the Sign in with Okta FastPass button");
        }
    }, 1000);
})();
