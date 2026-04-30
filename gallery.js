import icons from "./index.js";

const search = document.getElementById("search");
const grid = document.getElementById("grid");
const count = document.getElementById("count");

const iconEntries = Object.entries(icons);

const params = new URLSearchParams(location.search);
const initialQuery = params.get("q") ?? "";
search.value = initialQuery;

render(initialQuery);

search.addEventListener("input", e => {
    const q = e.target.value.toLowerCase();
    updateURL(q);
    render(q);
});

function updateURL(q) {
    const url = new URL(location.href);
    q ? url.searchParams.set("q", q) : url.searchParams.delete("q");
    history.replaceState({}, "", url);
}

function render(query) {
    const filtered = iconEntries.filter(([name]) =>
        name.includes(query)
    );

    count.textContent = `${filtered.length} icons`;

    grid.innerHTML = filtered
        .map(
            ([name, url]) => `
        <button class="icon" data-name="${name}">
          <img src="${url}" height="100" alt="${name}" />
          <span>${name}</span>
        </button>
      `
        )
        .join("");

    document.querySelectorAll(".icon").forEach(el => {
        el.onclick = () =>
            navigator.clipboard.writeText(
                el.dataset.name
            );
    });
}
