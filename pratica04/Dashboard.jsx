import React from 'react';
import Card from '../../components/Card/Card';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Card title="Mural de Avisos" variant="highlight">
        <p>Inscrição para o projeto de extensão</p>
        <p>Eleição para representante de turma</p>
      </Card>

      <Card title="Calendário Acadêmico">
        <ul>
          <li>23/02 - Início do período letivo 2026-1</li>
          <li>25/04 - Prazo final para aplicação da P1</li>
          <li>23/06 - Prazo final para aplicação da P2</li>
          <li>04/07 - Fim do período letivo 2026-1</li>
        </ul>
      </Card>

      <Card title="Minhas Disciplinas" variant="warning">
        <ul>
          <li>BI e Data Warehousing</li>
          <li>Construção de Frontend</li>
          <li>Metodologia Científica</li>
        </ul>
      </Card>
    </div>
  );
};

export default Dashboard;