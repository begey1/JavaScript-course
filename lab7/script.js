function loadCatalog() {
    fetch("data/categories.json")
        .then(res => res.json())
        .then(data => {
            let html = "<h2>Tech Store Catalog</h2>";

            data.forEach(cat => {
                html += `<p>
                    <a href="#" onclick="loadItems('${cat.shortname}')">
                        ${cat.name}
                    </a>
                </p>`;
            });

            html += `<p>
                <a href="#" onclick="loadSpecials()">Specials</a>
            </p>`;

            document.getElementById("main-content").innerHTML = html;
        });
}

function loadItems(category) {
    fetch(`data/${category}.json`)
        .then(res => res.json())
        .then(data => {
            let html = `<h2>${data.category}</h2>`;

            data.items.forEach(item => {
                html += `
                    <div style="margin-bottom:20px;">
                        <img src="https://placehold.co/200x200?text=${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <b>${item.price}</b>
                    </div>
                `;
            });

            document.getElementById("main-content").innerHTML = html;
        });
}

function loadSpecials() {
    fetch("data/categories.json")
        .then(res => res.json())
        .then(data => {
            let random = Math.floor(Math.random() * data.length);
            loadItems(data[random].shortname);
        });
}
