import React, {useState} from 'react';
import ChatMessage from './ChatMessage.js'
import { analyze } from './utils.js';
function ChatBot(){
    const[messages,setMessages]= useState([
        {
            message:"Hi, May I have your name?"

        }
    ]);
    const [text, setText]=useState('');
    const send=()=>{
        let list =[...messages,{message:text, user:true}];
        if(list.length>2){
            const reply= analyze(text)
            list =[...list, {message:reply}];

        }else{
            list =[...list,
                {
                    message:`Hi,${text}`
                },
                {
                    message:"How Can I help You"
                },
            ];
        }
        setMessages(list);
        setText("");   
    }
    return (   
    <div>
        <div className='root' >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGeQHnhzN9MsbO2pN05j1EXS80lPAG_dRLw&usqp=CAU'
            alt='logo'
            height={200}
            width={200}/> 
            <h2>Chat with me</h2>
        </div>
        <div className='chat-message'>
            {
                messages.length>0 && messages.map((data)=> <ChatMessage {...data}/>)
            }
            <div>
                <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/> 
                <button onClick={send}>Send</button>
            </div>
        </div>
    </div>
    );
}
export default ChatBot;

