import './style.scss';

export default function Events() {
    return (
        <div className="Events">
            <h2> Upcoming Events </h2>
            <div className="EventsContent">
                <div className="EventItem">
                    <div className="EventHeader">
                        <div className="EventDate">
                            <div>June<br />13</div>
                        </div>
                        <div className="EventName">
                            <div>
                                <h3> Show do Raffa Moreira </h3>
                                <span>19:00 - 00:00</span>
                            </div>
                        </div>
                        <div className="EventDescription">
                            <p>
                                Rafael Fernando Moreira, mais conhecido pelo nome artístico Raffa Moreira, é um rapper, compositor, arranjador, produtor musical e empresário brasileiro.
                                Ficou conhecido com o single "Bro" lançado em dezembro de 2017.
                            </p>
                        </div>
                    </div>
                    <div className="EventBody">
                        <img src="https://www.meiahora.com.br/_midias/jpg/2019/04/30/mc_vanessa-10908373.jpg" alt="" />
                        <br />
                        <span> 22 places left</span>
                        <button>Sign Up</button>
                    </div>
                </div>
                <div className="EventItem">
                    <div className="EventHeader">
                        <div className="EventDate">
                            <div>June<br />13</div>
                        </div>
                        <div className="EventName">
                            <div>
                                <h3> Show do Matuê </h3>
                                <span>19:00 - 00:00</span>
                            </div>
                        </div>
                        <div className="EventDescription">
                            <p>
                            Matheus Brasileiro Aguiar, mais conhecido como Matuê, é um rapper brasileiro. 
                            Ficou conhecido com o single "Anos Luz", lançado em 2017. É considerado um dos maiores nomes do trap brasileiro.
                            </p>
                        </div>
                    </div>
                    <div className="EventBody">
                        <img src="https://static.meionorte.com/uploads/albuns/2020/3/7464/show-matue-1-845c217a-4da5-4651-8d6e-1919fe6a56ad.jpg" alt="" />
                        <br />
                        <span> 22 places left</span>
                        <button>Sign Up</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}