/* MIGA — Interacciones y estado local */
"use strict";

const recipes = [
  {
    id: "pasta-cremosa",
    title: "Pasta cremosa fácil",
    description: "Una cena reconfortante con cuatro básicos de despensa.",
    time: 20,
    difficulty: "Muy fácil",
    points: 40,
    category: ["Rápidas", "Económicas", "Para principiantes"],
    emoji: "🍝",
    visual: "visual-pasta",
    author: "MIGA",
    authorInitials: "MI",
    ingredients: ["200 g de pasta", "100 ml de nata para cocinar", "40 g de queso rallado", "1 diente de ajo", "Sal y pimienta"],
    steps: ["Cuece la pasta siguiendo el tiempo del paquete.", "Dora el ajo picado con un poco de aceite.", "Añade la nata y el queso; remueve a fuego suave.", "Mezcla con la pasta y un poco del agua de cocción."]
  },
  {
    id: "bowl-pollo",
    title: "Bowl de pollo completo",
    description: "Pollo dorado, arroz y verduras en un bol que lo tiene todo.",
    time: 30,
    difficulty: "Fácil",
    points: 55,
    category: ["Saludables"],
    emoji: "🍲",
    visual: "visual-chicken",
    author: "Sofía",
    authorInitials: "SO",
    ingredients: ["1 pechuga de pollo", "120 g de arroz", "1 zanahoria", "1/2 aguacate", "Salsa de soja", "Semillas al gusto"],
    steps: ["Cuece el arroz y reserva.", "Corta el pollo, salpimienta y dóralo en una sartén.", "Ralla la zanahoria y corta el aguacate.", "Monta el bol y termina con soja y semillas."]
  },
  {
    id: "tortilla-rapida",
    title: "Tortilla rápida",
    description: "Jugosa, sencilla y lista antes de que el hambre se impaciente.",
    time: 15,
    difficulty: "Muy fácil",
    points: 35,
    category: ["Rápidas", "Económicas", "Para principiantes"],
    emoji: "🍳",
    visual: "visual-tortilla",
    author: "Dani",
    authorInitials: "DA",
    ingredients: ["3 huevos", "1 patata cocida", "1/4 de cebolla", "Aceite de oliva", "Sal"],
    steps: ["Corta la patata cocida en dados.", "Sofríe la cebolla y añade la patata.", "Bate los huevos con sal y mezcla todo.", "Cuaja dos minutos por cada lado con ayuda de un plato."]
  },
  {
    id: "ramen-casero",
    title: "Ramen casero exprés",
    description: "Un caldo sabroso y reconfortante sin pasarte horas cocinando.",
    time: 25,
    difficulty: "Fácil",
    points: 50,
    category: ["Rápidas", "Económicas"],
    emoji: "🍜",
    visual: "visual-ramen",
    author: "Marta",
    authorInitials: "MK",
    ingredients: ["1 paquete de noodles", "500 ml de caldo", "1 huevo", "4 champiñones", "Salsa de soja", "Cebolleta"],
    steps: ["Calienta el caldo con soja y los champiñones.", "Cuece el huevo durante 7 minutos y pélalo.", "Añade los noodles al caldo el tiempo indicado.", "Sirve con el huevo partido y cebolleta."]
  },
  {
    id: "ensalada-completa",
    title: "Ensalada que sí llena",
    description: "Fresca, completa y con una salsa que querrás repetir.",
    time: 12,
    difficulty: "Muy fácil",
    points: 35,
    category: ["Rápidas", "Saludables", "Vegetarianas", "Para principiantes"],
    emoji: "🥗",
    visual: "visual-salad",
    author: "Lucía",
    authorInitials: "LU",
    ingredients: ["Mezcla de hojas verdes", "1/2 bote de garbanzos", "Tomates cherry", "Queso feta", "1 cucharada de yogur", "Limón y aceite"],
    steps: ["Lava y escurre las hojas.", "Enjuaga los garbanzos y corta los tomates.", "Mezcla yogur, limón, aceite y sal.", "Junta todo y desmenuza el feta por encima."]
  },
  {
    id: "mug-cake",
    title: "Mug cake de chocolate",
    description: "Un capricho de chocolate hecho en taza y en cinco minutos.",
    time: 5,
    difficulty: "Muy fácil",
    points: 30,
    category: ["Rápidas", "Postres", "Para principiantes"],
    emoji: "🍫",
    visual: "visual-cake",
    author: "MIGA",
    authorInitials: "MI",
    ingredients: ["4 cucharadas de harina", "2 cucharadas de cacao", "2 cucharadas de azúcar", "4 cucharadas de leche", "1 cucharada de aceite", "1/4 cucharadita de levadura"],
    steps: ["Mezcla los ingredientes secos en una taza grande.", "Añade leche y aceite; remueve hasta que no haya grumos.", "Cocina 70-90 segundos en el microondas.", "Deja templar un minuto antes de atacar."]
  },
  {
    id: "quesadillas-verduras",
    title: "Quesadillas de verduras",
    description: "Crujientes por fuera, fundentes por dentro y listas en un momento.",
    time: 15,
    difficulty: "Muy fácil",
    points: 35,
    category: ["Rápidas", "Económicas", "Vegetarianas", "Para principiantes"],
    emoji: "🌮",
    visual: "visual-quesadilla",
    author: "Nora",
    authorInitials: "NO",
    ingredients: ["2 tortillas de trigo", "1/2 pimiento", "1/4 de cebolla", "Queso rallado", "Maíz", "Aceite y sal"],
    steps: ["Corta y saltea las verduras durante cinco minutos.", "Pon una tortilla en la sartén y reparte queso y verduras.", "Cubre con la otra tortilla y cocina a fuego medio.", "Da la vuelta con un plato y corta en triángulos."]
  },
  {
    id: "arroz-tres-delicias",
    title: "Arroz tres delicias",
    description: "La receta perfecta para aprovechar el arroz que quedó de ayer.",
    time: 18,
    difficulty: "Fácil",
    points: 40,
    category: ["Rápidas", "Económicas"],
    emoji: "🍚",
    visual: "visual-rice",
    author: "Álex",
    authorInitials: "AL",
    ingredients: ["200 g de arroz cocido", "1 huevo", "50 g de guisantes", "1 zanahoria", "Taquitos de pavo", "Salsa de soja"],
    steps: ["Haz una tortilla fina y córtala en tiras.", "Saltea la zanahoria y los guisantes.", "Añade el arroz y el pavo a fuego fuerte.", "Incorpora la tortilla y un chorrito de soja."]
  },
  {
    id: "hummus-casero",
    title: "Hummus sin complicaciones",
    description: "Cremoso, barato y perfecto para picar o montar una cena rápida.",
    time: 10,
    difficulty: "Muy fácil",
    points: 30,
    category: ["Rápidas", "Económicas", "Saludables", "Vegetarianas", "Para principiantes"],
    emoji: "🫘",
    visual: "visual-hummus",
    author: "MIGA",
    authorInitials: "MI",
    ingredients: ["1 bote de garbanzos", "1 cucharada de tahini", "1/2 limón", "1 diente de ajo", "Aceite de oliva", "Comino y sal"],
    steps: ["Enjuaga bien los garbanzos.", "Tritura todos los ingredientes con dos cucharadas de agua.", "Ajusta la textura añadiendo agua poco a poco.", "Sirve con aceite, pimentón y pan tostado."]
  },
  {
    id: "salmon-horno",
    title: "Salmón al horno con verduras",
    description: "Una bandeja, cero líos y una comida completa en media hora.",
    time: 30,
    difficulty: "Fácil",
    points: 60,
    category: ["Saludables"],
    emoji: "🐟",
    visual: "visual-salmon",
    author: "Clara",
    authorInitials: "CL",
    ingredients: ["1 lomo de salmón", "1 calabacín", "Tomates cherry", "1/2 limón", "Aceite de oliva", "Ajo en polvo y sal"],
    steps: ["Calienta el horno a 200 °C.", "Corta las verduras y colócalas en una bandeja.", "Pon el salmón encima y aliña todo.", "Hornea entre 15 y 18 minutos."]
  },
  {
    id: "curry-garbanzos",
    title: "Curry de garbanzos",
    description: "Especiado, cremoso y todavía mejor al día siguiente.",
    time: 25,
    difficulty: "Fácil",
    points: 50,
    category: ["Económicas", "Saludables", "Vegetarianas"],
    emoji: "🥘",
    visual: "visual-curry",
    author: "Irene",
    authorInitials: "IR",
    ingredients: ["1 bote de garbanzos", "200 ml de leche de coco", "1/2 cebolla", "1 tomate", "1 cucharadita de curry", "Arroz para acompañar"],
    steps: ["Sofríe la cebolla picada.", "Añade tomate y curry; cocina tres minutos.", "Incorpora garbanzos y leche de coco.", "Cuece 12 minutos y sirve con arroz."]
  },
  {
    id: "pizza-pan",
    title: "Pizza rápida con pan de pita",
    description: "Para cuando quieres pizza y la quieres ahora, sin amasar nada.",
    time: 12,
    difficulty: "Muy fácil",
    points: 30,
    category: ["Rápidas", "Económicas", "Para principiantes"],
    emoji: "🍕",
    visual: "visual-pizza",
    author: "Javi",
    authorInitials: "JN",
    ingredients: ["1 pan de pita", "3 cucharadas de tomate frito", "Mozzarella", "Champiñones", "Orégano"],
    steps: ["Calienta el horno o la airfryer a 200 °C.", "Cubre el pan con tomate y mozzarella.", "Añade champiñones y orégano.", "Cocina 7 minutos hasta que el queso se funda."]
  },
  {
    id: "tostadas-francesas",
    title: "Tostadas francesas",
    description: "Desayuno de domingo con ingredientes de cualquier martes.",
    time: 15,
    difficulty: "Muy fácil",
    points: 35,
    category: ["Rápidas", "Económicas", "Postres", "Para principiantes"],
    emoji: "🍞",
    visual: "visual-toast",
    author: "Lucía",
    authorInitials: "LU",
    ingredients: ["2 rebanadas de pan", "1 huevo", "80 ml de leche", "Canela", "1 cucharadita de azúcar", "Fruta para servir"],
    steps: ["Bate el huevo con leche, azúcar y canela.", "Empapa el pan unos segundos por cada lado.", "Dora en una sartén ligeramente engrasada.", "Sirve con fruta o yogur."]
  },
  {
    id: "cheesecake-vaso",
    title: "Cheesecake en vaso",
    description: "Todo el sabor de una tarta de queso sin horno ni dramas.",
    time: 15,
    difficulty: "Fácil",
    points: 45,
    category: ["Postres", "Vegetarianas"],
    emoji: "🍰",
    visual: "visual-cheesecake",
    author: "Marta",
    authorInitials: "MK",
    ingredients: ["4 galletas", "100 g de queso crema", "1 yogur griego", "1 cucharada de miel", "Mermelada de frutos rojos"],
    steps: ["Tritura las galletas y repártelas en dos vasos.", "Mezcla queso crema, yogur y miel.", "Añade la crema sobre la base de galleta.", "Termina con mermelada y enfría 30 minutos si puedes esperar."]
  }
];

