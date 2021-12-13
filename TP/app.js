/*API Chat*/
function afficheChats() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#cat").src = data[0].url;
    });
}

/*API nasa*/
function nasa() {
  /*requête pour obtenir l'url de l'image du jour du 17 mars 2019*/
  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-03-17")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#nasa").src = data.url;
    });

  /*préparation de la requête pour l'explication (explanation) de l'image */

  /*fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-03-17")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#infoNasa").innerHTML = data.[];
    });*/
}

/* API moyenne d'âge des "prénom" */
function nameR(x) {
  fetch("https://api.agify.io/?name=" + x)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.age);
      document.querySelector("#age").innerHTML =
        x + " tu as " + data.age + "ans !";
    });
}

function activity() {
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#bored").innerHTML = data.activity;
    });
}

async function translate(x) {
  const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: x,
      source: "en",
      target: "fr",
      format: "text",
    }),
    headers: { "Content-Type": "application/json" },
  });
  let reponse = await res.json();
  console.log(reponse.translatedText);
  document.getElementById("traduit").innerHTML = reponse.translatedText;
}
