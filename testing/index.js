import express, { json } from 'express';
const app = express();
import cors from 'cors';

app.use(cors())
app.use(json())

const jobs = [];
let id = 0;

app.get('/job/:requestedId', (request, response)=>{
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

app.listen(3001, (err)=>{
  if(!err) console.log('app running on port 3001');
})