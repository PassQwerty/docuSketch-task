import "./App.css";
import IconsView from "./components/IconsView";

const tailwindStyles = {
  base: {
    div: "flex justify-center items-center h-screen",
  },
};

function App() {
  return (
    <div className={tailwindStyles.base.div}>
      <IconsView />
    </div>
  );
}

export default App;
