# json-job

The open source initiative to create a JSON-based standard for job posts. Inspired by jsonresume.org

## Json and schema are in alpha stage. Subject to change.

### Would you like an API with your job posts?

It's quite simple:

1. Deploy heroku app [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
1. Clone heroku repository and change job.json
1. Do your change and `git push heroku master`

Here is an example:
https://jsonjob.herokuapp.com/api/jobs
Server responses with sample jobs

You may want to fork the repository first and change job.json there.

### Validation

To validate json send the file to the server
```
curl -H "Content-Type: application/json" --data @job.json https://jsonjob.herokuapp.com/api/validate
```
The response should be
```
{"errros":null,"result":{"valid":true,"errors":[],"warnings":[]}}
```

### TODO
- [ ] From that converts to json
- [ ] json-schema
- [x] heroku app with validation and example job API

### Install

```
git clone git@github.com:lukasz-madon/json-job.git
cd json-job
npm install
```

### Run

```foreman start```

I welcome any contributions!

```
{
  "company": "Pied Piper",
  "url": "http://piedpiper.com/",
  "remote-friendly": true,
  "market": "SaaS",
  "size": "10-50",
  "jobs": [
    {
      "position": "Software Engineer",
      "title": "Backend Developer",
      "description": "You will help us build API for our compression infrastructure.",
      "url": "http://piedpiper.com/jobs/backend-developer",
      "type": "full-time",
      "posted": "20-01-2015",
      "location": "US",
      "skills": ["Python", "Javascript", "Redis"],
      "salary-range": {
        "from": 90000,
        "to": 100000,
        "currency": "$"
      },
      "equity": {
        "from": 0.005,
        "to": 0.01
      },
      "perks": ["free food", "gym membership"],
      "apply": "http://piedpiper.com/jobs/backend-developer/apply"
    },
    {
      "position": "Software Engineer",
      "title": "Frontend Developer",
      "description": "You will help us build dashboard for our compression infrastructure.",
      "url": "http://piedpiper.com/jobs/frontend-developer",
      "type": "full-time",
      "posted": "20-01-2015",
      "location": "US",
      "skills": ["Javascript", "Angular.js", "CSS"],
      "salary-range": {
        "from": 90000,
        "to": 100000,
        "currency": "$"
      },
      "equity": {
        "from": 0.005,
        "to": 0.01
      },
      "perks": ["free food", "gym membership"],
      "apply": "http://piedpiper.com/jobs/frontend-developer/apply"
    },
    {
      "position": "UI/UX Designer",
      "title": "UX Designer",
      "description": "You will help us design dashboard for our compression infrastructure.",
      "url": "http://piedpiper.com/jobs/ux-designer",
      "type": "full-time",
      "posted": "20-01-2015",
      "location": "US",
      "skills": ["HTML", "CSS", "Photoshop"],
      "salary-range": {
        "from": 90000,
        "to": 100000,
        "currency": "$"
      },
      "equity": {
        "from": 0.005,
        "to": 0.01
      },
      "perks": ["free food", "gym membership"],
      "apply": "http://piedpiper.com/jobs/ux-designer/apply"
    }
  ]
}
```
