import AddToDo from "./components/AddToDo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import "./App.css"

function App() {
  return (
    <main>
      <h1 style={{ marginBottom: "30px" }}>TODO React + TYPESCRIPT</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  )
}

export default App