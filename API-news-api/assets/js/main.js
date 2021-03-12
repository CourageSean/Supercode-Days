//CORS erlauben als Chrome Web Extension!

const keyword = document.getElementById("keyword");
let myKey;
let apiKey = config.SECRET_API_KEY;

function getKey() {
  document.getElementById("content").innerHTML = ""; // durch diese Zeile, lädt sich immer nur ein Key beim neu laden der Seite; sonst addiert sich der Inhalt des neuen Keys zum alten Key Inhalt
  myKey = keyword.value; // hiermit bekommt man der User-input-Wert
  console.log("This is the key: " + myKey);
  console.log(apiKey);

  fetch(
    `http://newsapi.org/v2/everything?q=${myKey}&language=de&pageSize=40&apiKey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.articles); // hier ist die data-array mit den ganzen article-objects vom API
      let test = "unknown";
      for (let elt of data.articles) {
        // console.log(elt);
        document.getElementById("content").innerHTML += `
                        <article>
                        <img src="${elt.urlToImage}" alt="">
                        <h1>${elt.title}</h1>
                        <p>${elt.description}</p>
                        <p>${elt.author == null ? test : elt.author}</p>
                        <p>${elt.publishedAt}</p>
                        <a href=${elt.url == null ? test : elt.url}></a>
                        </article>
                            `;
      }
    });
}
