const pagination = document.querySelector(".pagination__box");
const paginationBtns = pagination.querySelectorAll("button");
let totalPages = 4;
let page = 1;
let dotsAfer = 3;

paginationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    updatePage(totalPages, page);
  });
});

function updatePage(totalPages, page) {
  let btns = ``;
  let beforePages = page - 1;
  let afterPages = page + 1;

  if (page >= 1) {
    btns += `<button class='${
      page === 1 ? "pagination__btn disabled" : "pagination__btn"
    }' ${page === 1 && "disabled"} onclick="prevPage()">prev</button>`;
  }

  for (let i = beforePages; i <= afterPages; i++) {
    if (i === 0) continue;
    if (i === totalPages + 1) continue;
    btns += `<button class='${
      i === page ? "num active" : "num"
    }' onclick="selectPageNumber(event)">${i}</button>`;
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      btns += `<button class='dots'>...</button>`;
    }
    btns += `<button class='num' onclick="selectPageNumber(event)">${totalPages}</button>`;
  }

  if (page <= totalPages) {
    btns += `
   <button class='${
     page === totalPages ? "pagination__btn disabled" : "pagination__btn"
   }' ${page === totalPages && "disabled"} onclick="nextPage()">next</button> `;
  }

  pagination.innerHTML = btns;
}

function selectPageNumber(e) {
  page = e.target.textContent * 1;
  updatePage(totalPages, page);
}

function nextPage() {
  page = page + 1;
  updatePage(totalPages, page);
}

function prevPage() {
  page = page - 1;
  updatePage(totalPages, page);
}

updatePage(totalPages, page);
