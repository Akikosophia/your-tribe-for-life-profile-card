<script>
  export let data
  
  function checkAvatarImage (avatar) {
    if (avatar.includes('https')) {
      return true
    } 
    return false
  }

  import { onMount } from "svelte";

  let name = "";
  let avatar = "";
  let error = "";

  // Gebruik onMount om de gegevens op te halen wanneer de component wordt geladen
  onMount(async () => {
    try {
      const response = await fetch('https://fdnd.directus.app/items/person/?filter={"id":25}');
      
      if (response.ok) {
        const persons = await response.json();

        if (persons.data && persons.data.length > 0) {
          name = persons.data[0].name;
          avatar = persons.data[0].avatar;
        } else {
          error = "Geen gegevens beschikbaar";
        }
      } else {
        error = "Fout bij het ophalen van gegevens";
      }
    } catch (error) {
      error = "Er is een fout opgetreden: " + error.message;
    }
  });
  
</script>

{#if error}
  <p>{error}</p>
{:else if name && avatar}
  <div>
    <h1>Naam: {name}</h1>
    <img src={avatar} alt="Avatar van {name}" />
  </div>
{:else}
  <p>Gegevens laden...</p>
{/if}


<!-- {#if name && avatar}
  <div>
    <h1>Naam: {name}</h1>
    <img src={avatar} alt="Avatar van {name}" />
  </div>
{:else}
  <p>Geen gegevens beschikbaar</p>
{/if} -->


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<main>
  <h1>Akiko Schermer</h1>

 <ul>
    {#each data.persons as person}
      <li>
        <a href="/{person.id}">
          <span class="avatar">
            {#if person.avatar.length > 0 && checkAvatarImage (person.avatar)}
              <img src="{person.avatar}" alt="Avatar van {person.name}">
            {:else if person.avatar.length > 0 || checkAvatarImage (person.avatar)}
              {person.avatar}
            {:else}
              <img src="https://robohash.org/mail@ashallendesign.co.uk" alt="Avatar van {person.name}">
            {/if}
          </span>
          {person.name}
        </a>
      </li>
    {/each}
  </ul> 
</main>


