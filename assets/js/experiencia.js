// Script de la página "Experiencia laboral": búsqueda, ordenación y cronología.
(function () {
  const timeline = document.getElementById("expTimeline");
  if (!timeline) return;

  const searchInput = document.getElementById("expSearch");
  const sortSelect = document.getElementById("expSort");
  const emptyMsg = document.getElementById("expEmpty");
  const entries = Array.from(timeline.querySelectorAll(".exp-entry"));

  const DIACRITICS = /[̀-ͯ]/g;

  function normalize(value) {
    return (value || "").toLowerCase().normalize("NFD").replace(DIACRITICS, "");
  }

  function sortKey(entry) {
    // data-start en formato AAAA o AAAA-MM; vacío = sin fecha, va al final.
    return entry.dataset.start || "";
  }

  function applySort() {
    const oldestFirst = sortSelect && sortSelect.value === "oldest";
    const ordered = entries.slice().sort((a, b) => {
      const ka = sortKey(a);
      const kb = sortKey(b);
      if (ka === kb) return 0;
      if (!ka) return 1;
      if (!kb) return -1;
      const cmp = ka < kb ? -1 : 1;
      return oldestFirst ? cmp : -cmp;
    });
    ordered.forEach((entry) => timeline.appendChild(entry));
  }

  function applyFilter() {
    const query = normalize(searchInput && searchInput.value.trim());
    let visible = 0;

    entries.forEach((entry) => {
      const haystack = normalize(
        entry.textContent + " " + (entry.dataset.keywords || "")
      );
      const match = !query || haystack.includes(query);
      entry.hidden = !match;
      if (match) visible += 1;
    });

    if (emptyMsg) emptyMsg.hidden = visible !== 0;
  }

  if (searchInput) searchInput.addEventListener("input", applyFilter);
  if (sortSelect) sortSelect.addEventListener("change", applySort);

  applySort();
  applyFilter();
})();
