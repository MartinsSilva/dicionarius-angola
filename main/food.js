let row = document.querySelector("#content");

window.addEventListener("load", e => {
	loadDialetus();
});

const loadDialetus = async () => {
	const res = await fetch("./database/food.json");
	const data = await res.json();

	row.innerHTML = data.map(renderHTML).join("");
}

const renderHTML = word => {
	return `
		<div class="col-lg-4 col-md-6">
        	<div class="single-feature">
        		<div class="feature-details">
        			<h5>${word.dialect}<br><br>
                   		Significado</h5>
                  	<p>${word.meanings}</p>
                </div>
           	</div>
       	</div>
	`;
}
