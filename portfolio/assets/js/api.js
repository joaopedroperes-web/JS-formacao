
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/joaopedroperes-web/JS-formacao/main/portfolio/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}



