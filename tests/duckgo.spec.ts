
import { test, expect } from '@playwright/test';
import { processIcons } from '../utils/utils';

test('API Search DuckDuckGo', async ({ request}) => {

  const response = await request.get('https://api.duckduckgo.com', {
    params: {
      q: 'android',
      format: 'json'
    }
  });

  expect(response.status()).toBe(200);
  const responseBody = await response.json();

  const relatedTopics = responseBody.RelatedTopics;
  
  for (const topic of relatedTopics) {
    processIcons(topic); 

    if (topic.Topics && Array.isArray(topic.Topics)) {
      for (const subTopic of topic.Topics) {
        processIcons(subTopic);
      }
    }
  }
});