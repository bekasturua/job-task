function dropdown(event) {
  const id = event.target.id
    .replaceAll("question_", "")
    .replaceAll("img_", "")
    .replaceAll("question-text_", "")
    .replaceAll("faq-quest_", "");
  let answer = document.getElementById(`answer_${id}`);
  if (answer.classList.contains("visible")) {
    answer.classList.remove("visible");
    document.getElementById(`img_${id}`).classList.remove("rotate");
  } else {
    document.getElementById(`img_${id}`).classList.add("rotate");
    answer.classList.add("visible");
  }
}
