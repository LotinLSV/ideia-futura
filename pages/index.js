function Home() {
 // index.js
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    fetch("index.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Não foi possível carregar a página HTML.");
            }
            return response.text();
        })
        .then(htmlContent => {
            container.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error(error);
        });
});

}

export default Home