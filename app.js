import express, { json, request, response } from 'express'
import { fetchJson, postJson } from './helpers/fetchWrapper.js'
const url = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1'


const urlsData = await fetchJson(`${url}/urls?first=300`).then((data) => data);
const websitesData = await fetchJson(`${url}/websites`).then((data) => data);

console.log(websitesData)

// Maakt een nieuwe express app
const app = express()

// Stelt in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Stelt de afhandeling van formulieren in
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Maakt een route voor de index pagina
app.get('/', (request, response) => {
  fetchJson(url).then((data) => {
    response.render('index', { data: data, active: '/' })
  })
})

// Maakt een route voor het toolboard
app.get('/toolboard', function (request, response) {
  fetchJson(`${url}/principes`).then((data) => {
    response.render('toolboard', { api: data, active: '/toolboard' })
  })
})

// Maakt een route voor de contact pagina
app.get('/contact', function (request, response) {
  fetchJson(url).then((data) => {
    response.render('contact', { data: data, active: '/contact' })
  })
})

// Maakt een route voor projectboard
app.get('/projectboard', function (request, response) {

  // let urls = structuredClone(urlsData.urls);
  let urls = [...urlsData.urls];
  let direction;

  if (request.query.sort == 'DESC') {
    urls = urls.sort(function (a, b) {
      return a.website.titel.localeCompare(b.website.titel);
    }).reverse();
    console.log(urls)
  } else {
    urls = urls.sort(function (a, b) {
      return a.website.titel.localeCompare(b.website.titel);
    });
  }
  direction = request.query.sort;
  response.render('projectboard', { websitesData: websitesData.websites, urlsData: urls, active: '/projectboard', direction: direction })
})

app.post('/projectboard', (request, response) => {
  console.log(request.body)
  postJson(`${url}/urls`, request.body).then((data) => {
    let newURL = { ...request.body }

    if (data.success) {
      response.redirect('/?urlPosted=true')
    } else {
      const errorMessage = data.message
      const newData = { error: errorMessage, values: newURL }

      response.redirect('/projectboard')
    }
  })
})

// Stelt het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})