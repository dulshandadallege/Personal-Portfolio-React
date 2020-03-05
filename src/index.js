import React from "react";
import ReactDOM from "react-dom";
import './index.css'

const Person = ({ img, name, job, children }) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;


    return (
        <article className="person">
            <img
                src={url}
                alt="person" />
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    )
}




const PersonList = () => {
    return (
        <section className="person-list">
            <Person img="30" name='john' job="developer" />
            <Person img="24" name='bob' job="designer">
                <p>Now, the question you should be asking yourself:
                What can I invest time and effort into learning that has
                the greatest net value on my future career as a developer
                in terms of knowledge, salary, and satisfaction?
                </p>
            </Person>
            <Person img="57" name='david' job="ceo" />
        </section>
    );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById('root'));