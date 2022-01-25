

//GlobalStyle é como se fosse um reset de CSS
function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

function Titulo(props) {
    const Tag = props.tag || 'h1';
    console.log(props);
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

//Componente React
function HomePage() {
    //JSX
    return (
        <div>
            <GlobalStyle />
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <h2>Discord - Alura Matrix</h2>            
        </div>
    );
}

export default HomePage






  







