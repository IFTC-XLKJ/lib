window.libs = []
onload = e => {
    const libsLI = document.querySelectorAll('ol>li');
    console.log(libsLI)
    for (let i = 0; i < libsLI.length; i++) {
        const lib = libsLI[i].innerText.trim()
        libs.push(lib)
    }
    search.onkeydown = e => {
        if (e.key == 'Enter') {
            const lib = libs.filter(lib => lib.toLowerCase().includes(search.value.toLowerCase()))
            if (lib) {
                console.log(lib)
                result.innerHTML = '搜索结果:'
                for (let i = 0; i < lib.length; i++) {
                    result.innerHTML += `<li><a href="https://www.npmjs.com/package/${lib[i]}">${lib[i]}</a></li>`
                }
            }
        }
    }
}