const places = {
  cafe: { name: "Café Brújula", type: "Cafetería asociada", description: "Café de especialidad y tostadas de producto local. Enseña tu perfil MIGA al pedir.", address: "⌖ Malasaña · A 8 min", reward: "+25 migas con tu primera visita", emoji: "☕", imageClass: "place-cafe" },
  market: { name: "Mercado Vivo", type: "Mercado de proximidad", description: "Puestos de temporada, productores cercanos y descuentos para la comunidad MIGA.", address: "⌖ Chueca · A 12 min", reward: "+40 migas en el taller del sábado", emoji: "🥕", imageClass: "place-market" },
  shop: { name: "La Despensa", type: "Tienda de producto local", description: "Legumbres a granel, conservas artesanas y todo lo necesario para una buena despensa.", address: "⌖ Lavapiés · A 16 min", reward: "10% de descuento con nivel 4", emoji: "🛍", imageClass: "place-shop" },
  workshop: { name: "Fuego Lento", type: "Taller de cocina", description: "Clases cercanas y muy prácticas para aprender desde cero en grupos pequeños.", address: "⌖ Embajadores · A 20 min", reward: "+100 migas al completar un taller", emoji: "🍳", imageClass: "place-workshop" },
  bakery: { name: "Pan y Punto", type: "Obrador artesanal", description: "Pan de masa madre, bollería diaria y talleres para perderle el miedo a la harina.", address: "⌖ Centro · A 10 min", reward: "+30 migas al sellar tu visita", emoji: "🥐", imageClass: "place-bakery" }
};

