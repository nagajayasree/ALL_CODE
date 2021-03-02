import React from 'react';

const useState = React.useState;

function Likes(){
    return(
        <LikeArea />
    )
}

function LikeArea(){
    const [likeCount,setLikeCount] = useState(0);

    function IncLike(){
        setLikeCount(function(prev){
            return prev + 1;
        })
    }

    function DecLike(){
        setLikeCount(prev =>{
            if(likeCount > 0){
                return prev - 1;
            }
            return 0;
        })
    }

    return(
    <>
    <button onClick={IncLike}>Increment</button>
    <button onClick={DecLike}>Decrement</button>
    <p>This like has been liked {likeCount} times.</p>
    </>
    )
}

export default Likes;