import photo from '../assets/images/photo.png';

export default function About() {
    return (
      <div className="container p-5">
      <h1 className = "px-3 text-white">About Me</h1>
      <img className = "mx-auto d-block w-25" src={photo} alt="Profile photo of Ajay Shanmuganathan (portfolio owner)"/>
      <p className="px-3 py-2 text-white mt-5">
      My name is Ajay and I'm interested in using tech to enhance the way people live their lives. This passion came about whilst I was in uni and I found myself struggling to manage my finances.
      By downloading and engaging with budgeting and investment apps, I was able to get to grips with it all and secure my financial future. 
      In turn, I'm eager to share my experiences and eventually develop my own website/app that will help me have a wider reach in this ongoing pursuit. 
      </p>
    </div>
    );
  }
  