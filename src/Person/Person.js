import React from "react";

function Person({ fullName, bio, imgSrc, profession }) {
  return (
    <>
      <h3>Name: {fullName}</h3>
      <h3>bio: {bio}</h3>
      <h3>profession: {profession}</h3>
      <img width={200} src={imgSrc} alt="profile"></img>
    </>
  );
}

export default Person;
