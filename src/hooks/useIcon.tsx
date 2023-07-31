import { useState } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export const useIcon = (): [IconDefinition, () => void] => {
  const [icon, setIcon] = useState<IconDefinition>(fas.faFaceSmile);
  const iconsArray = Object.values(fas);

  const getIcon = () => {
    setTimeout(() => {
      setIcon(iconsArray[Math.floor(Math.random() * iconsArray.length)]);
    }, 3000);
  };

  return [icon, getIcon];
};
