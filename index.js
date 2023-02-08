const questions = document.querySelectorAll(".question")
questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("open")) {
      question.classList.remove("open")
    } else {
      const questionsIsOpen = document.querySelectorAll(".question.open")
      questionsIsOpen.forEach((quest) => {
        quest.classList.remove("open")
      })
      question.classList.add("open")
    }
  })
})