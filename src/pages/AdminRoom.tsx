import { Button } from '../components/Button';
import {RoomCode} from '../components/RoomCode'
import { useHistory, useParams } from 'react-router-dom' 
import { database } from '../services/firebase';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';

import '../styles/room.scss'
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg'
import answerImg from '../assets/images/answer.svg'
import checkImg from '../assets/images/check.svg'



type RoomParams = {
    id: string;
}

export function AdminRoom() {
    // const {user} = useAuth() 
    const history = useHistory()
    const params = useParams<RoomParams>();
    
    const roomId = params.id
    const { questions, title } = useRoom(roomId)

    async function handleDeleteQuestion(questionId: string) {
        if(window.confirm(`Are you sure you want to delete this question?`)) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    }

    async function handleCheckQuestionAsHighlighted(questionId: string, isHighlighted?: boolean) {
        if(isHighlighted) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
                isHighlighted: false
            }) 
        } else {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
                isHighlighted: true
            }) 
        }
    }

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true
        })
    }

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        })

        history.push('/')
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId}/>
                        <Button isOutlined onClick={handleEndRoom}> Encerrar sala </Button>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} {questions.length > 1 ? 'perguntas' : 'pergunta'}</span> }
                    
                </div>

                <div className="question-list">
                    { questions && questions.map( question => {
                        return (
                            <Question 
                                key={question.id} 
                                content={question.content} 
                                author={question.author} 
                                isAnswered={question.isAnswered} 
                                isHighlighted={question.isHighlighted} 
                            >
                             
                                 
                                { !question.isAnswered && (
                                    <>  
                                        <button type="button" onClick={()=>handleCheckQuestionAsHighlighted(question.id, question.isHighlighted)} >
                                            <img src={checkImg} alt="Marcar como destaque" />
                                        </button>

                                        <button type="button" onClick={()=>handleCheckQuestionAsAnswered(question.id)} >
                                            <img src={answerImg} alt="Marcar como respondida" />
                                        </button>
                                    </>
                                )
                                }
                                <button type="button" onClick={()=>handleDeleteQuestion(question.id)} >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Question>
                        )
                    })}
                </div>
            </main>
        

        </div>
    )
}