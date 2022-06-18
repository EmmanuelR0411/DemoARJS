window.addEventListener('load', () => {
    // const status = document.querySelector('#status');

    if(navigator.geolocation) {
        console.log('Locating…')
        navigator.geolocation.getCurrentPosition(success);
    } else {
        console.log('Geolocation is not supported by your browser');
    }

    

    function success(position){

        const scene = document.getElementById('scene');

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const entity = document.createElement('a-entity');
        entity.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
        entity.setAttribute('rotation', '0 0 0');
        entity.setAttribute('scale', '0.15 0.15 0.15');
        // entity.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        entity.setAttribute('position', { x: 100, y: 0, z: 50 })
        
        // entity.setAttribute('animation-mixer', '');

        console.log('AAAAAAAAAAAAAAAAAAA: ', latitude,'BBBBBBBBBBBBBBBBBBB: ', longitude)

        scene.appendChild(entity)
    }
})