const store = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(`miga_${key}`);
      return value === null ? fallback : JSON.parse(value);
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(`miga_${key}`, JSON.stringify(value)); } catch { /* El modo privado puede bloquearlo. */ }
  }
};

let points = Number(store.get("points", 850));
let favorites = store.get("favorites", []);
let uploadedRecipes = store.get("uploaded_recipes", []);
let activeCategory = "Todas";
let currentRecipeId = null;
let toastTimer;

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function showToast(title, message) {
  const toast = $("#toast");
  if (!toast) return;
  $("#toast-title").textContent = title;
  $("#toast-message").textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3400);
}

function allRecipes() {
  return [...uploadedRecipes, ...recipes];
}

function recipeCardTemplate(recipe) {
  const isFavorite = favorites.includes(recipe.id);
  const category = Array.isArray(recipe.category) ? recipe.category[0] : recipe.category;
  return `
    <article class="recipe-card reveal visible" data-recipe-id="${escapeHTML(recipe.id)}">
      <div class="recipe-visual ${escapeHTML(recipe.visual || "visual-user")}">
        <button class="favorite-button ${isFavorite ? "active" : ""}" type="button" data-favorite="${escapeHTML(recipe.id)}" aria-label="${isFavorite ? "Quitar de" : "Guardar en"} favoritos" aria-pressed="${isFavorite}">${isFavorite ? "♥" : "♡"}</button>
        <div class="food-plate" aria-hidden="true">${escapeHTML(recipe.emoji || "🍽")}</div>
        <span class="category-chip">${escapeHTML(category)}</span>
      </div>
      <div class="recipe-card-body">
        <h3>${escapeHTML(recipe.title)}</h3>
        <p>${escapeHTML(recipe.description)}</p>
        <div class="recipe-meta"><span>⏱ ${escapeHTML(recipe.time)} min</span><span>◒ ${escapeHTML(recipe.difficulty)}</span><span>◆ +${escapeHTML(recipe.points)}</span></div>
        <div class="recipe-card-actions">
          <div class="recipe-author"><span class="mini-avatar">${escapeHTML(recipe.authorInitials)}</span> por ${escapeHTML(recipe.author)}</div>
          <button class="view-recipe" type="button" data-view-recipe="${escapeHTML(recipe.id)}">Ver receta →</button>
        </div>
      </div>
    </article>`;
}

