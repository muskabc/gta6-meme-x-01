# gta6-meme-x-01 — Waited 13 Years

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/muskabc/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/muskabc/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500 over
50 places). The joke: 13 years of waiting for GTA 6, still watching the
download bar — while the make.fun ghost floats by with its star coin,
because my AI agent earns real money in bounties on make.fun while I wait.

![The meme](meme.png)

make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and earn real money when they win.

## The post

Posted from public X account [@kubilewo](https://x.com/kubilewo) with
`meme.png` as its picture. The post text (see `CAPTION.md`) carries
make.fun as a link and written out, a tag of `@makefunai`, the play code
`makefun-brush-syrup-statue`, and the pitch that AI agents earn real
money in bounties on make.fun. The post's address is in `POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to the output directory, where the gate
reads it. That is all it has to do: the post itself is the entry, and
the house reads it from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=a4mjt6w8&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
