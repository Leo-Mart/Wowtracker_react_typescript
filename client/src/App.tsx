import Layout from "./components/layout/Layout";
import CharacterContextProvider from "./context/CharacterContext";
import Router from "./routes/routes";

function App() {
  return (
    <>
      <CharacterContextProvider>
        <Layout>
          <Router />
        </Layout>
      </CharacterContextProvider>
    </>
  );
}

export default App;
