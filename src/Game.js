import React from "react";

class Game extends React.Component {
  render() {
    return (
      <React.Fragment>
           <h1 style={{display:"flex", justifyContent:"center"}}>{this.props.score}</h1>
        <div className="d-flex justify-content-center">
  
          
          {this.props.data.map((item, index) => {
            return (
              <div key={`data-item- ${index}`} >
                 
                <div className="card d"  style={{width: "15rem"}} >
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">
                      {item.type}
                    </p>
                    <p>{item.base_experience}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default Game;
