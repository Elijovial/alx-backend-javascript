const { spawn } = require('child_process');
const assert = require('assert');

describe('1-stdin.js', function() {
	this.timeout(5000); // Increase timeout to 5000ms

	  it('should display welcome message and user input', (done) => {
		      const process = spawn('node', ['1-stdin.js']);

		      let output = '';

		      process.stdout.on('data', (data) => {
			            output += data.toString();
			            if (output.includes('Welcome to Holberton School, what is your name?')) {
					            process.stdin.write('Bob\n');
					          } else if (output.includes('Your name is: Bob')) {
							          process.stdin.end();
							        }
			          });

		      process.on('close', (code) => {
			            assert(output.includes('Welcome to Holberton School, what is your name?'));
			            assert(output.includes('Your name is: Bob'));
			            assert(output.includes('This important software is now closing'));
			            assert.strictEqual(code, 0);
			            done();
			          });
		    });
});

