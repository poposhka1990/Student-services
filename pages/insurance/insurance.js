const form = document.querySelector('.form');

    form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formFields = event.target.elements

    const nameInputValue = formFields.name.value

    fetch("https://student-services-47400.web.app/send", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nameInputValue }),
    }).then((res) => {
      alert(res)
    });
})