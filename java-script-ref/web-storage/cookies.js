const storeBtn = document.getElementById('store-btn');
const retBtn = document.getElementById('retrieve-btn');




storeBtn.addEventListener('click', () => {
    const userId = "123";
    const user = {
        name: "bob",
        age: 31,
        hobbies: [
            "reading",
            "movies"
        ]
    }
    document.cookie = `uid=${userId}; max-age=5`;
    document.cookie = `user=${JSON.stringify(user)}`;

});

retBtn.addEventListener('click', () => {
    console.log(document.cookie);
})