function renderRecipes() {
  const grid = $("#recipe-grid");
  const searchInput = $("#recipe-search");
  if (!grid || !searchInput) return;
  const search = searchInput.value.trim().toLocaleLowerCase("es");
  const filtered = allRecipes().filter(recipe => {
    const categories = Array.isArray(recipe.category) ? recipe.category : [recipe.category];
    const matchesCategory = activeCategory === "Todas" || categories.includes(activeCategory);
    const searchable = [recipe.title, recipe.description, ...recipe.ingredients].join(" ").toLocaleLowerCase("es");
    return matchesCategory && searchable.includes(search);
  });
  grid.innerHTML = filtered.map(recipeCardTemplate).join("");
  const empty = $("#recipe-empty");
  if (empty) empty.hidden = filtered.length > 0;
}

function findRecipe(id) {
  return allRecipes().find(recipe => recipe.id === id);
}

function updateFavoriteControls(id) {
  const active = favorites.includes(id);
  $$(`[data-favorite="${CSS.escape(id)}"]`).forEach(button => {
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute("aria-label", `${active ? "Quitar de" : "Guardar en"} favoritos`);
    button.textContent = active ? "♥" : "♡";
  });
  if (currentRecipeId === id) {
    const modalFavorite = $("#modal-favorite");
    const modalFavoriteText = $("#modal-favorite-text");
    if (modalFavorite) {
      modalFavorite.classList.toggle("active", active);
      modalFavorite.setAttribute("aria-pressed", String(active));
      modalFavorite.textContent = active ? "♥" : "♡";
    }
    if (modalFavoriteText) modalFavoriteText.textContent = active ? "Quitar de favoritos" : "Guardar en favoritos";
  }
  updateProfile();
}

