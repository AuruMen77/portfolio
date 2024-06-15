

const getImageUrl = (name:string):string => {
    return new URL(name, import.meta.url).href
    
}

export default getImageUrl;