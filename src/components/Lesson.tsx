import { CheckCircle } from 'phosphor-react'
import { Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'K'h'mm ", {
        locale: ptBR,
    })
    return (
        <a href="#">
            <span className="LessonData">
                {availableDateFormatted}
            </span>
            <div className="LessonInfo">
                <header className="LessonInfoHeader">
                    {isLessonAvailable ? (
                        <span className="LessonInfoHeaderSpan1">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>) : (
                        <span className="LessonInfoHeaderSpan1block">
                            <Lock size={20} />
                            Em breve
                        </span>)}


                    <span className="LessonInfoHeaderSpan2">
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                    </span>
                </header>
                <strong className="LessonStrong">
                    {props.title}
                </strong>
            </div>
        </a>
    )

}