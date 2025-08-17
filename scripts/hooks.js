export function embed(component) {
    fetch(`html/${component}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(`${component}`).innerHTML = data;
        });
}