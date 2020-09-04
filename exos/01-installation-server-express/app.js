const express = require("express");
const app = express();

app.get("/members/:username", (req,res,next) => {
    res.send(`<!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Members</title>
    </head>
    <body>
        <!-- HTML -->
        <header>
            <h1>Hello ${req.params.username}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem unde rerum cum recusandae nemo quod sint quae, asperiores ducimus voluptates possimus distinctio pariatur maxime odit animi molestias fugit ad.</p>
        </header>
        <main>
        
        </main>
        <footer>
        
        </footer>
    </body>
    </html>`);
});

app.listen(8001, ()=> {
    console.log(`Server listening on port 8001`);
})