function toggleFavorite(id) {
  const recipe = findRecipe(id);
  if (!recipe) return;
  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
    showToast("Eliminada de favoritos", `${recipe.title} ya no está en tu recetario.`);
  } else {
    favorites.push(id);
    showToast("Guardada en favoritos", `${recipe.title} ya está en tu recetario.`);
  }
  store.set("favorites", favorites);
  updateFavoriteControls(id);
}

function openRecipeModal(id) {
  const recipe = findRecipe(id);
  if (!recipe) return;
  currentRecipeId = id;
  const modal = $("#recipe-modal");
  const category = Array.isArray(recipe.category) ? recipe.category[0] : recipe.category;
  $("#modal-recipe-visual").className = `modal-recipe-visual ${recipe.visual || "visual-user"}`;
  $("#modal-food").textContent = recipe.emoji || "🍽";
  $("#modal-category").textContent = category;
  $("#modal-recipe-title").textContent = recipe.title;
  $("#modal-description").textContent = recipe.description;
  $("#modal-time").textContent = `${recipe.time} min`;
  $("#modal-difficulty").textContent = recipe.difficulty;
  $("#modal-points").textContent = `+${recipe.points}`;
  $("#modal-ingredients").innerHTML = recipe.ingredients.map(item => `<li>${escapeHTML(item)}</li>`).join("");
  $("#modal-steps").innerHTML = recipe.steps.map(item => `<li>${escapeHTML(item)}</li>`).join("");
  updateFavoriteControls(id);
  modal.showModal();
  document.body.classList.add("modal-open");
}

function closeDialog(dialog) {
  dialog.close();
  document.body.classList.remove("modal-open");
}

function updatePoints(amount = 0) {
  points += amount;
  store.set("points", points);
  $$('[data-points]').forEach(node => { node.textContent = points.toLocaleString("es-ES"); });
  const heroPoints = $("#hero-points");
  if (heroPoints) heroPoints.textContent = points.toLocaleString("es-ES");
  const levelBase = Math.floor(points / 250) * 250;
  const nextLevel = Math.max(1000, levelBase + 250);
  const percentage = points < 1000
    ? Math.max(0, Math.min(100, Math.round((points / 1000) * 100)))
    : Math.max(0, Math.min(100, Math.round(((points - levelBase) / 250) * 100)));
  const pointsToNext = $("#points-to-next");
  const levelPercent = $("#level-percent");
  const globalProgress = $("#global-progress");
  if (pointsToNext) pointsToNext.textContent = `${Math.max(0, nextLevel - points)} migas`;
  if (levelPercent) levelPercent.textContent = `${percentage}%`;
  if (globalProgress) globalProgress.style.width = `${percentage}%`;
  updateCourseLocks();
}

function updateProfile() {
  const uploadedCount = $("#uploaded-count");
  const favoriteCount = $("#favorite-count");
  const savedRecipes = $("#saved-recipes");
  if (uploadedCount) uploadedCount.textContent = 3 + uploadedRecipes.length;
  if (favoriteCount) favoriteCount.textContent = 12 + favorites.length;
  if (!savedRecipes) return;
  const saved = favorites.map(findRecipe).filter(Boolean).slice(0, 6);
  savedRecipes.innerHTML = saved.length ? saved.map(recipe => `
    <button class="saved-item" type="button" data-view-recipe="${escapeHTML(recipe.id)}">
      <span class="saved-item-visual ${escapeHTML(recipe.visual || "visual-user")}">${escapeHTML(recipe.emoji || "🍽")}</span>
      <strong>${escapeHTML(recipe.title)}</strong><span>${escapeHTML(recipe.time)} min · ${escapeHTML(recipe.difficulty)}</span>
    </button>`).join("") : '<p class="saved-placeholder">Guarda recetas con el corazón y aparecerán aquí.</p>';
}

