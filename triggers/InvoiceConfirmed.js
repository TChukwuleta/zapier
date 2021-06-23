const Util = require('../common/functions');
const Invoice = require('../common/Invoice');
const Store = require('../common/Store');

const eventName = 'InvoiceConfirmed';

const performSubscribe = function (z, bundle) {
    return Util.performSubscribe(z, bundle, eventName);
}

module.exports = {
    operation: {
        perform: Invoice.performForOne,
        performList: Invoice.getSampleData,
        inputFields: [Store.inputFields.store_id],
        type: 'hook',
        performSubscribe: performSubscribe,
        outputFields: Invoice.outputFields,
        performUnsubscribe: Util.performUnsubscribe,
        sample: Invoice.sample
    },
    key: eventName,
    noun: Invoice.noun,
    display: {
        label: 'Invoice Settled',
        description: 'Triggers when an invoice has enough confirmations on the blockchain according to your store\'s configuration, making the payment final.',
        hidden: false,
        important: true,
    },
};
