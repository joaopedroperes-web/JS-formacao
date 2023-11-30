
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/joaopedroperes-web/JS-formacao/main/portifolio/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}