function updateCourseLocks() {
  $$(".course-card[data-unlock]").forEach(card => {
    const required = Number(card.dataset.unlock);
    const unlocked = points >= required;
    card.classList.toggle("course-locked", !unlocked);
    card.classList.toggle("unlocked-now", unlocked);
    const button = $(".course-action", card);
    const note = $(".unlock-note", card);
    if (unlocked) {
      button.className = "button button-dark button-full course-action";
      button.textContent = "Empezar curso";
      if (note) note.innerHTML = '<span aria-hidden="true">✓</span> Curso desbloqueado con tus migas';
    } else {
      button.className = "button button-muted button-full course-action";
      button.innerHTML = `Te faltan <span data-missing>${required - points}</span> migas`;
    }
  });
}

function setupRecipes() {
  if (!$("#recipe-grid")) return;
  renderRecipes();
  $("#recipe-search").addEventListener("input", renderRecipes);
  $$(".filter-chip").forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    $$(".filter-chip").forEach(item => item.classList.toggle("active", item === button));
    renderRecipes();
  }));
  $("#recipe-grid").addEventListener("click", event => {
    const favorite = event.target.closest("[data-favorite]");
    const viewer = event.target.closest("[data-view-recipe]");
    if (favorite) toggleFavorite(favorite.dataset.favorite);
    if (viewer) openRecipeModal(viewer.dataset.viewRecipe);
  });
  const savedRecipes = $("#saved-recipes");
  if (savedRecipes) savedRecipes.addEventListener("click", event => {
    const viewer = event.target.closest("[data-view-recipe]");
    if (viewer) openRecipeModal(viewer.dataset.viewRecipe);
  });
  $("#modal-favorite").addEventListener("click", () => toggleFavorite(currentRecipeId));
  $("#modal-favorite-text").addEventListener("click", () => toggleFavorite(currentRecipeId));
  $("[data-close-modal]").addEventListener("click", () => closeDialog($("#recipe-modal")));
}

function setupUpload() {
  const modal = $("#upload-modal");
  if (!modal) return;
  const openUpload = () => {
    modal.showModal();
    document.body.classList.add("modal-open");
    setTimeout(() => $("#recipe-title").focus(), 60);
  };
  $$('[data-open-upload]').forEach(button => button.addEventListener("click", event => {
    event.preventDefault();
    openUpload();
  }));
  $("[data-close-upload]").addEventListener("click", () => closeDialog(modal));
  $("#recipe-image").addEventListener("change", event => {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      event.target.value = "";
      showToast("La imagen pesa demasiado", "Elige una foto de menos de 5 MB.");
      return;
    }
    $(".file-drop strong").textContent = file.name;
    $(".file-drop small").textContent = "Foto lista para publicar";
  });
  $("#upload-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title").trim();
    const ingredients = data.get("ingredients").split("\n").map(item => item.trim()).filter(Boolean);
    const steps = data.get("steps").split("\n").map(item => item.trim()).filter(Boolean);
    const id = `laura-${Date.now()}`;
    uploadedRecipes.unshift({
      id,
      title,
      description: "Una receta compartida por Laura con la comunidad MIGA.",
      time: Number(data.get("time")),
      difficulty: data.get("difficulty"),
      points: 50,
      category: [data.get("category")],
      emoji: "🍽",
      visual: "visual-user",
      author: "Laura",
      authorInitials: "LA",
      ingredients,
      steps
    });
    store.set("uploaded_recipes", uploadedRecipes);
    updatePoints(50);
    updateProfile();
    renderRecipes();
    event.currentTarget.reset();
    $(".file-drop strong").textContent = "Añade una foto";
    $(".file-drop small").textContent = "PNG o JPG, máximo 5 MB";
    closeDialog(modal);
    showToast("Receta subida. Has ganado 50 migas.", `${title} ya forma parte de MIGA.`);
  });
  if (location.hash === "#subir") setTimeout(openUpload, 100);
}

