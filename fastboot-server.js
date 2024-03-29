const FastBootAppServer = require('fastboot-app-server');

const MY_GLOBAL = 'MY GLOBAL';

let server = new FastBootAppServer({
  distPath: 'dist',
  gzip: true, // Optional - Enables gzip compression.
  sandboxGlobals: { GLOBAL_VALUE: MY_GLOBAL }, // Optional - Make values available to the Ember app running in the FastBoot server, e.g. "MY_GLOBAL" will be available as "GLOBAL_VALUE"
  chunkedResponse: true, // Optional - Opt-in to chunked transfer encoding, transferring the head, body and potential shoeboxes in separate chunks. Chunked transfer encoding should have a positive effect in particular when the app transfers a lot of data in the shoebox.
});

server.start();
