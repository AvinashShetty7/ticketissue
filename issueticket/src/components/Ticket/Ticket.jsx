import React from 'react'




function Ticket() {
  return (
    <>
    <div className="main">
      <h1>Ticket Tracker</h1>
      <input type="text" placeholder="Title"></input><br/><br/>
      <input type="text" placeholder="Description"></input><br/><br/>

      <button>create Ticket</button>

    </div>
    </>
  )
}

export default Ticket
