import { readFile } from 'fs/promises';
import { createHmac } from 'crypto';
import { getDirname } from '../utils.js';

const calculateHash = async () => {
    try {
        const __dirname = getDirname(import.meta.url);
        const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;
        const content = await readFile(filePath, { encoding: 'utf8' });
        const hash = createHmac('sha256', content).digest('hex');

        console.log(hash);
    } catch (e) {
        console.log(e);
    }
};

await calculateHash();
