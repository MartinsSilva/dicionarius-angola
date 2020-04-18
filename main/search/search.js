const inputSearch = document.querySelector("#input-search");
const renderSearch = document.querySelector(".main_title");

inputSearch.addEventListener("input", e => {
	e.preventDefault();
	searchJSON(inputSearch.value);
});

async function searchJSON(term) {
	const res = await fetch("./database/general.json");
	const data = await res.json();

	const filter = data.filter(name => {
		const filterRegex = new RegExp(`^${term}`);
		return name.dialect.match(filterRegex);
	});

	render(filter);
}

const render = matches => {
	if(matches.length > 0) {
		const html = matches.map(match => `
				<span class="font-weight-bold">${match.dialect}</span><br>
				<span class="text-monospace">${match.meanings}.</span><br>
			`).join(" ");
		renderSearch.innerHTML = html;
	} else {
		renderSearch.innerHTML = `Não encontramos essa palavra 😢.`;
	}
}