const movies = [
  {
    title: "12 Angry Men",
    year: 1957,
    genre: "Drama",
    rating: "9.0",
    description: "A jury must decide the fate of a young man accused of murder. One juror's doubt sparks a tense debate that reveals hidden truths about justice and prejudice.",
    image: "Images/12_Angry_Men.webp"
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama,Thriller",
    rating: "9.3",
    description: "Two imprisoned men form an unlikely friendship over decades, finding hope and redemption through acts of courage and faith.",
    image: "Images/Shawshak_Redemption.jpg"
  },
  {
    title: "The Godfather",
    year: 1972,
    genre: "Crime, Drama",
    rating: "9.2",
    description: "An aging mafia patriarch passes control of his empire to his reluctant son, leading to a story of power, loyalty, and betrayal.",
    image: "Images/Godfather.webp"
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime, Drama",
    rating: "8.9",
    description: "The lives of two hitmen, a boxer, and a gangster's wife intertwine in this darkly comic crime masterpiece.",
    image: "Images/Pulp_fiction.webp"
  },
  {
    title: "The Usual Suspects",
    year: 1995,
    genre: "Crime, Mystery, Thriller",
    rating: "8.5",
    description: "A group of criminals brought together for a heist become entangled in a web of lies, deceit, and the mysterious Keyser Söze.",
    image: "Images/The_Usual_Suspects.jpg"
  },
  {
    title: "Fight Club",
    year: 1999,
    genre: "Action,Drama",
    rating: "8.8",
    description: "An office worker and a soap salesman start an underground fight club that evolves into something much more dangerous.",
    image: "Images/Fight_club.webp"
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi, Adventure, Drama",
    rating: "8.7",
    description: "A group of astronauts travels through a wormhole in search of a new home for humanity as Earth faces extinction.",
    image: "Images/Interstellar.webp"
  },
  {
    title: "Se7en",
    year: 1995,
    genre: "Crime, Thriller",
    rating: "8.6",
    description: "Two detectives hunt a serial killer who uses the seven deadly sins as his motive in a chilling psychological thriller.",
    image: "Images/Se7en.webp"
  },
  {
    title: "The Avengers",
    year: 2012,
    genre: "Action, Adventure, Sci-Fi",
    rating: "8.0",
    description: "Earth's mightiest heroes team up to stop Loki and his alien army from conquering the world.",
    image: "Images/Avengers.webp"
  },
  {
    title: "Shutter Island",
    year: 2010,
    genre: "Mystery, Thriller",
    rating: "8.2",
    description: "A U.S. Marshal investigates a psychiatric facility on a remote island, uncovering shocking truths about his own identity.",
    image: "Images/Shutter_island.webp"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action, Crime, Drama",
    rating: "9.0",
    description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos and challenges Batman’s moral limits.",
    image: "Images/Dark_knight.webp"
  },
  {
    title: "Inception",
    year: 2010,
    genre: "Action, Sci-Fi, Thriller",
    rating: "8.8",
    description: "A skilled thief who steals secrets through dreams is offered a chance to have his past erased if he can plant an idea into someone’s mind.",
    image: "Images/Inception.webp"
  },
  {
    title: "Joker",
    year: 2019,
    genre: "Crime, Drama, Thriller",
    rating: "8.4",
    description: "Arthur Fleck, a failed comedian, descends into madness and becomes Gotham’s most infamous villain — the Joker.",
    image: "Images/Joker.webp"
  },
  {
    title: "Avengers: Infinity War",
    year: 2018,
    genre: "Action, Adventure, Sci-Fi",
    rating: "8.4",
    description: "The Avengers unite to stop Thanos from collecting the Infinity Stones and wiping out half of all life in the universe.",
    image: "Images/Avengers_infinity_war.webp"
  },
  {
    title: "Ford v Ferrari",
    year: 2019,
    genre: "Action, Biography, Drama",
    rating: "8.1",
    description: "Car designer Carroll Shelby and driver Ken Miles build a race car for Ford to challenge Ferrari at Le Mans in 1966.",
    image: "Images/Ford_v_Ferrari.webp"
  },
  {
    title: "Dune: Part Two",
    year: 2024,
    genre: "Action, Adventure, Drama",
    rating: "8.8",
    description: "Paul Atreides joins forces with the Fremen to avenge his family and fulfill his destiny in a struggle for control of Arrakis.",
    image: "Images/Dune_2.webp"
  },
  {
    title: "Oppenheimer",
    year: 2023,
    genre: "Biography, Drama, History",
    rating: "8.9",
    description: "The story of J. Robert Oppenheimer, the brilliant physicist who led the Manhattan Project to create the atomic bomb — and the moral consequences that followed.",
    image: "Images/Oppenheimer.webp"
  }
];

const main = document.getElementById("main");
const title = document.getElementById("title");
const year = document.getElementById("year");
const genre = document.getElementById("genre");
const imdb = document.getElementById("imdb");
const description = document.getElementById("description");
const link = document.getElementById("link");


const modalImage = document.querySelector("#image img");
const movieGrid = document.getElementById("movie-grid");

if (movieGrid) {
  movies.forEach((movie) => {
    const img = document.createElement("img");
    img.src = movie.image;
    img.className = "h-[400px] rounded-[20px] hover:scale-110 transition-all hover:cursor-pointer";

    img.addEventListener("click", () => {
      title.innerText = movie.title;
      year.innerText = `Year:- ${movie.year}`;
      genre.innerText = `Genre:- ${movie.genre}`;
      imdb.innerText = `IMDB:- ${movie.rating}`;
      description.innerText = movie.description;
      modalImage.src = movie.image;

      // Show modal
      main.classList.remove("hidden");
      main.classList.add("flex");
    });

    movieGrid.appendChild(img);
  });
}

// Close modal when clicking outside the content
main.addEventListener("click", (e) => {
  if (e.target === main) {
    main.classList.add("hidden");
    main.classList.remove("flex");
  }
});

// Close modal when clicking the close button
const closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  main.classList.remove("flex");
});
