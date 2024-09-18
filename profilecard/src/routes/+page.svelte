<script>
  export let data

  function checkAvatarImage (avatar) {
    if (avatar.includes('https')) {
      return true
    } 

    return false
  }
</script>

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


