import { useEffect } from 'react'
import { useState } from 'react'
import {getPosts, getRandomUser} from './API'
import './App.css'
import Card from './components/Card'
import img from '../src/assets/Loading.gif'
import UserCard from './components/UserCard'

function App() {

  const [data, setData] = useState(null)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    getPosts().then((posts) => setData(posts))
  }, [])

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]))
  }, [])

  const refreshUser = () => {
    getRandomUser().then((user) => setUserData(user.results[0]))
  }

  return (
    <div className='App'>
      <div className="user-card">
        {userData && <UserCard data = {userData} />}
        <button onClick={refreshUser}>Refresh User</button>
      </div>
      {
        data ? data.map((post) => <Card key={post.id} title={post.title} body={post.body} />) : <img style={{ width: '50px' }} src={img} alt="Loading" />
      }
    </div>
  )
}

export default App
