import { THREE } from "https://code4fukui.github.io/egxr.js/egxr.js";

export const loadTexture = async (img) => {
  return new Promise(resolve => {
    const loader = new THREE.TextureLoader();
    loader.load(img, tex => resolve(tex));
  });
};
