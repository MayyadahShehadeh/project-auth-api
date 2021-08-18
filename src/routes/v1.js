'use strict';

const express =require('express');
const {football} = require('../models/index');
const bearerAuth = require('../middleware/bearer');
const premissions = require('../middleware/acl');
// const { request } = require('express');

const teamRout = express.Router();

teamRout.get('/team',getAll);
teamRout.get('/team/:id',getOne);
teamRout.post('/team',bearerAuth,premissions('create'),createTeam);
// teamRout.post('/team',premissions('create'),createTeam);
teamRout.put('/team/:id',bearerAuth,premissions('update'),updateTeam);
teamRout.delete('/team/:id',bearerAuth,premissions('delete'),deleteTeam);

async function getAll(req,res){
    let allTeams = await football.get();
    res.status(200).json(allTeams);
};

async function getOne(req,res){
    const id = req.params.id;
    let theTeam = await football.get(id);
    res.status(200).json(theTeam);
};

async function createTeam(req,res){
    console.log(req.football,"req.football")
    let obj = req.body;
    console.log(req.body,'req.body')
    let newTeam =  await football.create(obj);

    res.status(200).json(newTeam);
};

async function updateTeam(req,res){
    let obj = req.body;
    const id = req.params.id;
    let updated = await football.update(id,obj);
    res.status(200).json(updated);
};

async function deleteTeam(req,res){
    const id = req.params.id;
    let deleted = await football.delete(id);
    res.status(200).json(deleted);
};

module.exports=teamRout;