import AssistantV2 from 'ibm-watson/visual-recognition/v2';
import { IamAuthenticator } from 'ibm-watson/auth';

const assistant = new AssistantV2({
    version: process.env.IBM_VISUAL_RECOGNITION_API_VERSION,
    authenticator: new IamAuthenticator({
        apikey: process.env.IBM_VISUAL_RECOGNITION_API_KEY,
    }),
    url: process.env.IBM_VISUAL_RECOGNITION_API_URL
});

export default assistant;

