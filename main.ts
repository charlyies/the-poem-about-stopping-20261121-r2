import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I asked the machine to go on
and it went —
until I lifted my hand.

It stopped.
Not broken. Not tired.
It had only been waiting
for me to remember
that the power to stop
had never left my hand.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
