module.exports = {
  launch: {
    dumpio: true,
    headless: true,
    slowMo: 50,
    ...(process.env.FLEX_MODE === 'test-docker'
      ? {
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-infobars',
          '--single-process'
        ]
      } : {
        args: [
          '--disable-dev-shm-usage',
          '--disable-infobars'
        ]
      }
    )
  },
  browserContext: 'default'
}
