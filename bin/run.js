let EventTemplatesProcess = require('../obj/src/container/EventTemplatesProcess').EventTemplatesProcess;

try {
    new EventTemplatesProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
