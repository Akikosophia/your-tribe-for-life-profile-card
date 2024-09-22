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
    <form class="slider">
      <input type="radio" name="slider" id="slide1" checked />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
  
      <article class="slides">
        <section class="slide">
          <header class="info">
            <img src="{avatar}" alt="Avatar van {name}" class="avatar" />
            <h1 class="profile-name">{name} {surname}</h1>
            <p class="profile-info">
              Hi, ik ben {name} {surname}. Momenteel volg ik de opleiding frontend design & development (HVA).
            </p>
          </header>
        </section>
  
        <section class="slide">
          <h1>Favoriete liedje</h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalxv7bk3CMPe_mgHfw5Ik6r-pLLX_AZjE9w&s"
            alt="Favoriete liedje"
            class="rectangle-image"
          />

          <article class="muziek-kaart">
            <h2>Levels</h2>
            <p class="artist">Avicii</p>  
          </article>  
        </section>

        <section class="slide">
          <img class="matcha"
            src="https://coffeecopycat.com/wp-content/uploads/2023/04/IcedMatchaLatte1-1200x1600-1.jpg"
            alt="Favoriete drankje"
          />
          <footer class="info">
            <h3>Favoriete drankje</h3>
            <p>Ice matcha Latte met vanille</p>
          </footer>
        </section>
      </article>
  
      <nav class="navigation">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
      </nav>
    </form>
  </article>
  
  {:else}
    <p>Gegevens laden...</p>
  {/if}
</main>

<style>

main {
  font-family: "Open Sans", sans-serif;
}

h1.profile-name {
  text-align: left;
  margin: 10px 0;
  font-size: 24px;
  margin-left: 30px;
}

h1 {
  margin: 10px 0 8px; 
  margin-top: 10px;
  letter-spacing: 1px;
}

.slide .info h3 {
  margin: 10px 0 2px; 
  font-size: 24px;
}

.slide .info p {
  margin: 2px 0; 
  font-size: 16px;
  color: #555;
}

.slide .muziek-kaart h2 {
  margin: 10px 0 2px; 
  font-size: 24px;
}

.slide .muziek-kaart p {
  margin: 2px 0; 
  font-size: 16px;
  color: #555;
}

.profile-info {
  text-align: center;
  font-size: 16px;
  color: #555;
  margin: 10px 0 20px;
  margin-right: 18px;
  white-space: normal;
  word-wrap: break-word;
  max-width: 250px;
}

.slider {
  position: relative;
  width: 100%;
  max-width: 285px;
  margin: auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.slides {
  display: flex;
  transition: transform 1s ease-in-out;
  width: 300%;
}

.slide {
  flex: 1 0 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #fbc2eb 50%, #ffffff 100%);
  position: relative;
  z-index: 1;
  height: 100%;
  min-height: 520px;
  box-sizing: border-box;
}

.slide img.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  margin-left: 50px;
  margin-top: 20px;
}

.slide .rectangle-image {
  width: 240px;
  height: 250px;
  object-fit: cover;
}

.slide img.matcha{
   margin-right: 5px;
   height: 340px;
   width: 290px;
   object-fit: cover;
}

input[type="radio"] {
  display: none;
}

.navigation {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.navigation label {
  display: block;
  width: 12px;
  height: 12px;
  background-color: palevioletred;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
}

input#slide1:checked ~ .slides {
  transform: translateX(0%);
}

input#slide2:checked ~ .slides {
  transform: translateX(-100%);
}

input#slide3:checked ~ .slides {
  transform: translateX(-200%);
}

input#slide1:checked ~ .navigation label[for="slide1"],
input#slide2:checked ~ .navigation label[for="slide2"],
input#slide3:checked ~ .navigation label[for="slide3"] {
  background-color: #333;
}

/* .play-button svg {
  margin-top: 10px;
  fill: black;
  width: 30px;
  height: 30px;
}

.play-button:hover {
  background-color: #e59400;
  transform: scale(1.1);
} */
</style>
