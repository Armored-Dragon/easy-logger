const log = {
	/**
	 * Info logger
	 * @param {*} data - Text you want to log into the console
	 */
	i: (data) => console.log(`\x1b[36m[  Info  ]\x1b[0m ${data}`),
	/**
	 * Request logger
	 * @param {*} data - Text you want to log into the console
	 */
	req: (data) => console.log(`\x1b[35m[  Req   ]\x1b[0m ${data}`),
	/**
	 * Error logger
	 * @param {*} data - Text you want to log into the console
	 */
	err: (data) => console.log(`\x1b[31m[  Err   ]\x1b[0m ${data}`),
	/**
	 * Debug logger
	 * @param {*} data - Text you want to log into the console
	 */
	debg: (data) => console.log(`\x1b[34m[  Debg  ]\x1b[0m ${data}`),
};

module.exports = log;
