import { CheckCircle } from 'phosphor-react'

export function Lesson() {
    return (
        <a href="#">
            <span className="LessonData">
                Terça • 22 de junho • 19h00
            </span>
            <div className="LessonInfo">
                <header className="LessonInfoHeader">
                    <span className="LessonInfoHeaderSpan1">
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span>
                    <span className="LessonInfoHeaderSpan2">
                        AO VIVO
                    </span>
                </header>
                <strong className="LessonStrong">
                    Abertura do evento Ignite labs
                </strong>
            </div>
        </a>
    )

}