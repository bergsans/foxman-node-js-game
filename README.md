# FOXMAN. A small node.js game

![foxman.gif](foxman.gif)

This game is made as some kind of proof of concept. I've done a few games, for instance, [RETRO TANK](https://github.com/claes-magnus/retro-tank/) and [The Void](https://github.com/claes-magnus/the-void), using 'images' (the normal thing to do) and thought it would be interesting to apply the same game programming techniques using characters only, and using node.js. This design choice naturally makes problems easier, but still interesting.

I've tried to mimic the enemy behavior in Pacman (this game is a part of the clone genre, fan fiction if you will) but skipped the part when Pacman becomes omnipotent. The enemies behavior has two modes, chasing and moving randomly.

For the ASCII art texts, I've used figlet and inlined the text in NeoVim,
```
:read !figlet -f 3d "Hello there, 3d text!"
```
...and I've used emojoicons for graphics.

This game is not finished and will never be. It's only a small demo.

Why use node.js? Why not. :) A more important question: is FOXMAN cute? I believe so.

FOXMAN? I enjoy Firefox. Also, I am a member of a [secret spy organization](https://herebeseaswines.net/ravarna/), have made a demo named [Operation Fox](https://herebeseaswines.net/operation-fox/) using hand-drawn graphics and a cli tool named [foxy dev tools](https://github.com/claes-magnus/foxy-dev-tools). It's fair to say I like foxes in general.

## Setup
```
npm install

node src/foxman.js
```
