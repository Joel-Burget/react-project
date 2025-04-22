import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const items = ["New York", "Los Angles", "San Francisco"];

  return (
    <div>
      <ListGroup
        items={items}
        heading={""}
        onSelectItem={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          You've been alerted
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
