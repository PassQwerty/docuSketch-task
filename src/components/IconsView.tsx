import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIcon } from "../hooks/useIcon";

const tailwindStyles = {
  base: {
    div: "flex flex-col gap-5",
  },
  button:
    "px-4 py-4 text-lg rounded-lg bg-green-500 hover:bg-green-600 font-semibold text-white active:scale-95 duration-150",
  icon: "text-sky-500 duration-150 hover:scale-110 h-24",
};

const IconsView = () => {
  const [icon, getIcon] = useIcon();
  return (
    <>
      <div className={tailwindStyles.base.div}>
        <FontAwesomeIcon icon={icon} className={tailwindStyles.icon} />
        <button className={tailwindStyles.button} onClick={getIcon}>
          Get random icon
        </button>
      </div>
    </>
  );
};
export default IconsView;
