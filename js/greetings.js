let row = document.querySelector(".row");
let search = document.querySelector(".pes");

window.addEventListener("load", e => {
	loadDialetus();
});

const loadDialetus = async () => {
	const res = await fetch("./database/greetings.json");
	const data = await res.json();

	row.innerHTML = data.map(renderHTML).join("");

	search.onkeyup = () => {
		const nomeseach = search.value
		if (nomeseach == ""
			|| nomeseach == " "
			|| nomeseach == null) {
			return row.innerHTML = data.map(renderHTML).join("");

		}
		return row.innerHTML = data
			.filter(data => data.dialect.toLowerCase().includes(nomeseach.toLowerCase().trim()))
			.map(renderHTML)

	}
}

const renderHTML = word => {
	return ` 
		<div class="col-md-3" id="colun">
			<h3 class="text-center">${word.dialect}</h3>
            <span>Significado</span>
            <p>${word.meanings}</p>
            <span>Exemplos:</span>
            <p>${word.examples}</p>
        </div>
	`;
}
