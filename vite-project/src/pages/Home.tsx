import { useState } from "react"
import { Tweet } from "../components/Tweet"
import { Link } from "react-router-dom"

export function Home() {
    const [tweets, setTweets] = useState<string[]>([
        'Primeiro tweet',
        'Segundo tweet',
        'Terceiro tweet'
      ])
    
      function createTweet() {
        setTweets([...tweets, 'mais um tweet'])
      }
    
      return (
        <>
          <h1>Now understanding Components, Properties, State, stylization and routing</h1>
          {
            tweets.map(tweet => {
              return <Tweet text={tweet}/>
            })
          }
    
          <button 
            onClick={createTweet}
            style={{
              background: '#00baff',
              border: 0,
              padding: '6px 12px',
              color: 'white',
              borderRadius: '12px',
              margin: '5px'
            }}
          >Adicionar tweet</button>

          <div>
          <Link to='/cart'>
          <button 
            onClick={createTweet}
            style={{
              background: '#00baff',
              border: 0,
              padding: '6px 12px',
              color: 'white',
              borderRadius: '12px',
              margin: '5px'
            }}
          >
          Use link to go to other page
          </button>
          </Link>
          <Link to='/catalog'>
          <button 
            onClick={createTweet}
            style={{
              background: '#00baff',
              border: 0,
              padding: '6px 12px',
              color: 'white',
              borderRadius: '12px',
              margin: '5px'
            }}
          >
            Go to other page
          </button>
          </Link>
          </div>
        </>
     )
}