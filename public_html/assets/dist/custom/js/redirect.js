const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})

console.log(params.music)

if (params.music !== null) {
    selectMusic(params.music)
}
