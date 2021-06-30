import Button from "./Button";
import Text from "./Text";
import ColorProvider from "./ColorProvider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ColorProvider>
        <Text />
        <Button />
      </ColorProvider>
    </div>
  );
}
