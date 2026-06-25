import React, { useMemo, useState } from 'react'

const fallbackPalettes = [
  ['#2e1065', '#7c3aed', '#facc15'],
  ['#3b0764', '#9333ea', '#fde047'],
  ['#1e1b4b', '#6d28d9', '#f59e0b'],
  ['#312e81', '#8b5cf6', '#fef08a'],
]

const getHash = (value: string) =>
  value.split('').reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 0)

const cleanSvgText = (value: string) => value.replace(/[<>&]/g, '').slice(0, 64)

const buildFallbackImage = (label: string, originalUrl?: string) => {
  const [from, to, accent] = fallbackPalettes[getHash(`${label}${originalUrl ?? ''}`) % fallbackPalettes.length]
  const safeLabel = cleanSvgText(label || 'Imagem de Segurança do Trabalho')
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" role="img" aria-label="${safeLabel}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="${from}" offset="0"/>
          <stop stop-color="${to}" offset="1"/>
        </linearGradient>
        <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
          <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#ffffff" stroke-opacity=".12" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="1200" height="675" fill="url(#bg)"/>
      <rect width="1200" height="675" fill="url(#grid)"/>
      <circle cx="965" cy="120" r="190" fill="#ffffff" opacity=".1"/>
      <circle cx="180" cy="560" r="240" fill="#ffffff" opacity=".08"/>
      <g transform="translate(450 142)">
        <path d="M150 0l150 56v112c0 119-63 191-150 232C63 359 0 287 0 168V56z" fill="${accent}"/>
        <path d="M150 42l102 38v88c0 88-41 140-102 174-61-34-102-86-102-174V80z" fill="#2e1065" opacity=".92"/>
        <path d="M97 188l37 37 82-103" fill="none" stroke="${accent}" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <text x="600" y="570" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700" text-anchor="middle">Segurança e Saúde no Trabalho</text>
      <text x="600" y="622" fill="#fef3c7" font-family="Arial, Helvetica, sans-serif" font-size="30" text-anchor="middle">${safeLabel}</text>
    </svg>`

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props
  const fallbackSrc = useMemo(
    () => buildFallbackImage(alt ?? 'Imagem de Segurança do Trabalho', src),
    [alt, src]
  )

  return didError || !src ? (
    <img src={fallbackSrc} alt={alt} className={className} style={style} {...rest} data-original-url={src} />
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
