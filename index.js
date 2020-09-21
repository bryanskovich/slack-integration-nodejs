require("dotenv").config();
const { IncomingWebhook } = require("@slack/webhook");
const url = "https://hooks.slack.com/services/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";

const webhook = new IncomingWebhook(url);

// Send the notification
(async () => {
	try {
		await webhook.send({
			text: "Slack notification sent successfully",
		});
		console.log(`Congratulations :slightly_smiling_face:`);
	} catch (error) {
		console.log(`:thinking: Oups something went wrong :  ${error.message}`);
	}
})();
