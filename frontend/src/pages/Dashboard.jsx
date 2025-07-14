import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Menu lateral */}
      <aside className="sidebar">
        <h2>GS - Books</h2>
        <nav>
          <ul>
            <li>Início</li>
            <li>Perfil</li>
            <li>Configurações</li>
            <li>Sair</li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <div className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <p>Bem-vindo de volta!</p>
        </header>

        <section className="content">
          <div className="card">Total de Usuários: 120</div>
          <div className="card">Novos Registros: 8</div>
          <div className="card">Atividades Recentes</div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
