#!/usr/bin/env node
'use strict';

const app = require('commander');
const request = require('request');
const config = require('./config');
const results = require('./results');
const api = 'https://labs.w3.org/echidna/api/request';
const statusApi = 'http://labs.w3.org/echidna/api/status?id=';

app.version('0.0.1');

app.command('add <name> <documentUrl> <token>')
   .description('Add a document')
   .action(add);

app.command('remove <name>')
   .description('Remove a document')
   .action(remove);

app.command('list')
   .description('List documents')
   .action(list);

app.command('info <name>')
   .description('Show info')
   .action(info);

app.command('publish <name> <decisionUrl>')
   .description('Publish the document')
   .action(publish);

app.command('status <name>')
   .description('Show the status of the most recent publish attempt')
   .action(status);

app.parse(process.argv);
if (process.argv.length < 3)
  app.outputHelp();

function required(name, val) {
  if (!val) {
    console.error(name + ' is required!');
    process.exit(1);
  }
}

function add(name, url, token) {
  required('name', name);
  required('url', url);
  required('token', token);
  config.add(name, url, token, function() {
    console.log('added');
  });
}

function remove(name) {
  required('name', name);
  config.remove(name, function() {
    console.log('removed');
  });
}

function list() {
  config.list(function(err,keys) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    keys.forEach((item)=>console.log(item));
  });
}

function info(name) {
  required('name', name);
  config.get(name, function(err, info) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('Name:', name);
    console.log('URL:', info.url);
    console.log('Token:', info.token);
  });
}

function publish(name, decisionUrl) {
  required('name', name);
  required('decisionUrl', decisionUrl);
  config.get(name, function(err, info) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    if (info) {
      console.log('Name: ' + name);
      console.log('URL: ' + info.url);
      _publish(name, info.url, decisionUrl, info.token);
    } else {
      console.log('No data.');
    }
  });
}

function status(name) {
  required('name', name);
  config.get(name, function(err, info) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    if (info) {
      console.log('Name: ' + name);
      console.log('URL: ' + info.url);
      if (info.status) {
        console.log('Status Key: ' + info.status);
        console.log('Last Attempt: ' + info.last);
        request.get(statusApi + info.status)
               .on('response', (res)=>{results(res);});
      } else {
        console.log('Status: None');
      }
    } else {
      console.log('No data.');
    }
  });
}

function _publish(name, url, decision, token) {
  request.post(api, {form:{
    url: url,
    decision: decision,
    token: token
  }}).on('response', function(res) {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      var stat = '';
      var now = (new Date()).toISOString();
      res.on('data', (chunk)=>stat+=chunk);
      res.on('end', ()=>{
        config.update(name, stat, now, function() {
          console.log('Publication requested... Checking status');
          status(name);
        });
      });
    } else {
      console.log('Failed. [' + res.statusCode + ']');
    }
  });
}
