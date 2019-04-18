 /*******
    * URL desgin: for now there are two kinds of URIs, 1)single word without dash. 2) multiple word hyphenated.
    * the first type is reservered for system use. e.g. different funcitons, special URI for paied custumers. 
    * the second type is for redirecting collections. e.g. https://lynks.to/how-to-prepare-for-gcp-exams
    General rules for URL:
    1) No upper case letter. */

const express = require('express')
const next    = require('next')

const dev    = process.env.NODE_ENV !== 'production'
const app    = next({ dev })
const handle = app.getRequestHandler()
const PORT   = process.env.PORT || 8080
app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/certified/:name', (req, res) => {
        return app.render(req, res, '/certified', { name: req.params.name })
    })

    //came with nextjs example code. will delete before production
    server.get('/:id/?', (req, res, next) => {
        var id = req.params.id
        //if the request is null or single word, it is index or pages, pass on to nextjs
        if(!id || !id.includes('-')) {
            next();
            return;
        };
        const actualPage = '/collection'
        const queryParams = { title: req.params.id }
        app.render(req, res, actualPage, queryParams)       
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, err => {
      if (err) throw err
      console.log('> Ready on port '+PORT+` Check site on https://test.appspot.com`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
