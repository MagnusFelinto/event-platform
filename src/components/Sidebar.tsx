import { Lesson } from "./Lesson";

export function Sidebar() {
    return (
        <aside className="asideSidebar">
            <span className="spanSidebar">
                Cronogramas de aulas
            </span>
            <div className="divLesson">
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
            </div>
        </aside>
    )

}