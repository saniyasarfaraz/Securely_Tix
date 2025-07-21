import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import logo from '../securelytixlogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';


const API_BASE = 'https://securely-tix.onrender.com/api/data';

function Dashboard() {
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [summary, setSummary] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/clients`).then(res => res.json()).then(data => setClients(data));
    fetch(`${API_BASE}/employees`).then(res => res.json()).then(data => setEmployees(data));
    fetch(`${API_BASE}/summary`).then(res => res.json()).then(data => setSummary(data));

    const email = localStorage.getItem("userEmail");
if (email) {
  setUserEmail(email);
//   setUserName(email.split("@")[0]); // Optional: show username before @
}

  }, []);
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  return (
    <div className="dashboard-container">
     <header className="dashboard-header">
  <div className="logo-area">
    <img src={logo} alt="Securelytix Logo" className="logo-icon logo" />
  </div>
  <div className="user-area">
    <div className="user-info">
      {/* <strong>{userName}</strong><br /> */}
      <span>{userEmail}</span>
    </div>
    <button className="logout-button" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>
  </div>
</header>

      <main className="dashboard-main">
        <section className="dropdown-section">
          <div className="dropdown-box">
            <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2 h-5 w-5 text-primary" data-lov-id="src/pages/Dashboard.tsx:184:16" data-lov-name="Building2" data-component-path="src/pages/Dashboard.tsx" data-component-line="184" data-component-file="Dashboard.tsx" data-component-name="Building2" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>  Client Management</h2>
            <p>Select a client to view their security profile and details</p>
            <select onChange={(e) => setSelectedClient(clients.find(c => c.id === parseInt(e.target.value)))}>
              <option value="">Select a client</option>
              {clients.map(client => (
                <option key={client.id} value={client.id}>{client.name}</option>
              ))}
            </select>
            {selectedClient && (
              <div className="detail-card">
                <h3>{selectedClient.name}</h3>
                <p>{selectedClient.industry}</p>
                <p>📧 {selectedClient.email}</p>
                <p>📞 {selectedClient.phone}</p>
                <p>📍 {selectedClient.location}</p>
                <p>📅 Client since {selectedClient.since}</p>
                <span className={`risk-badge ${selectedClient.riskLevel.replace(/ /g, '').toLowerCase()}`}>{selectedClient.riskLevel}</span>
              </div>
            )}
          </div>

          <div className="dropdown-box">
            <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Employee Directory</h2>
            <p>Select an employee to view their profile and contact information</p>
            <select onChange={(e) => setSelectedEmployee(employees.find(emp => emp.id === parseInt(e.target.value)))}>
              <option value="">Select an employee</option>
              {employees.map(emp => (
                <option key={emp.id} value={emp.id}>{emp.name} - {emp.role}</option>
              ))}
            </select>
            {selectedEmployee && (
              <div className="detail-card">
                <div className='employee-header'>
                <div className="employee-badge">{selectedEmployee.name.split(' ').map(n => n[0]).join('')}</div>
                <div className="employee-info">
                <h3>{selectedEmployee.name}</h3>
                <p>{selectedEmployee.role}</p>
                <span className="department-badge">{selectedEmployee.department}</span> 
                </div>
                </div>
                <p>📧 {selectedEmployee.email}</p>
                <p>📞 {selectedEmployee.phone}</p>
                <p>📍 {selectedEmployee.location}</p>
                <p>📅 Joined: {selectedEmployee.joined}</p>
                <p>Experience: <strong>{selectedEmployee.experience} years</strong></p>
              </div>
            )}
          </div>
        </section>

        <section className="summary-section">
          <div className="summary-box summary-box-client">
            <h3>{summary.totalClients || 0}</h3>
            <p>Total Clients</p>
          </div>
          <div className="summary-box summary-box-client">
            <h3>{summary.totalEmployees || 0}</h3>
            <p>Team Members</p>
          </div>
          <div className="summary-box-low-risk summary-box">
            <h3>{summary.lowRiskClients || 0}</h3>
            <p>Low Risk Clients</p>
          </div>
          <div className="summary-box-high-risk summary-box">
            <h3>{summary.highRiskClients || 0}</h3>
            <p>High Risk Clients</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
