const express = require('express');
const router = express.Router();

const clients = [
  {
    id: 1,
    name: 'Global Finance Inc',
    industry: 'Finance',
    email: 'security@globalfinance.com',
    phone: '+1 (555) 987-6543',
    location: 'New York, NY',
    riskLevel: 'Medium Risk',
    since: '2023-11-20'
  },
  {
    id: 2,
    name: 'ABC Tech Solutions',
    industry: 'Technology',
    email: 'security@abctech.com',
    phone: '+1 (555) 222-3333',
    location: 'San Francisco, CA',
    riskLevel: 'Low Risk',
    since: '2022-08-14'
  },
  {
    id: 3,
    name: 'Delta Insurance',
    industry: 'Insurance',
    email: 'security@deltainsure.com',
    phone: '+1 (555) 333-1212',
    location: 'Chicago, IL',
    riskLevel: 'High Risk',
    since: '2021-05-01'
  },
  {
    id: 4,
    name: 'Green Earth Org',
    industry: 'Environmental',
    email: 'info@greenearth.org',
    phone: '+1 (555) 777-8888',
    location: 'Portland, OR',
    riskLevel: 'Low Risk',
    since: '2023-02-10'
  }
];

const employees = [
  {
    id: 1,
    name: 'Emily Rodriguez',
    role: 'Incident Response Lead',
    department: 'SOC',
    email: 'emily.rodriguez@securelytix.com',
    phone: '+1 (555) 456-7891',
    location: 'Denver, CO',
    joined: '2022-01-10',
    experience: 6
  },
  {
    id: 2,
    name: 'Liam Bennett',
    role: 'Security Analyst',
    department: 'Threat Intel',
    email: 'liam.bennett@securelytix.com',
    phone: '+1 (555) 222-7890',
    location: 'Austin, TX',
    joined: '2021-06-18',
    experience: 4
  },
  {
    id: 3,
    name: 'Sophia Lee',
    role: 'Vulnerability Analyst',
    department: 'Risk Management',
    email: 'sophia.lee@securelytix.com',
    phone: '+1 (555) 654-3210',
    location: 'Seattle, WA',
    joined: '2020-03-22',
    experience: 5
  },
  {
    id: 4,
    name: 'Arjun Mehta',
    role: 'Compliance Officer',
    department: 'Governance',
    email: 'arjun.mehta@securelytix.com',
    phone: '+1 (555) 876-5432',
    location: 'New Delhi, India',
    joined: '2019-11-15',
    experience: 7
  }
];

router.get('/clients', (req, res) => {
  res.json(clients);
});

router.get('/employees', (req, res) => {
  res.json(employees);
});

router.get('/summary', (req, res) => {
  const totalClients = clients.length;
  const totalEmployees = employees.length;
  const lowRisk = clients.filter(c => c.riskLevel === 'Low Risk').length;
  const highRisk = clients.filter(c => c.riskLevel === 'High Risk').length;

  res.json({
    totalClients,
    totalEmployees,
    lowRiskClients: lowRisk,
    highRiskClients: highRisk
  });
});

module.exports = router;
