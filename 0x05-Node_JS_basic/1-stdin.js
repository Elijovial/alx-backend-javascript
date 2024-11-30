process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write('Your name is: ' + chunk);
	process.stdin.end(); // End the input stream after reading the name
    }
});

process.stdin.on('end', function() {
    process.stdout.write('This important software is now closing\n')
})
