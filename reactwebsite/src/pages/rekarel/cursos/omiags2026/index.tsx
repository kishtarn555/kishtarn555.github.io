import React from "react";
import Nav from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { CPTopic } from "../../../../common/types";

const topics: CPTopic[] = [{
    label: "Examen OMIS (Online) 2026",
    problems: [
        {
            label: "Karel el influencer", 
            url: "https://dmoj.olimpiadadeinformatica.org.mx/problem/omips2026influencer"
        },
        { 
            label: "Las tlayudas del AIFA",
            url: "https://dmoj.olimpiadadeinformatica.org.mx/problem/omips2026tlayudas"
        },
        { 
            label: "Ley Vinicius-Prestianni",
            url: "https://dmoj.olimpiadadeinformatica.org.mx/problem/omips2026vinicius"
        },
        {
            label: "FIFA Fan Fest en la Macroplaza",
            url: "omips2026fanfest"
        }
    ]
}];

const Omiags2026: React.FC = () => {
  return (
    <>
      <Nav />
      <main className="omiags-page">
        <div className="omiags-list">
          <h1>OMIAGS 2026</h1>
          <div>
            <p>
            Enlace al concurso de DMOJ (Es necesario entrar para ver algunos recursos)
            </p>

            <a href="https://dmoj.olimpiadadeinformatica.org.mx/contest/omiags26n1">https://dmoj.olimpiadadeinformatica.org.mx/contest/omiags26n1</a>
          </div>
          {topics.map((topic) => (
            <details key={topic.label}>
              <summary>{topic.label}</summary>
              <ul>
                {topic.problems.map(({label, url}) => <li key={url}><a href={url}>{label}</a></li>)}
              </ul>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Omiags2026;