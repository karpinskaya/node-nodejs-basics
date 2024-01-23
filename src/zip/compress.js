import * as zlib from 'zlib';
import { pipeline } from 'stream/promises';
import * as fs from 'fs';
import { getDirname } from '../utils.js';

const compress = async () => {
    const __dirname = getDirname(import.meta.url);
    const srcPath = `${__dirname}/files/fileToCompress.txt`;
    const dstPath = `${__dirname}/files/archive.gz`;
    const zip = zlib.createGzip();

    try {
        await pipeline(
            fs.createReadStream(srcPath),
            zip,
            fs.createWriteStream(dstPath)
        );
    } catch (e) {
        console.log(e);
    }
};

await compress();
