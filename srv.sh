#!/bin/bash
node Avatars_Pibot.js &
node workspace/worker_pibot.js &
node model/gemini/gemini_pibot.js &
node public/CTF.js &
node srv/srv.js &