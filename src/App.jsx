import { Sidebar } from "./components/Sidebar";
import { Tweet } from "./components/Tweet";
import { TwitterForm } from "./components/TwitterForm";
import { v4 } from "uuid";
import { getAvatar, getRandomImage } from "./utils/generateImages";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TrendItem } from "./components/TrendItem";
import { FollowItem } from "./components/FollowItem";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweets()
    }, 5000);
    return () => clearInterval(interval)
  }, [])

  const addNewRandomTweets = () => {
    const randomTweets = [
      'Acabei de entrar no clone do Twitter! Estou animado para me conectar com todos aqui. 👋 #NovoUsuário',
      'Mais um dia, mais uma linha de código. Continuem avançando, colegas desenvolvedores! 💻 #VidaDeCodificação',
      'Quem mais vai ficar acordado até tarde para assistir à chuva de meteoros hoje à noite? 🌠 #CéuNoturno',
      'Lembrete: seja gentil consigo mesmo e com os outros. Um pouco de compaixão faz toda a diferença. ❤️ #Positividade', 'Dica técnica do dia: sempre faça backup dos seus dados! Você vai agradecer a si mesmo mais tarde. 💾 #ConselhoTecnológico',
    ]

    const randomTweet = randomTweets [Math.floor(Math.random() * randomTweets.length)]

    addNewTweet(randomTweet, Math.random() > 0.7)
  }

  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
      content,
      time: new Date().toLocaleDateString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: includeImage ? getRandomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0,
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  return (
    <div className="flex mx-auto max-w-7xl">
      <Sidebar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
        <header className="top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
          <h2 className="px-4 py-3 text-xl font-bold">Para você</h2>
        </header>
        <TwitterForm
          onTweet={(content) => addNewTweet(content, Math.random() > 0.6)}
        />
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
      <aside className="hidden xl:block w-80 px-4">
        <div className="sticky top-0 pt-2">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-3 text-gray-500"/>
            <input type="text" placeholder="Procurar Twitter" className="w-full bg-gray-800 rounded-full outline-none py-2 pl-10 pr-4 text-white"/>
          </div>

          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Inscreva-se para o Premium</h2>
            <p className="text-gray-500 mb-4">Inscreva-se para desbloquear novos recursos e, se for elegível, receber uma parte da receita dos anúncios.</p>
            <button className="bg-twitter-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">Inscreva-se</button>
          </div>

          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">O que está acontecendo</h2>
            <TrendItem category="NFL • LIVE" name="Cardeais em contas"/>
            <TrendItem category="Sports • Trending" name="Kyle Dugger" tweetCount="13,670"/>
            <TrendItem category="Sports • Trending" name="Anthony Richardson" tweetCount="8,345"/>
            <TrendItem category="Sports • Trending" name="Bryce Young" tweetCount="5,436"/>
            <TrendItem category="Sports • Trending" name="Daboll" tweetCount="1,342"/>
          </div>

          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Quem seguir</h2>
            <FollowItem name="Bill Gates" username="BillGates"/>
            <FollowItem name="Will Smith" username="WillSmith"/>
            <FollowItem name="Elon Musk" username="ElonMusk"/>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
