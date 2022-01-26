
// import express
const express = require('express')
const cors = require("cors")
const url = require('url')
const fetch_colleges = require('./tools/fetch_colleges')
const connect_to_db = require('./tools/connect-to-db')
const fetch_individual_college = require('./tools/fetch-individual-college')


// create app
const app = express()

app.use(cors({
    // origin: "http://127.0.0.1:3000",
    // below line allows only get and post requests, not anything else
    methods: ["GET", "POST"],
    // use the below code to allow any origin
    origin: "*",
    // below line allows credentials
    // credentials: true,
}))

const port = 8080

app.get('/search', async (req, res) => {

    // connect to database before anything starts:

    let db_collection = await connect_to_db()

    const search_query = url.parse(req.url, true).query

    const min_price = search_query.min_price
    const max_price = search_query.max_price
    const state = search_query.state

    const search_results = await fetch_colleges(min_price, max_price, state, db_collection)
    res.send(search_results)
})

app.get('/getIndividualSchool', async (req, res) => {

    // connect to database before anything starts:

    let db_collection = await connect_to_db()

    const search_query = url.parse(req.url, true).query

    const school = JSON.parse(search_query.name).collegeName

    const search_results = await fetch_individual_college(school, db_collection)
    res.send(search_results)
})

console.log('listening on port ' + port)
app.listen(port)
