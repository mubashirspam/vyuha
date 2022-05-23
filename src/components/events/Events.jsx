import "./events.css";

import React from "react";

import "./events.css";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
    title: "Programming Arduino: Getting Started with Sketches",
    discription:
      "Paper, a crypto-focused payments processing company, makes buying,using and holding NFTs easier for the everyday customers trying to",
    date: "May-28",
    time: "12:00 pm",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
    title: "Programming Arduino: Getting Started with Sketches",
    discription:
      "Paper, a crypto-focused payments processing company, makes buying,using and holding NFTs easier for the everyday customers trying to",
    date: "May-28",
    time: "12:00 pm",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
    title: "Programming Arduino: Getting Started with Sketches",
    discription:
      "Paper, a crypto-focused payments processing company, makes buying,using and holding NFTs easier for the everyday customers trying to",
    date: "May-28",
    time: "12:00 pm",
  },
];

const Events = () => {
  return (
    <section id="events">
      <h1>Events</h1>
      <div className="container events__container">
        

   
      {
        data.map(({id,image,title,discription,date,time})=>{
          return (
            <article key={id} className="events__item">
              <div className="events__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>
                {discription}
              </p>
              <div className="events__item-cta">
                <p className="events__date">
                  {date} <br />{" "}
                  <span className="events__date events__time">{time}</span>
                </p>
                <a href="" className="events__btn " target="_blank">
                  Apply Now
                </a>
              </div>
            </article>
          );
        })
      }
      </div>
    </section>
  );
};

export default Events;
