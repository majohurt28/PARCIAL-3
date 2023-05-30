import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { recipe } from "../types/recipe";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addProduct = async (product: Omit<recipe, "id">) => {
    try {
      const where = collection(db, "Recetas");
      await addDoc(where, product);
      console.log("Se ha publicado");
    } catch (error) {
      console.error(error);
    }
  };

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Recetas"));
    const transformed: Array<recipe> = [];

    querySnapshot.forEach((doc: any) => {
      const data: Omit<recipe, "id"> = doc.data() as any;
      transformed.push({ id: doc.id, ...data });
    });

    return transformed;
  };

  export default {
    addProduct,
    getProducts,
  };