'use strict';

const express =require('express');
const footballData = require('../models/index');
const bearerAuth = require('../middleware/bearer');
const premissions = require('../middleware/acl');

const teamRout = express.Router();

teamRout.get('/team',getAll);
teamRout.get('/team/:id',getOne);
teamRout.post('/team',bearerAuth,premissions('create'),createTeam);
teamRout.put('/team/:id',bearerAuth,premissions('update'),updateTeam);
teamRout.delete('/team/:id',bearerAuth,premissions('delete'),deleteTeam);

async function getAll(req,res){
    let allTeams = await req.footballData.get();
    res.status(200).json(allTeams);
};

async function getOne(req,res){
    const id = req.params.id;
    let theTeam = await req.footballData.get(id);
    res.status(200).json(theTeam);
};

async function createTeam(req,res){
    let obj = req.body;
    let newTeam =  await req.footballData.create(obj);
    res.status(200).json(newTeam);
};

async function updateTeam(req,res){
    let obj = req.body;
    const id = req.params.id;
    let updated = await req.footballData.update(id,obj);
    res.status(200).json(updated);
};

async function deleteTeam(req,res){
    const id = req.params.id;
    let deleted = await req.footballData.delete(id);
    res.status(200).json(deleted);
};

module.exports=teamRout;