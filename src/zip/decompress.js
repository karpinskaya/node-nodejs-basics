import * as zlib from 'zlib';
import { pipeline } from 'stream/promises';
import * as fs from 'fs';
import { getDirname } from '../utils.js';

const decompress = async () => {
    const __dirname = getDirname(import.meta.url);
    const srcPath = `${__dirname}/files/archive.gz`;
    const dstPath = `${__dirname}/files/fileToCompress.txt`;
    const unzip = zlib.createGunzip();

    try {
        await pipeline(
            fs.createReadStream(srcPath),
            unzip,
            fs.createWriteStream(dstPath)
        );
    } catch (e) {
        throw e;
    }
};

await decompress();
