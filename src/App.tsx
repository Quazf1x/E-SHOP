import Header from "./assets/components/Header/header";
import useFetch from "./assets/components/API/useFetch";
import HomePage from "./assets/components/HomePage/HomePage";

function App() {
  const data = useFetch();
  console.log(data);

  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
    </>
  );
}

export default App;
