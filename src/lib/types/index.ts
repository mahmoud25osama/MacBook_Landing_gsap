export type Label = {
    label: string
}
export type performImgType = {
    id: string
    src: string
}

export type performImgPositionsType = {
    id: string
    left?: number
    right?: number
    bottom: number
}

export type featuresTypes = {
    id: number
    icon: string
    highlight: string
    text: string
    styles: string
}

export type featureSeqType = {
    videoPath: string
    boxClass: string
    delay: number
}
export type footerLinksType = {
    label: string
    link: string
}
