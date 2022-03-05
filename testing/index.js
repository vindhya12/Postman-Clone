const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(cors())
app.use(express.json())

const jobs = [];
let id = 0;

app.get('/jobs', (request, response)=>{
  response.send(jobs)
})

app.post('/jobs', (request, response)=>{
  data = request.body;
  data.id = id;
  id++;
  jobs.push(request.body)
  
  response.send({
    success : true,
    data : data
  })
})

app.get('/jobs/:requestedId', (request, response)=>{
  const requestedId =  request.params.requestedId;
  for(const job of jobs){
    if(job.id == requestedId) {
      response.send(
        {
          "success" : true,
          "job" : job
        }
      );
      return;
    }
  }
  response.send({
    "success" : false,
    "error" : "No job with this id found"
  });
})

app.listen(PORT, (err)=>{
  if(!err) console.log('app running on : http://localhost:'+PORT);
})