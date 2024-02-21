const getNewImageUrl = (url: string) => {
    const index = url.indexOf('media/') + 'media/'.length
    const firstPart = url.slice(0, index)
    const secondPart = url.slice(index)
    return firstPart + 'crop/600/400/' + secondPart
}
export default getNewImageUrl