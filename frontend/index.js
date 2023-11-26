const drawFortune = async () => {
    const quote = document.getElementById('quote');
    const res = await fetch('https://496mj4dpbi.execute-api.ap-south-1.amazonaws.com/dev');
    const json = await res.json();
    quote.innerHTML = json.body.fortune;
}
