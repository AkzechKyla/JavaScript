import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

export default class Storage {
    static async uploadFile(file, path) {
        const storageRef = ref(storage, path);
        await uploadBytes(storageRef, file);
        console.log("File uploaded to", path);
    }
}
