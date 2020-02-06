const express = require('express');

const server = express();

server.use(express.json());

const projectList = [];

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projectList.push(project);

  return res.json(project);
});

server.get('/projects', (req, res) => {
  return res.json(projectList);
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const searchedProject = projectList.find(p => p.id == id);

  searchedProject.title = title;

  return res.json(searchedProject);
});

server.listen(3000);