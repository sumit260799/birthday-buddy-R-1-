import React from "react";
import Person from "./Person";
function List({ count }) {
  return (
    <>
      <section>
        {count.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
      </section>
    </>
  );
}

export default List;