function setupCommunity() {
  if (!$("#community-feed")) return;
  $("#community-feed").addEventListener("click", event => {
    const like = event.target.closest(".like-button");
    const comment = event.target.closest(".comment-toggle");
    const rate = event.target.closest(".rate-button");
    if (like) {
      const active = like.classList.toggle("active");
      like.setAttribute("aria-pressed", String(active));
      $("span", like).textContent = active ? "♥" : "♡";
      const count = $("b", like);
      count.textContent = Number(count.textContent) + (active ? 1 : -1);
    }
    if (comment) {
      const form = $(".comment-form", comment.closest(".post-card"));
      form.hidden = !form.hidden;
      if (!form.hidden) $("input", form).focus();
    }
    if (rate) {
      rate.textContent = "★ Plato valorado";
      rate.style.color = "var(--red)";
      showToast("Valoración enviada", "Tu opinión ayuda a la comunidad.");
    }
  });
  $$(".comment-form").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const input = $("input", form);
    if (!input.value.trim()) return;
    input.value = "";
    form.hidden = true;
    showToast("Comentario publicado", "Ya formas parte de la conversación.");
  }));
  $("#quick-share-form").addEventListener("submit", event => {
    event.preventDefault();
    const textarea = $("#share-text");
    const text = textarea.value.trim();
    if (!text) { textarea.focus(); return; }
    const article = document.createElement("article");
    article.className = "post-card visible";
    article.innerHTML = `
      <header class="post-header"><div class="user-avatar avatar-la">LA</div><div><strong>Laura</strong><span>@lauraenmiga · Ahora</span></div><button class="icon-button" type="button" aria-label="Más opciones">•••</button></header>
      <p>${escapeHTML(text)}</p>
      <div class="post-reactions"><button class="reaction-button like-button" type="button" aria-pressed="false"><span aria-hidden="true">♡</span> <b>0</b></button><button class="reaction-button comment-toggle" type="button"><span aria-hidden="true">◯</span> 0</button><button class="rate-button" type="button">★ Valorar plato</button></div>
      <form class="comment-form" hidden><label class="sr-only">Añadir comentario</label><input type="text" maxlength="120" placeholder="Escribe un comentario..."><button type="submit">Enviar</button></form>`;
    $("#community-feed").prepend(article);
    $(".comment-form", article).addEventListener("submit", event => { event.preventDefault(); event.currentTarget.hidden = true; showToast("Comentario publicado", "Ya formas parte de la conversación."); });
    textarea.value = "";
    showToast("Publicación compartida", "La comunidad ya puede verla.");
  });
  $("[data-join-challenge]").addEventListener("click", event => {
    event.currentTarget.textContent = "✓ Ya estás dentro";
    event.currentTarget.disabled = true;
    showToast("Te has unido al reto", "Tienes hasta el domingo para compartir tu receta.");
  });
  const chatForm = $("#chat-form");
  if (chatForm) {
    chatForm.addEventListener("submit", event => {
      event.preventDefault();
      const input = $("#chat-input");
      const text = input.value.trim();
      if (!text) { input.focus(); return; }
      const message = document.createElement("div");
      message.className = "chat-message is-own";
      message.innerHTML = `<p><strong>Laura</strong> ${escapeHTML(text)}</p><div class="user-avatar avatar-la">LA</div>`;
      $("#chat-thread").append(message);
      $("#chat-thread").scrollTop = $("#chat-thread").scrollHeight;
      input.value = "";
      showToast("Mensaje enviado", "Tu mensaje aparece en el chat de comunidad.");
    });
  }
}

