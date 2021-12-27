import { createHash } from 'crypto'

export function computeHash(content: string) {
  const hash = createHash('sha512')
  for (let i = 0; i < content.length; i++) {
    const line = content[i].trim()
    if (line === '') continue
    hash.write(line)
  }
  return hash.digest('base64')
}
