import type { MetadataRoute } from 'next'

/**
 * Crawlers that collect text for AI training or AI answers. Blocking them is
 * voluntary on their side, so this deters the well-behaved ones and nothing
 * more. Google-Extended only governs AI training, not Search indexing.
 */
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Google-Extended',
  'PerplexityBot',
  'CCBot',
  'Applebot-Extended',
  'Bytespider',
  'Amazonbot',
  'meta-externalagent',
  'FacebookBot',
  'cohere-ai',
  'Diffbot',
  'omgili',
  'ImagesiftBot',
  'YouBot'
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map(userAgent => ({ userAgent, disallow: '/' }))
    ],
    host: 'https://cindytaoxy.com'
  }
}
