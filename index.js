const express = require('express')
const PDFGenerator = require('pdfkit')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('hello')
})

app.get('/pdfkit', pdf)

app.listen(port, () => {
	console.log(`express app listening at http://localhost:${port}`)
})

async function pdf(req, res) {
	try {
		const filename = `pdf-generator-${Math.round(Math.random() * 10000)}`;
		const doc = new PDFGenerator()
		
		res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
		res.setHeader('Access-Control-Allow-Origin', '*')
		res.setHeader('Content-Type', 'application/pdf')
		res.status(201)
		doc.text('hello world')
		doc.pipe(res)
		doc.end()
	} catch (err) {
		res.status(500).json({message: 'error happened, sorry'})
	}



}