function setupCourses() {
  if (!$("#course-grid")) return;
  $$(".level-tab").forEach(tab => tab.addEventListener("click", () => {
    const level = tab.dataset.level;
    $$(".level-tab").forEach(item => { item.classList.toggle("active", item === tab); item.setAttribute("aria-selected", String(item === tab)); });
    $$(".course-card").forEach(card => { card.hidden = level !== "Todos" && card.dataset.courseLevel !== level; });
  }));
  $("#course-grid").addEventListener("click", event => {
    const button = event.target.closest(".course-action");
    if (!button) return;
    const card = button.closest(".course-card");
    if (card.classList.contains("course-locked")) {
      showToast("Curso todavía bloqueado", `Suma migas cocinando, compartiendo y completando retos.`);
    } else {
      showToast("Curso preparado", "Abrimos tu siguiente lección. ¡A cocinar!");
    }
  });
}

function setupMap() {
  if (!$("#fake-map")) return;
  $$(".map-pin").forEach(pin => pin.addEventListener("click", () => {
    const place = places[pin.dataset.place];
    $$(".map-pin").forEach(item => item.classList.toggle("active", item === pin));
    $("#place-type").textContent = place.type;
    $("#place-name").textContent = place.name;
    $("#place-description").textContent = place.description;
    $("#place-address").textContent = place.address;
    $("#place-reward").textContent = place.reward;
    $("#place-image").className = `place-image ${place.imageClass}`;
    $("#place-image > span").textContent = place.emoji;
    $("#save-place").textContent = "Guardar lugar";
  }));
  $("#save-place").addEventListener("click", event => {
    event.currentTarget.textContent = "✓ Lugar guardado";
    showToast("Lugar guardado", "Lo encontrarás en tu próximo plan MIGA.");
  });
  $$(".map-controls button").forEach(button => button.addEventListener("click", () => showToast("Mapa simulado", "Selecciona un punto para descubrir el lugar y su recompensa.")));
}

function setupNavigation() {
  const header = $(".site-header");
  const menuButton = $(".menu-toggle");
  const nav = $("#main-nav");
  if (!header || !menuButton || !nav) return;
  const closeMenu = () => { nav.classList.remove("open"); menuButton.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); menuButton.setAttribute("aria-label", "Abrir menú"); };
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  $$(".nav-link").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("click", event => { if (!header.contains(event.target)) closeMenu(); });
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), { passive: true });

  const hashLinks = $$('.nav-link[href^="#"]');
  if (hashLinks.length) {
    const sections = $$('main section[id]');
    const sectionObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = visible.target.id;
      hashLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
    }, { rootMargin: "-25% 0px -60%", threshold: [0, .25, .5] });
    sections.forEach(section => sectionObserver.observe(section));
  }

  const startFree = $("[data-start-free]");
  if (startFree) startFree.addEventListener("click", () => {
    showToast("Tu aventura empieza aquí", "Ya tienes 850 migas de bienvenida para explorar MIGA.");
  });
}

function setupDialogs() {
  $$("dialog").forEach(dialog => {
    dialog.addEventListener("click", event => {
      const bounds = dialog.getBoundingClientRect();
      const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (outside) closeDialog(dialog);
    });
    dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
  });
}

function setupReveals() {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal").forEach(item => item.classList.add("visible"));
    return;
  }
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: "0px 0px -30px" });
  $$(".reveal").forEach(item => revealObserver.observe(item));
}

function setupMiscActions() {
  const editProfile = $(".edit-profile");
  if (editProfile) editProfile.addEventListener("click", () => showToast("Perfil de Laura", "La edición de perfil estará disponible muy pronto."));
  $$(".compact-course button").forEach(button => button.addEventListener("click", () => showToast("Lección preparada", "Retoma el curso justo donde lo dejaste.")));
  $$('.site-footer a[href="#"]').forEach(link => link.addEventListener("click", event => { event.preventDefault(); showToast("En construcción", "Este enlace formará parte de la siguiente versión de MIGA."); }));
}

function init() {
  setupNavigation();
  setupRecipes();
  setupUpload();
  setupCommunity();
  setupCourses();
  setupMap();
  setupDialogs();
  setupMiscActions();
  updatePoints();
  updateProfile();
  setupReveals();
}

init();
