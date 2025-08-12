import React from 'react';
import './AzureServices.css';

const azureServices = [
  {
    name: 'Azure App Service',
    description: 'Host web apps, RESTful APIs, and mobile back ends in the programming language of your choice without managing infrastructure.'
  },
  {
    name: 'Azure Functions',
    description: 'Event-driven serverless compute platform for easily running small pieces of code in the cloud.'
  },
  {
    name: 'Azure Storage',
    description: 'Durable, scalable cloud storage for data, files, and objects.'
  },
  {
    name: 'Azure SQL Database',
    description: 'Managed relational SQL database as a service.'
  },
  {
    name: 'Azure Virtual Machines',
    description: 'Provision Windows and Linux VMs in seconds.'
  },
  {
    name: 'Azure Kubernetes Service (AKS)',
    description: 'Managed Kubernetes container orchestration service.'
  },
  {
    name: 'Azure Cognitive Services',
    description: 'Add AI capabilities like vision, speech, and language to your apps.'
  },
  {
    name: 'Azure DevOps',
    description: 'Services for teams to share code, track work, and ship software.'
  }
];

function AzureServices() {
  return (
    <div className="azure-services-container">
      <h1>Azure Services</h1>
      <p>Explore popular Microsoft Azure cloud services below:</p>
      <div className="services-list">
        {azureServices.map((service, idx) => (
          <div className="service-card" key={idx}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AzureServices;
