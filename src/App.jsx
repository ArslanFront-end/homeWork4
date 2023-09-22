import { useState } from 'react'
import video from "./video/fon2.mp4"
import './App.css'


export default function App () {
    const [ username, setUsername ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ email, setEmail ] = useState('')

    const [ username2, setUsername2 ] = useState('')
    const [ number2, setNumber2 ] = useState('')
    const [ email2, setEmail2 ] = useState('')



    const handleData = event => {
        event.preventDefault()

        setUsername2(username)
        setNumber2(number)
        setEmail2(email)
    }

    return (
        <div className="main">
            <video className="ars" src={video} autoPlay loop controls></video>
            <div className="wrapper">
                <div className="left">
                    <form className="form" onSubmit={handleData}>
                        <span className="sigin-in">Sigin in</span>
                        <input
                            className="inp-2"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            type="text"
                            placeholder={'Ф.И.О'}
                            required
                        />
                        <input
                            className="inp-2"
                            value={number}
                            onChange={event => setNumber(event.target.value)}
                            type="text"
                            placeholder={'Номер телефона'}
                            required
                        />
                        <input
                            className="inp-2"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type="text"
                            placeholder={'gmail'}
                            required
                        />
                        <button className="btn">Submit</button>
                    </form>
                </div>
                <div className={'DataForm'}>
                    <span className="date-from">Ф.И.О: {username2}</span>
                    <span className="date-from">Телефон: {number2}</span>
                    <span className="date-from">Gmail: {email2}</span>
                </div>
            </div>
        </div>
    )
}

