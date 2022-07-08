export default arr => {
    if(!Array.isArray(arr)){
        return null
    }
    let filterNum = arr.filter((num) => {return num >= 0 || num < 0})
    let minNum = Math.min.apply(Math, filterNum)
}