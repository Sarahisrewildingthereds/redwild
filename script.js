const redwildData = [
  { name: "Red Squirrel", type: "species", description: "A native UK species threatened by habitat loss and grey squirrel competition." },
  { name: "Pine Marten", type: "species", description: "A woodland predator whose recovery helps control grey squirrel populations." },
  { name: "Scots Pine", type: "tree", description: "A keystone species in Caledonian pine forests and vital for biodiversity." },
  { name: "Hazel", type: "tree", description: "A woodland tree supporting dormice, insects, and traditional coppicing habitats." },
  { name: "Oak", type: "tree", description: "One of the UK's most biodiverse trees, supporting hundreds of species." },
  { name: "Mycorrhizal Fungi", type: "fungi", description: "Underground networks that support tree health and nutrient exchange." },
  { name: "Ancient Woodland", type: "habitat", description: "Irreplaceable ecosystems that have existed continuously since at least 1600." },
  { name: "Biodiversity", type: "concept", description: "The variety of life in an ecosystem, essential for resilience and stability." },
  { name: "Rewilding", type: "concept", description: "Restoring natural processes and allowing ecosystems to recover and self-regulate." },
  { name: "Habitat Restoration", type: "concept", description: "Actions that repair damaged ecosystems and improve ecological function." }
];

function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  const results = redwildData.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach(item => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerHTML = `<strong>${item.name}</strong> <br>
                     <em>${item.type}</em> <br>
                     ${item.description}`;
    resultsContainer.appendChild(div);
  });
}
