import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { AppBar, Container, Toolbar, Grid } from "@mui/material";

const MainPage = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [color, setColor] = useState('blue')
  const [ancho, setAncho] = useState('100px');
  const [alto, setAlto] = useState('100px');
  const moveSquare = (direction, pixels) => {
    switch (direction) {
      case 'UP':
        setPosition({ ...position, top: position.top - pixels });
        console.log("arriba");
        break;
      case 'DOWN':
        setPosition({ ...position, top: position.top + pixels });
        console.log("abajo");
        break;
      case 'LEFT':
        setPosition({ ...position, left: position.left - pixels });
        console.log("izquierda");
        break;
      case 'RIGHT':
        setPosition({ ...position, left: position.left + pixels });
        console.log("derecha");
        break;
      default:
        break;
    }
  };
    const commands = [
      {
        command: 'Up.',
       callback: () => {
      moveSquare('UP', 50);
    }
      },
      {
        command: 'Down.',
        callback: () => {
          moveSquare('DOWN', 50);
        }
      },
      {
        command: 'Right.',
        callback: () => {
          moveSquare('RIGHT', 50);
        }
      },
      {
        command: 'Left.',
        callback: () => {
          moveSquare('LEFT', 50);
        }
      },
      {
        command: 'Pink.',
        callback: () => {
          setColor('pink')
        }
      },
      {
        command: 'Blue.',
        callback: () => {
          setColor('blue')
        }
      },
      {
        command: 'Yellow.',
        callback: () => {
          setColor('yellow')
        }
      },
      {
        command: 'Red.',
        callback: () => {
          setColor('red')
        }
      },
      {
        command: 'Green.',
        callback: () => {
          setColor('green')
        }
      },
      {
        command: 'Invisible.',
        callback: () => {
          setColor('white')
        }
      },
      {
        command: 'Big.',
        callback: () => {
          setAncho('200px')
          setAlto('200px');
        }
      },
      {
        command: 'Small.',
        callback: () => {
          setAncho('50px')
          setAlto('50px');
        }
      },
      {
        command: 'Medium.',
        callback: () => {
          setAncho('100px')
          setAlto('100px');
        }
      },
      {
        command: 'Big.',
        callback: () => {
          setAncho('200px')
          setAlto('200px');
        }
      },
    ]


  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  console.log(transcript)
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div>   
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar >
                    <Grid container>
                        <Grid item xs={12} md={4} lg={4}>        
                          <h3>Aplicación por voz</h3>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>        
                          <button onClick={() => SpeechRecognition.startListening({continuous: true})}>Start</button>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>        
                          <button onClick={SpeechRecognition.stopListening}>Stop</button>
                        </Grid>
                    </Grid>
                </Toolbar >
            </Container>
        </AppBar>
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div
          style={{
            width: ancho,
            height: alto,
            backgroundColor: color,
            position: 'relative',
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        />
      </div>
    </>
  );
};

export default MainPage;