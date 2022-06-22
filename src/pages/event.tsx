import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"
import { Header } from "./../components/Header"
export function Event() {
    return (
        <div className="divPrincipal">
            <Header />
            <div className="mainEvent">
                <Video />
                <Sidebar />
            </div>

        </div>
    )
}