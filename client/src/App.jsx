import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie'
import ChannelContainer from './components/ChannelListContainer';
import ChannelListContainer from './components/ChannelListContainer';



const api_key = 'herbpggfaf58';
const client = StreamChat.getInstance(api_key);

const App = () => {
  return (
    <div className='app_wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App