const el = document.querySelector("#text")
const text = "Olá, Me chamo Guilherme Silva!"
const interval = 100

function showText(el, text, interval) {
    const char = text.split("").reverse()

    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer)

        }

        const next = char.pop()

        el.innerHTML += next
    }, interval)
}

showText(el, text, interval)

window.revelar = ScrollReveal({ reset: true})

// TOPO

revelar.reveal('#buttoncontato', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('#mylinkedin', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('#entreemcontato', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('#text', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('#devfrontend', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('#codificacao', {
    duration: 2000,
    distance: '90px'
})