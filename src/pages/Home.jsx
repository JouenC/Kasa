import React from "react";
import { Link } from "react-router-dom";
// import landscape from "../assets/MaskGroup.svg"
import Card from "../components/Card/Card"
import leases from "../data/logements.json"
import Banner from "../components/Banner/Banner"
import Text from "../data/text.json"

function Home () {
	return (
		<div>
			<div className="banner">
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