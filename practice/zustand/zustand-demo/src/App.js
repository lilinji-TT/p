import "./App.css";
import { create } from "./my-zustand";

const useDemoStore = create((set) => {
  return {
    name: "123",
    age: "",
    updateName: (value) => set(() => ({ name: value })),
    updateAge: (value) => set(() => ({ age: value })),
  };
});
function App() {
  const name = useDemoStore((state) => state.name);
  const updateName = useDemoStore((state) => state.updateName);
  return (
    <div className="App">
      <input value={name} onChange={(e) => updateName(e.currentTarget.value)} />
      <h1>hello: {name}</h1>
    </div>
  );
}

export default App;
