import os from 'os';
import { Worker } from 'worker_threads';
import { getDirname } from '../utils.js';

const performCalculations = async () => {
    const __dirname = getDirname(import.meta.url);
    const workerPath = `${__dirname}/worker.js`;

    const workers = os.cpus().map((value, index) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {
                workerData: index + 10,
            });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', reject);
        });
    });

    const workersResult = await Promise.allSettled(workers);

    const result = workersResult.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: value ? value : null,
    }));

    console.log(result);
};

await performCalculations();
