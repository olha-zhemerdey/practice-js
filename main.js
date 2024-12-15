const name = "КОХАНИЙ";
const wishes = [
  "ТИ МОЄ ЩАСТЯ",
  "ТИ МОЯ ПІДТРИМКА",
  "ТИ МОЯ СИЛА",
  "ТИ МОЄ НАТХНЕННЯ",
  "ТИ МОЯ ГОРДІСТЬ",
  "ТИ МІЙ СПОКІЙ",
];

function createBirthdayGreeting(name, wishes) {
  const container = document.createElement("div");
  container.className = "container";

  const heading = document.createElement("h1");
  heading.className = "heading animated-heading";
  heading.textContent = `З ДНЕМ НАРОДЖЕННЯ, ${name}!`;

  const message = document.createElement("p");
  message.className = "message";
  message.textContent =
    "🎉 БАЖАЮ ТОБІ ОДНОГО ЧУДОВОГО ДНЯ ПРОКИНУТИСЯ ВДОМА І РОЗПОЧАТИ ДЕНЬ З НАШИХ З МІЄЮ ПОСМІШОК🎉";

  const list = document.createElement("ul");
  list.className = "list";

  const footer = document.createElement("p");
  footer.className = "footer";
  footer.textContent = "КОХАЮ ТЕБЕ БЕЗМЕЖНО! 🥂";

  container.appendChild(heading);
  container.appendChild(message);
  container.appendChild(list);
  container.appendChild(footer);

  wishes.forEach((wish, index) => {
    setTimeout(() => {
      const listItem = document.createElement("li");
      listItem.className = "list-item";
      listItem.textContent = wish;
      list.appendChild(listItem);
    }, index * 1000);
  });

  return container;
}

const greeting = createBirthdayGreeting(name, wishes);
document.getElementById("birthday-greeting").appendChild(greeting);
