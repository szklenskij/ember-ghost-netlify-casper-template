---
title: Boss Fight Simulator
image: /images/armor-close-up-combat-161936.jpg
imageMeta:
  attribution:
  attributionLink:
featured: true
author: robot
date: Tue Jun 12 2018 17:49:21 GMT+0100 (IST)
customjs:
  - https://jaredszklenski.netlify.com/country.js
tags:
  - projects
---
A terminal-based game/project from Freshman year. I have just found it again in the depths of my computer's directories, but unfortunately it is currently broken for some reason. I would very much like to get it working again and to be able to share it.

{% for js in page.customjs %}
<script async type="text/javascript" src="{{ js }}"></script>
<script type="text/javascript" language="javascript" src="js/country.js"></script>
{% endfor %}

<div id="terminal"></div>
      <script>
        var term = new Terminal();
        term.open(document.getElementById('terminal'));
        term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
      </script>
