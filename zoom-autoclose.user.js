// ==UserScript==
// @name         Auto-close Zoom tabs
// @version      0.1.0
// @description  Closes the tab when joining a Zoom meeting.
// @author       Ben Youngblood
// @match        https://zoom.us/j/*
// @match        https://smartrent.zoom.us/j/*
// @grant        window.close
// ==/UserScript==

(function() {
  'use strict';

  setTimeout(() => window.close(), 5000);
})();
