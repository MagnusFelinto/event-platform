import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";
const GET_LESSONS_QUERY = gql`
        query {
            lessons(orderBy: availableAt_ASC, stage:PUBLISHED){
                id
                lessonsType
                availableAt
                title
                slug
            }
        }`

interface getLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'

    }[]
}

export function Sidebar() {
    const { data } = useQuery<getLessonsQueryResponse>(GET_LESSONS_QUERY)
    return (
        <aside className="asideSidebar">
            <span className="spanSidebar">
                Cronogramas de aulas
            </span>
            <div className="divLesson">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType} />
                    )
                }
                )}

            </div>
        </aside>
    )

}