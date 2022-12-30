import categories from "./categories.json";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <>
      <Categories categories={categories} />
    </>
  );
}

export default App;
