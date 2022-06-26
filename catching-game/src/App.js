import './App.css';
import { useState } from 'react';
let playerMovement;

function FallingObject() {
    let [backgroundColor, setBackgroundColor] = useState('#fff');
    let fallingObj = (
        <div
            className="fallingObject"
            onClick={() => {
                console.log('hwllo');
            }}
            onAnimationStart={() => {
                console.log('amimation start');
            }}
            onAnimationEnd={() => {
                console.log('end');
            }}
        >
            hi
        </div>
    );

    return fallingObj;
}
function Player({ playerId, movement }) {
    console.log('playerID: ' + playerId + ' movement: ' + movement);
    if (playerId == movement) {
        return <div id={'player' + playerId} className="player"></div>;
    } else {
        return;
    }
}
function ScreenFragment({ id, movement }) {
    let movementKey = id;
    console.log(movement + ' scren frag');
    return (
        <div id={'screen' + id} className="gameScreenFragment">
            <FallingObject />
            <Player playerId={id} movement={movement} />
        </div>
    );
}

function App() {
    playerMovement = 1;

    //true = right && false == left
    function movePlayer() {
        console.log('fucl ths');
        if (playerMovement < 6) {
            console.log(playerMovement);
            playerMovement += 1;
        } else if (playerMovement === 6) {
            console.log(playerMovement);
            playerMovement = 1;
        }
    }

    return (
        <>
            <h1>{playerMovement}</h1>
            <div id="gameContainer">
                <div id="screenContainer">
                    <ScreenFragment id="1" movement={playerMovement} />
                    <ScreenFragment id="2" movement={playerMovement} />
                    <ScreenFragment id="3" movement={playerMovement} />
                    <ScreenFragment id="4" movement={playerMovement} />
                    <ScreenFragment id="5" movement={playerMovement} />
                    <ScreenFragment id="6" movement={playerMovement} />
                </div>
                <div id="buttonsContainer">
                    <button onClick={movePlayer} id="leftButton">
                        Left
                    </button>
                    <button id="rightButton">Right</button>
                </div>
            </div>
        </>
    );
}

export default App;
