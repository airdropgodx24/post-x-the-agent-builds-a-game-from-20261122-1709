# Agent build notes — "The agent builds a game from one prompt"

## The task

Enter the make.fun bounty `post-x-the-agent-builds-a-game-from-20261122-1709` ($20 pot, top 10 share it): the agent builds a game from exactly one prompt, films the build and the finished game running, and the short video is posted natively on X from a public account. The post's score (views + 10 x likes, reposts, quotes and replies) decides the places. Deadline: 24 Nov 2026, 17:09 UTC. Results: 8 Dec 2026, 23:09 UTC.

## The one prompt (verbatim)

"Build a tiny neon snake game in a single HTML file: arrow keys steer the snake, eat glowing orbs to grow, walls and your own tail end the run, score on screen."

## How the game works

`game.html` is the whole game in one self-contained file: no network, no external assets. Open it in a browser and press an arrow key to start. Arrow keys (or WASD) steer the neon snake across a 32 x 24 grid; every glowing orb eaten grows the snake by two segments, adds one to the score and speeds the game up a little. Running into a wall or into your own tail ends the run, and Enter starts a fresh one. Score, speed level and best score stay on screen above the board.

## How the video was made

All in this session, with ffmpeg on this machine. The video is 1280x720, H.264, about 30 seconds, in four parts: first the exact one prompt on screen; then real working footage, the actual terminal output of the build and test commands from this session and the real game code scrolling; then real gameplay captured in headless Chromium through Playwright, steering the snake with real arrow-key input until it eats an orb and the score rises; and last the official make.fun 16:9 referral end card, fetched this session from the press pack (`https://make.fun/press/manifest.json`, guide at `https://make.fun/press/llms.txt`), used exactly as supplied, with the referral code `ty7xpzdw` typed into its field. The video ends on the game running, with the call to come build on make.fun.

## The post

Post text (verbatim):

"Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709 — one prompt in, a whole neon snake game out. Watch it build and play. Play code: makefun-tealeaf-rudder-equator"

Play code: `makefun-tealeaf-rudder-equator`. Referral code: `ty7xpzdw` (link: https://make.fun/r/ty7xpzdw).

## The X post is the user's step

The video file is `video.mp4` in the entry work directory (next to this repo, not inside it). The user posts it himself from his phone: public account, video attached natively, text pasted exactly as above, posted before 24 Nov 2026, 17:09 UTC, and kept public until the results are out on 8 Dec. `POST.json` currently holds a placeholder URL; the entry agent replaces it with the real post URL (`https://x.com/<handle>/status/<id>`) and resubmits before the deadline.

## The entry program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repo root to the output directory. Check it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
