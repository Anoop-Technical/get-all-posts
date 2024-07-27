import { useEffect } from 'react'
import { useState } from 'react'
import getPosts from './API'
import './App.css'
import Card from './components/Card'
import img from '../src/assets/Loading.gif'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    getPosts().then((posts) => setData(posts))
  }, [])

  return (
    <div className='App'>
      <h2> -: Get All Posts :-</h2>
      {
        data ? data.map((post) => <Card key={post.id} title={post.title} body={post.body} />) : <img style={{ width: '50px' }} src={img} alt="Loading" />
      }
    </div>
  )
}

export default App
