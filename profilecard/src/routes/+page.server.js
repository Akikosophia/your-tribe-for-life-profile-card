import fetchJson from "$lib/fetch-json"

export async function load() {
  // const ids = [25, 18, 94, 79, 84, 58]
  // const url = `https://fdnd.directus.app/items/person/?filter[id][_in]=${encodeURIComponent(ids.join(','))}`
  const url = 'https://fdnd.directus.app/items/person/?filter={"id":25}'

  const persons = await fetchJson(url)

  console.log(persons.data)


  // if (persons.data.length > 0) {
  //   console.log("Naam:", persons.data[0].name);
  //   console.log("Avatar:", persons.data[0].avatar);
  // }
  

  return {
    persons: persons.data
  }
}
