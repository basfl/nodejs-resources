const storeBtn = document.getElementById('store-btn');
const retBtn = document.getElementById('retrieve-btn');

const userId = '123';
const user = {
    name: "bob",
    age: 31,
    hobbies: [
        "reading",
        "movies"
    ]
}

storeBtn.addEventListener('click', () => {
    localStorage.setItem('uid', JSON.stringify(user));
});

retBtn.addEventListener('click', () => {
    storedData = localStorage.getItem('uid');
    if (storedData) {
        console.log(JSON.parse(storedData));
    }
})