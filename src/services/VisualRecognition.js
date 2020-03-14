import VisualRecognitionV3 from 'ibm-watson/visual-recognition/v3';
import { IamAuthenticator } from 'ibm-watson/auth';

import dotenv from 'dotenv';

dotenv.config();

const visualRecognition = new VisualRecognitionV3({
    version: process.env.IBM_VISUAL_RECOGNITION_API_VERSION,
    authenticator: new IamAuthenticator({
        apikey: process.env.IBM_VISUAL_RECOGNITION_API_KEY,
    }),
    url: process.env.IBM_VISUAL_RECOGNITION_API_URL
});

export default visualRecognition;

