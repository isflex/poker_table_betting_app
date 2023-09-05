import { parseDomain as _parseDomain, ParseResultType } from 'parse-domain'

export const parseDomain = (_hostname: URL['hostname']) => {
  const parseResult = _parseDomain(_hostname)
  switch (parseResult.type) {
    case ParseResultType.Listed: {
      const { domain, topLevelDomains } = parseResult
      return `${domain}.${topLevelDomains.join('.')}`
    }
    case ParseResultType.Reserved: {
      const { labels } = parseResult
      return labels.pop()
    }
    case ParseResultType.NotListed: {
      const { hostname } = parseResult
      throw new Error(`${hostname} is an unknown domain`)
    }
    default: {
      const { hostname } = parseResult
      throw new Error(`${String(hostname)} is an ip address or invalid domain`)
    }
  }
}
