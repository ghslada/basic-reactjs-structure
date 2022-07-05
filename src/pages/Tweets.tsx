import { useEffect, useState } from 'react';
import '../App.css';
import { Navbar } from '../components/Navbar';
import {Body} from '../components/Body';
import { Tweet, TweetProps } from '../components/Tweet';

export function Tweets () {

  const [tweets, setTweets] = useState<TweetProps[]>([]);
  const [count, setCount] = useState(tweets.length);

  useEffect( () => {
    
    const firstTweetNumber = tweets.length+1;
    setCount(firstTweetNumber);
    console.log('Count changed to: '+count);

  }, []);

  useEffect( () => {

    console.log('Tweets list lenght changed to: '+tweets.length);

  }, [tweets]);

  const updateCount = () => {
    const newTweetNumber = tweets.length+1;
    setCount(newTweetNumber);
  }

  function createNewTweet() {
    updateCount();
    setTweets([...tweets, { text : `Tweet ${tweets.length+1}`, description: `Lorem ipsum Lorem ipsumLorem ipsum` }]);
    console.log('Tweet criado');

  }

    return (
        <>
            <div className="App p-1">
                
                <Navbar title={'Tweets'}/>
                <Body>
                    <div style={{borderWidth: '2px'}} className='mb-3 rounded-3xl border-gray-800 flex-shrink p-6 w-2/4'>
                        {tweets?.map( tweet => {
                            return (
                                <>
                                <Tweet key={tweet.text} text={tweet.text} description={tweet.description} />

                                {/* <tr key={tweet.text} className="odd:bg-white even:bg-slate-50">
                                    <td className='p-3 border-opacity-75 border-zinc-400 bg-dark-300 text-white'>{tweet.text}</td>
                                    <td className='p-3 border'>{tweet.description}</td>
                                </tr> */}

                                </>
                            );
                        })}
                    </div>
                    <button onClick={createNewTweet} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>New tweet</button>
                </Body>
            </div>
        </>

    );
}