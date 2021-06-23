const authentication = require('./authentication');
const invoiceCreated = require('./triggers/InvoiceCreated.js');
const invoiceExpired = require('./triggers/InvoiceExpired.js');
const invoiceInvalid = require('./triggers/InvoiceInvalid.js');
const invoiceProcessing = require('./triggers/InvoicePaidInFull.js');
const invoiceSettled = require('./triggers/InvoiceConfirmed.js');
const paymentReceived = require('./triggers/InvoiceReceivedPayment.js');

const createInvoice = require("./creates/CreateInvoice");
const markInvoiceInvalid = require("./creates/MarkInvoiceInvalid");
const markInvoiceSettled = require("./creates/MarkInvoiceSettled");

const findInvoice = require("./searches/FindInvoice");

const beforeRequest = (request, z, bundle) => {
    request.headers['Content-Type'] = 'application/json';
    request.headers['Accept'] = 'application/json';
    request.headers['Authorization'] = 'token ' + bundle.authData.api_key;
    request.headers['X-Client'] = 'Zapier ' + require('./package.json').version;

    // Avoid double // in the URL if the user entered the server_url with a trailing slash.
    if (bundle.authData.server_url.endsWith('/')) {
        request.url = request.url.replace(bundle.authData.server_url + '/', bundle.authData.server_url);
    }

    return request;
};

module.exports = {
    version: require('./package.json').version,
    platformVersion: require('zapier-platform-core').version,
    authentication: authentication,
    beforeRequest: [beforeRequest],

    resources: {
        store: {
            key: 'store',
            noun: 'Store',
            // ...
            list: {
                display: {
                    label: 'Stores',
                    description: 'A list of all stores',
                    hidden: true,
                },
                operation: {
                    perform: (z, bundle) => {
                        // called for store_id dropdown
                        const Stores = require('./common/Store.js');
                        return Stores.getAll(z, bundle);
                    },
                },
            },
        },
    },

    triggers: {
        [invoiceCreated.key]: invoiceCreated,
        [paymentReceived.key]: paymentReceived,
        [invoiceProcessing.key]: invoiceProcessing,
        [invoiceSettled.key]: invoiceSettled,
        [invoiceExpired.key]: invoiceExpired,
        [invoiceInvalid.key]: invoiceInvalid,
    },

    creates: {
        [createInvoice.key]: createInvoice,
        [markInvoiceInvalid.key]: markInvoiceInvalid,
        [markInvoiceSettled.key]: markInvoiceSettled
    },

    searches: {
        [findInvoice.key]: findInvoice
    }
};