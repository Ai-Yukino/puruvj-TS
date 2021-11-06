const req = await fetch("TWITTER_API_URL");

/** @type {import('./twitter.d').ConversationResponse} */
const data = await req.json();
