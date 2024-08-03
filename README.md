# Easy Automation for BTCPay Server using Zapier - No Programming Skills Required

Make BTCPay work for you with [Zapier](https://zapier.com)! Automate your business by connecting BTCPay to Zapier, easily setup workflows for payment notifications and many more.

## Free to Use
Get started automating your business today with a free [Zapier](https://zapier.com) account. 
On the free plan, you can create up to 3 automated workflows (Zaps) and complete 100 actions each month.

## What can you do with BTCPay Server and Zapier?
With the BTCPay Server integration on Zapier, you can automate a variety of tasks:
The BTCPay Server integration on Zapier defines a number of triggers that can be used to tell other applications what to do. 
You can chain multiple actions and create an entire workflow.
Besides triggers, there is also a list of actions to make BTCPay Server do something you want. 
This can be creating an invoice, for example. In this case the trigger can be something happening on BTCPay Server or in another app or because you received an email.

A simple automation looks like this:
![Sample Workflow in Zapier](./doc/zap-sample1.png)

## Who is it for?
Zapier is an easy way for non-technical people to automate their workflow. It's also highly flexible, allowing you to experiment with various integrations. However, if you anticipate heavy loads, hiring a developer for a custom integration might be more cost-effective in the long run.

## Some Use Cases
- **Thank You Emails:** Automatically send a "Thank You" email when an invoice is paid in BTCPay Server
- **Integrate with Accounting Software:** Create a payment record in your accounting software when an invoice is settled.
- **Request Customer Reviews:** After an invoice is paid, a business owner can decide to wait a period of time (say 1-7 days) asking customers for reviews of the products purchased or store experience. This can be achieved with automated emails using BTCPay Server integration with Zapier.
- **Manage Funds:** At the end of the day, automatically move 75% of your funds from a hot wallet to you cold wallet.
- **Notify Sales Teams:** When an invoice expires, notify your sales via Slack.
- **Build Your Email list:** Automatically add customer email addresses to your Mailchimp account or other newsletter system.
- **Generate Payment Requests:** Create a new payment request when a row is added in a Google Spreadsheet and send the payment link to your customer via email.

## Getting Started
Head over to the [integrations documentation](https://zapier.com/apps/btcpay-server/integrations) to get started. You will see some examples here + a list of all triggers and actions we support. 

[![BTCPay Server - Zapier](https://img.youtube.com/vi/RylpDWt30uc/mqdefault.jpg "BTCPay Server - Zapier")](https://youtu.be/RylpDWt30uc "BTCPay Server - Zapier")

## Requirements
To get started with automating BTCPay Server using Zapier, you'll need the following:
- Zapier Account. Sign up for a free or paid account at [Zapier.com](https://zapier.com)
- A BTCPay Server instance with at least one store set up.
- An API key that has access to the store and resources you want to automate (**IMPORTANT:** Only grant the minimum permissions needed for your automation tasks). 
See the permissions guide below for specific recommendations.

## Security Considerations
When automating tasks with BTCPay Server, it's crucial to prioritize security. Because you'll be providing Zapier with your API key, we strongly encourage that you create an API key with as limit permissions as possible to reduce potential risks.  
For instance, if you're automating actions for a single store, ensure the API key only has access to that store's resources. 
BTCPay Server allows you to configure access per store, so take advantage of this feature.

## Recommended API Key Permissions
Choosing the right permissions for your API key is essential for secure and effective automation. Here's a guide to help select the appropriate permissions based on your needs:

If you want to use **triggers**, you will need to have the permission `btcpay.store.webhooks.canmodifywebhooks`. It is easy to overlook this one, but Zapier gets its triggers from a webhook, so that must be allowed.

For the various actions we have, you will need different permissions. For actions like creating or modifying invoices, you'll need the `btcpay.store.cancreateinvoice` and `btcpay.store.canmodifyinvoices` permissions.

Viewing stores and invoices is also a good idea to add anyway, so those would be `btcpay.store.canviewinvoices` and `btcpay.store.canviewstoresettings`.

A good place to start would be these permissions:
![Example API Permissions](./doc/ExampleApiPermissions.jpeg)


## How does it work technically?
- Every trigger registers its own webhook in the store it is for. BTCPay Server does not support global webhooks; each is unique to a specific store.
- The webhook only handles the single event it is created for.
- When you enable the Zap, the webhook is automatically created in BTCPay Server. Disabling the Zap will delete the webhook.
- Each webhook uses its own secret, randomly generated by BTCPay Server.
- The webhook's request signature `BTCPay-Sig` is used to verify the identity of the sender.


## Troubleshooting Common Issues

### I got a 403 Forbidden error, what happened?
If you encointer a 403 forbidden error, it's likely due to insufficient API key permissions. If you are using any of the triggers in Zapier, always make sure you have the `btcpay.store.webhooks.canmodifywebhooks` permission.

### I deleted the webhook from my BTCPay Server store by mistake.
No worries. Just turn your Zap off and on again and the webhook will automatically be recreated in BTCPay Server.


## Source Code, Issues and Feature Requests
The Zapier integration source code is available on [GitHub](https://github.com/btcpayserver/zapier).
You can use the repository to log issues, request new features, or explore the codebase.
Additionally, you can report issues directly through Zapier as you encounter them.

## Credits and Support
The BTCPay Server Zapier integration was developed by [Storefront.be](https://www.storefront.be/en/) in their ongoing effort to support this community.

If you are looking to hire professional support or could use a developer for a custom integration, feel free to reach out at [Storefront.be](https://www.storefront.be/en/).

This repository contains the Zapier integration for BTCPay Server enabling you to automate actions like sending emails or posting chat messages based on triggers from BTCPay Server events (e.g new invoice creation, paid or expiration).
