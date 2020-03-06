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
            <Person img="30" name='john lewis' job="developer">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Person>
            <Person img="24" name='bob elgar' job="designer">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                   consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Person>
            <Person img="57" name='david desilva' job="ceo">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Person>
        </section>
    );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById('root'));