self.addEventListener("push", (event) => {
  const data = event.data.json();

  self.registration.showNotification(data.title, {
    body: "Yay. It dey work!!",
    click_action: "http://localhost:64543",
    icon: "https://i.imgur.com/5zO5cce.png"
  });
});
