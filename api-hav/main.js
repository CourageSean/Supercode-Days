document.getElementById('getTxt').addEventListener('click', showTxt);
document.getElementById('container').innerHTML = "";


function showTxt() {
    let choose = document.getElementById('resources').value
    console.log(choose);


    fetch(`https://api.harvardartmuseums.org/${choose}?apikey=e4eab6a6-2003-4999-8190-d30fbcbbd947`)
        .then(response => response.json())
        .then((data) => {
            console.log(data.records)
            // document.getElementById('container').innerHTML += `
            // <img src=" ${data.records[0].baseimageurl}">
            // <h6> ${data.records[0].copyright}</h6>
            // `
            for (let elt of data.records) {
                if (choose == 'Object') {
                    document.getElementById('container').innerHTML += `
                    <article>
                        <h1>${elt.provenance}</h1>
                    </article>
                `
                }
                if (choose == ' Group ') {
                    console.log(data.records);
                    document.getElementById('container').innerHTML += `
                    <article>
                        <p>${elt.name}</p>
                    </article>
                `
                }
            }
        })
}


