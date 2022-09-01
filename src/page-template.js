
//export function to generate entire page
module.exports = templateData => {
    //destructure page data by section
    const {description, contents, ...questionsEmail} = templateData;

    return `
    <!DOCTYPE md>
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Readme Demo</title>
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateAbout(about)}
      ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};