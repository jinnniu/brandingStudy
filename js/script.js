const detailsActivity = document.querySelectorAll(".container .activity");
const detailBook = document.querySelectorAll(".container .activity .book");

// activity details
detailsActivity.forEach((activity) => {
  activity.addEventListener("toggle", () => {
    if (activity.open) {
      setTargetDetail(activity);
      activity.style.width = "80%";
    }
  });
});

function setTargetDetail(targetDetail) {
  detailsActivity.forEach((activity) => {
    if (activity !== targetDetail) {
      activity.open = false;
      activity.style.width = "10%";
    }
  });
}

// book details
detailBook.forEach((book) => {
  book.addEventListener("toggle", () => {
    if (book.open) setTargetBook(book);
  });
});

function setTargetBook(targetBook) {
  detailBook.forEach((book) => {
    if (book !== targetBook) {
      book.open = false;
    }
  });
}
