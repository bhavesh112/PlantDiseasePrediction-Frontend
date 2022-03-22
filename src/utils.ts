type Plants =
  | "Apple"
  | "Blueberry"
  | "Cherry"
  | "Corn"
  | "Grape"
  | "Orange"
  | "Peach"
  | "Pepper"
  | "Potato"
  | "Raspberry"
  | "Soybean"
  | "Squash"
  | "Strawberry"
  | "Tomato";
export interface Healthy {
  plant_name: Plants;
  isHealthy: true;
}
export interface Diseased {
  plant_name: Plants;
  disease_name: string;
  isHealthy: false;
  wiki?: string;
}
interface PlantList {
  [key: string]: Diseased | Healthy;
}

export const diseaseList: PlantList = {
  0: {
    plant_name: "Apple",
    disease_name: "Scab",
    wiki: "https://en.wikipedia.org/wiki/Apple_scab",
    isHealthy: false,
  },
  1: {
    plant_name: "Apple",
    disease_name: "Black Rot",
    wiki: "https://extension.umn.edu/plant-diseases/black-rot-apple",
    isHealthy: false,
  },
  2: {
    plant_name: "Apple",
    disease_name: "Cedar apple rust",
    wiki: "https://www.planetnatural.com/pest-problem-solver/plant-disease/cedar-apple-rust/",
    isHealthy: false,
  },
  3: {
    plant_name: "Apple",
    isHealthy: true,
  },
  4: {
    plant_name: "Blueberry",
    isHealthy: true,
  },
  5: {
    plant_name: "Cherry",
    disease_name: "Powdery mildew",
    wiki: "",
    isHealthy: false,
  },
  6: {
    plant_name: "Cherry",
    isHealthy: true,
  },
  7: {
    plant_name: "Corn",
    disease_name: "Cercospora leaf spot/ Gray leaf spot",
    wiki: "",
    isHealthy: false,
  },
  8: {
    plant_name: "Corn",
    disease_name: "Common rust",
    wiki: "",
    isHealthy: false,
  },
  9: {
    plant_name: "Corn",
    disease_name: "Northern Leaf Blight",
    wiki: "https://en.wikipedia.org/wiki/Northern_corn_leaf_blight",
    isHealthy: false,
  },
  10: {
    plant_name: "Corn",
    isHealthy: true,
  },
  11: {
    plant_name: "Grape",
    disease_name: "Black rot",
    wiki: "",
    isHealthy: false,
  },
  12: {
    plant_name: "Grape",
    disease_name: "Esca (Black Measles)",
    wiki: "",
    isHealthy: false,
  },
  13: {
    plant_name: "Grape",
    disease_name: "Leaf blight (Isariopsis Leaf Spot)",
    wiki: "",
    isHealthy: false,
  },
  14: {
    plant_name: "Grape",
    isHealthy: true,
  },
  15: {
    plant_name: "Orange",
    disease_name: "Haunglongbing (Citrus greening)",
    wiki: "",
    isHealthy: false,
  },
  16: {
    plant_name: "Peach",
    disease_name: "Bacterial Spot",
    wiki: "",
    isHealthy: false,
  },
  17: {
    plant_name: "Peach",
    isHealthy: true,
  },
  18: {
    plant_name: "Pepper",
    disease_name: "Bacterial Spot",
    wiki: "",
    isHealthy: false,
  },
  19: {
    plant_name: "Pepper",
    isHealthy: true,
  },
  20: {
    plant_name: "Potato",
    disease_name: "Early Blight",
    wiki: "https://en.wikipedia.org/wiki/Alternaria_solani",
    isHealthy: false,
  },
  21: {
    plant_name: "Potato",
    disease_name: "Late Blight",
    wiki: "https://en.wikipedia.org/wiki/Phytophthora_infestans",
    isHealthy: false,
  },
  22: {
    plant_name: "Potato",
    isHealthy: true,
  },
  23: {
    plant_name: "Raspberry",
    isHealthy: true,
  },
  24: {
    plant_name: "Soybean",
    isHealthy: true,
  },
  25: {
    plant_name: "Squash",
    disease_name: "Powdery mildew",
    wiki: "",
    isHealthy: false,
  },
  26: {
    plant_name: "Strawberry",
    disease_name: "Leaf Scorch",
    wiki: "",
    isHealthy: false,
  },
  27: {
    plant_name: "Strawberry",
    isHealthy: true,
  },
  28: {
    plant_name: "Tomato",
    disease_name: "Bacterial Spot",
    wiki: "",
    isHealthy: false,
  },
  29: {
    plant_name: "Tomato",
    disease_name: "Early Blight",
    wiki: "https://en.wikipedia.org/wiki/Alternaria_solani",
    isHealthy: false,
  },
  30: {
    plant_name: "Tomato",
    disease_name: "Late Blight",
    wiki: "https://en.wikipedia.org/wiki/Phytophthora_infestans",
    isHealthy: false,
  },
  31: {
    plant_name: "Tomato",
    disease_name: "Leaf Mold",
    wiki: "https://extension.umn.edu/disease-management/tomato-leaf-mold",
    isHealthy: false,
  },
  32: {
    plant_name: "Tomato",
    disease_name: "Septoria Leaf Spot",
    wiki: "",
    isHealthy: false,
  },
  33: {
    plant_name: "Tomato",
    disease_name: "Spider mites",
    wiki: "",
    isHealthy: false,
  },
  34: {
    plant_name: "Tomato",
    disease_name: "Target Spot",
    wiki: "",
    isHealthy: false,
  },
  35: {
    plant_name: "Tomato",
    disease_name: "Yellow Leaf Curl Virus",
    wiki: "",
    isHealthy: false,
  },
  36: {
    plant_name: "Tomato",
    disease_name: "Mosaic virus",
    wiki: "",
    isHealthy: false,
  },
  37: {
    plant_name: "Tomato",
    isHealthy: true,
  },
};
