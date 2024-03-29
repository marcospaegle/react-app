import "./App.css";

import Form from "./components/Form.tsx";
import Table from "./components/Table.tsx";
import Provider from "./contexts/ContactContext.tsx";

function App() {
  return (
    <Provider>
      <div>
        <Form />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
