const storeBtn = document.getElementById('store-btn');
const retBtn = document.getElementById('retrieve-btn');

let db;
const dbRequest = indexedDB.open("dummyDB", 1);

dbRequest.onsuccess = (event) => {
    db = event.target.result;
}
dbRequest.onupgradeneeded = (event) => {
    console.log("success!");
    db = event.target.result;
    const objStore = db.createObjectStore('products', { keyPath: 'id' });
    objStore.transaction.oncomplete = () => {
        const productsStore = db
            .transaction('products', 'readwrite')
            .objectStore('products');
        productsStore.add({
            id: 'p1',
            title: 'A First Product',
            price: 12.99,
            tags: ['Expensive', 'Luxury']
        });
    }
}

dbRequest.onerror = (event) => {

    console.log("Error");

}

storeBtn.addEventListener('click', () => {
    console.log("clicked");
    if (!db) {
        return;
    }
    const productsStore = db
        .transaction('products', 'readwrite')
        .objectStore('products');
    productsStore.add({
        id: 'p2',
        title: 'A Second Product',
        price: 122.99,
        tags: ['Expensive', 'Luxury']
    });


});

retBtn.addEventListener('click', () => {

    const productsStore = db
        .transaction('products', 'readwrite')
        .objectStore('products');
    const request = productsStore.get('p2');

    request.onsuccess = function () {
        console.log(request.result);
    }

    })