<script>
  export let person;
  export let error;
</script>

{#if error}
  <p>{error}</p>
{:else if person}
  <h1>{person.name}</h1>
  <p>{person.bio}</p>
  <!-- Voeg hier andere velden van 'person' toe -->
{:else}
  <p>Geen gegevens beschikbaar</p>
{/if}
  