import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { useState } from "react";

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

const usePhotoGallery = () => {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
    const fileName = new Date().getTime() + ".jpeg";
    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.webPath,
      },
      ...photos,
    ];
    setPhotos(newPhotos);
  };

  return {
    photos,
    takePhoto,
  };
};

export default usePhotoGallery;
