window.libs = []
onload = e => {
    const libsLI = document.querySelectorAll('ol>li');
    console.log(libsLI)
    for (let i = 0; i < libsLI.length; i++) {
        const lib = libsLI[i].innerText.trim()
        libs.push(lib)
    }
}