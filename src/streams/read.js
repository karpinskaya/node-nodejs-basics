import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getDirname } from '../utils.js';

const read = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = `${__dirname}/files/fileToRead.txt`;

    try {
        await pipeline(createReadStream(filePath), process.stdout);
    } catch (e) {
        console.log(e);
    }
};

await read();
