function extract(content) {
    let tar = document.getElementById(content)
    let result = tar.textContent.match(/\(([^)]+)\)/g).filter( x => x != '').join('; ')
    return result
}