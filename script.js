const loadSports = () => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_sports.php';
    fetch(url)
        .then(res => res.json())
        .then(data => displaySports(data))
}
loadSports();

const displaySports = sports => {
    for (const sport of sports.sports) {
        console.log(sport);
    }
}

const searchSports = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    console.log(searchText);
}
document.getElementById('search-btn').addEventListener('click', function () {
    searchSports();
})