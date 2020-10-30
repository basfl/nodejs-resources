import { Modal } from './UI/Modal';
class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');
        locateUserBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }
    locateUserHandler() {
        if (!navigator.geolocation) {
            alert("Location features are not available , pleaseue different browser!");
            return;
        }
        const modal = new Modal('loading-modal-content', 'Loading location please waite!!');
        modal.show();
        setTimeout(()=>{

            navigator.geolocation.getCurrentPosition(successResult => {
                modal.hide();
                const coordinates = {
                    lat: successResult.coords.latitude,
                    lng: successResult.coords.longitude
                }
                console.log(coordinates);
    
            }, error => {
                modal.hide();
                alert("could not find current location ! lease add it manually");
            })

        },2000);

       
    }
    findAddressHandler() { }
}

const placeFinder = new PlaceFinder();