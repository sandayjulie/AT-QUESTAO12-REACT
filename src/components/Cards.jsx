import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar o CSS do Bootstrap
import "./Cards.css"; // Importe o arquivo CSS 

const Cards = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="text-center mb-4 contato">O que oferecemos?</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Kit de Diagnóstico:</h2>
                <p className="card-text">O HealTech possui um conjunto de dispositivos de diagnóstico médico, incluindo sensores para medir sinais vitais como pressão arterial, frequência cardíaca, temperatura corporal e níveis de glicose. Os resultados são exibidos em uma interface e podem ser compartilhados com profissionais</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Telemedicina Integrada:</h2>
                <p className="card-text">O dispositivo está conectado a uma plataforma de telemedicina que permite que profissionais de saúde remotamente avaliem os resultados dos testes e forneçam orientações médicas direcionadas. Isso é especialmente útil quando médicos e especialistas não podem estar presentes nas áreas afetadas.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Farmácia Digital e Remédios:</h2>
                <p className="card-text">O HealTech possui um sistema de farmácia digital que fornece informações sobre medicamentos comuns e suas dosagens. Além disso, ele pode ser usado para solicitar medicamentos essenciais, que são entregues por meio de drones ou outros métodos de transporte adequados para tais.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Fonte de Energia Renovável:</h2>
                <p className="card-text">O dispositivo é alimentado por energia solar e possui baterias de alta capacidade, garantindo sua funcionalidade contínua mesmo em áreas com acesso limitado à eletricidade. Painéis solares embutidos captam a energia do sol e armazenam-na para alimentar e recarregar o aparelho HealTech.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Conectividade Off-grid:</h2>
                <p className="card-text">O HealTech pode criar redes locais para comunicação em áreas sem acesso à Internet, permitindo que as comunidades conversem com equipes de assistência humanitária e profissionais de saúde em momentos de emergência. Eliminando limites de comunicação entre profissionais.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h2 className="card-title">Monitoramento e Alertas:</h2>
                <p className="card-text">O aparelho possui um sistema de monitoramento em tempo real que envia alertas automaticamente quando há problemas graves de saúde, como surtos, doenças ou situações de emergência, para diversos profissionais. Previnindo crises de saúde e agilizando ajudas profissionais.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Cards;
