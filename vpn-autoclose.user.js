// ==UserScript==
// @name         Auto-close AWS VPN auth tab
// @version      0.1
// @description  Closes the tab that the AWS VPN client opens to authenticate with JumpCloud.
// @author       Ben Youngblood
// @match        http://127.0.0.1:35001/
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        if (/Authentication details received/i.test(document.querySelector('body').innerText)) {
            window.close()
        }
    }, 1000);
})();
