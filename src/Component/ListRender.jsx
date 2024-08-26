import React from "react";
import { useState } from "react";

export default function ListRender() {
  const [listdata, setlistdata] = useState(
    
    [
    { id: 1, name: "Wakeup" },
    { id: 2, name: "eat" },
    { id: 3, name: "sleep" },
    { id: 4, name: "play" },
  ]

);

  return (
    <div>
      <h1>Todo List</h1>

      {listdata.map((da) => (
        <div key={da.id}>
          <h1>
            {da.id}. {da.name}


            
          </h1>
        </div>
      ))}
    </div>
  );
}
