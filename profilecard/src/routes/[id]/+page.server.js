// /** @type {import('./$types').PageLoad} */
// import getDirectusInstance from '$lib/directus';
// import { readItems } from '@directus/sdk';

// export async function load({ fetch, params }) {
// 	const directus = getDirectusInstance(fetch);
//     try{
//         return {
//             global: await directus.request(readItems('pages',params.slug))}
//         }
//         catch (err){
//         throw error (404,' Page not found')
//     }
// }

// import fetchJson from "$lib/fetch-json"


// export async function load({params}) {
//   console.log('PARAMS', params)
//   const url = `https://fdnd.directus.app/items/person/${params.id}`


//   const person = await fetchJson(url)


//   return {
//     person: person.data
//   }
// }

// import fetchJson from "$lib/fetch-json";

// export async function load({ params }) {
//   console.log('PARAMS', params);
//   const url = 'https://fdnd.directus.app/items/person/25';

//   try {
//     const person = await fetchJson(url);
//     return {
//       person: person.data,
//     };
//   } catch (error) {
//     console.error('Error fetching person:', error);

//     // Stuur een lege 'person' en een error boodschap
//     return {
//       person: null,
//       error: 'Failed to load person data',
//     };
//   }
// }



