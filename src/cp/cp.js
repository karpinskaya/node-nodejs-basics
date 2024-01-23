import { fork } from 'child_process';
import { getDirname } from '../utils.js';

const spawnChildProcess = async (args) => {
    const __dirname = getDirname(import.meta.url);
    const scriptPath = `${__dirname}/files/script.js`;

    fork(scriptPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
