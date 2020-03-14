import fs from 'fs';

export default {
    async store(request, response) {
        const images = request.files;
        console.log(images[0]);
    }
}