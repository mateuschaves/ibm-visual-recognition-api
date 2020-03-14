import fs from 'fs';

import visualRecognition from '../services/VisualRecognition';
import zip from 'node-zip';
// var zip = new require('node-zip')();

export default {
    async store(request, response) {

        console.log(request.files[0]);
        const files = request.files || [];

        const filesToZip = new zip();

        Promise.all(files.map(file =>
            new Promise(resolve => resolve(filesToZip.file(file.filename, fs.readFileSync(file.path))))
        ))
            .then(data => {
                const zipFile = filesToZip.generate({ base64: false, compression: 'DEFLATE' });

                const zipFileName = `zip_file_${Date.now()}`;
                fs.writeFileSync(`./files/${zipFileName}.zip`, zipFile, 'binary');

                const classifyParams = {
                    imagesFile: fs.createReadStream(`files\\${zipFileName}.zip`),
                    owners: ['IBM'],
                    threshold: 0.6,
                };

                visualRecognition.classify(classifyParams)
                    .then(image => {
                        const classifiedImages = image.result;
                        return response.json(classifiedImages);
                    })
                    .catch(err => {
                        console.log('error:', err);
                    });
            })
            .catch(error => console.log(error));



    }
}