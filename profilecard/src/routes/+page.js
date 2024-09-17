// src/routes/+page.js
// export async function load({ fetch }) {
//   try {
//     const response = await fetch('https://fdnd-agency.directus.app/items/deloitte_prompts');
//     if (!response.ok) {
//       throw new Error(`HTTP-fout! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('Data ontvangen:', data); // Controleer de structuur van de ontvangen data
//     return { props: { prompts: data.data } }; // Zorg ervoor dat je prompts correct doorgeeft
//   } catch (error) {
//     console.error('Fout bij ophalen van data:', error); // Log eventuele fouten
//     return { props: { prompts: [] }, error: error.message }; // Geef een lege array door bij fout
//   }
// }

// // src/routes/+page.js
// export async function load() {
//     return {
//       props: {
//         prompts: [] 
//       }
//     };
//   }

export let csr = true

// export async function load({ fetch }) {
//   const directus = getDirectusInstance(fetch);
  
//   // Haal de data op van de 'global' collectie
//   return {
//     global: await directus.request(readItems('global')),
//   };
// }


// import getDirectusInstance from '$lib/directus';
// import { readItems } from '@directus/sdk';

// export async function load({ fetch }) {
// 	const directus = getDirectusInstance(fetch);
// 	return {
// 		global: await directus.request(readItems('global')),
// 	};
// }