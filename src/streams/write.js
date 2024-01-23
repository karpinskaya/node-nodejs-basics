import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getDirname } from '../utils.js';

const write = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = `${__dirname}/files/fileToRead.txt`;

    try {
        await pipeline(process.stdin, createWriteStream(filePath));
    } catch (e) {
        console.log(e);
    }
};

await write();
