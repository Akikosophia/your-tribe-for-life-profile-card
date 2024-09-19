<script>
  import { onMount } from "svelte";

  let name = "";
  let surname = "";
  let avatar = "";
  let bio = "";
  let error = "";

  // Gebruik onMount om de gegevens op te halen wanneer de component wordt geladen
  onMount(async () => {
    try {
      const response = await fetch(
        'https://fdnd.directus.app/items/person/?filter={"id":25}'
      );

      if (response.ok) {
        const persons = await response.json();

        if (persons.data && persons.data.length > 0) {
          name = persons.data[0].name;
          surname = persons.data[0].surname;
          avatar = persons.data[0].avatar;
          bio = persons.data[0].bio;
        } else {
          error = "Geen gegevens beschikbaar";
        }
      } else {
        error = "Fout bij het ophalen van gegevens";
      }
    } catch (error) {
      error = "Er is een fout opgetreden: ";
    }
  });
</script>

<main>
  {#if error}
    <p>{error}</p>
  {:else if name && avatar}
    <article class="profile-card">
      <h1 class="profile-name">{name} {surname}</h1>
      <img src={avatar} alt="Avatar van {name}" class="avatar" />
      <p class="profile-info">
        Hi, ik ben Akiko Schermer. Momenteel volg ik de opleiding frontend
        design & development (HVA).
      </p>
      <button class="profile-btn">Get started</button>

      <div class="carousel-controls">
        <input
          type="radio"
          name="carousel"
          id="slide1"
          class="carousel-radio"
          checked
        />
        <input
          type="radio"
          name="carousel"
          id="slide2"
          class="carousel-radio"
        />
        <input
          type="radio"
          name="carousel"
          id="slide3"
          class="carousel-radio"
        />
      </div>
    </article>
  {:else}
    <p>Gegevens laden...</p>
  {/if}
</main>

<style>
  main {
    font-family: "Open Sans", sans-serif;
    background-color: pink;
  }

  .profile-card {
    border-radius: 20px;
    max-width: 285px;
    text-align: center;
    font-family: Arial, sans-serif;
    margin-left: auto;
    margin-right: auto;
  }

  .profile-name {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }

  .avatar {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 15px;
  }

  .profile-info {
    font-size: 16px;
    color: black;
    margin-bottom: 20px;
  }

  .profile-btn {
    background-color: palevioletred;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .profile-btn:hover {
    background-color: #0056b3;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img.avatar {
    text-align: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }

  .carousel-controls {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .carousel-radio {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
  }

  .carousel-radio:checked {
    background-color: palevioletred;
  }

  a {
    text-decoration: none;
  }
</style>
