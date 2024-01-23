const parseArgs = () => {
    let result = [];

    for (let i = 2; i < process.argv.length; i++) {
        result.push(
            `${process.argv[i].substring(2)} is ${process.argv[i + 1]}`
        );
        i++;
    }

    console.log(result.join(', '));
};

parseArgs();
