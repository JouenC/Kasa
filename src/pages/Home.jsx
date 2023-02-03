// react
import React from "react";
import { Link } from "react-router-dom";

// components and data
import Card from "../components/Card"
import Banner from "../components/Banner"
import leases from "../data/logements.json"
import Text from "../data/text.json"


function Home () {
	return (
		<div className="home">
			<div className="forest">
				<Banner slogan={Text.slogan}/>
			</div>
			<section className="cardBody">
        		{leases.map((lease) => {
          			return (
            			<article key={lease.id} className="container">
              				<Link to={`/FicheLogement/${lease.id}`}>
                				<Card image={lease.cover} title={lease.title} />
              				</Link>
            			</article>
          			)
        		})}
      		</section>
		</div>
	)
}

export default Home