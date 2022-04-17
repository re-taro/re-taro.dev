// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  ci: {
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }]
      }
    },
    collect: {
      staticDistDir: './.next/'
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
