import { useState } from 'react';
import { addImageToStorage } from '../api';

/** return : selected File Data  */
export const useFileSelect = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | undefined>();

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedImage = files[0];
      setSelectedFile(selectedImage);

      const downloadUrl = await addImageToStorage(selectedImage);
      setFileUrl(downloadUrl);
    }
  };

  return { fileUrl, selectedFile, handleFileSelect };
};
