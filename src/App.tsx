import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Sidebar } from "./components/sidebar"
import { Video } from "./components/Video"
function App() {
  return (
    <div className="cla">
      <Header />
      <Sidebar />
      <Video />
      <Lesson />
    </div>
  )
}

export default App
