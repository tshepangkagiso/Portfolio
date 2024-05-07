DownloadCV();
ProjectsRoute();



function DownloadCV(){
    document.getElementById('downloadButton').addEventListener('click', function() {

        var downloadLink = document.createElement('a');
        
        downloadLink.href = 'path/to/your/cv.pdf';
        downloadLink.download = 'cv.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
}

function ProjectsRoute(){
    document.getElementById('goProjects').addEventListener('click', function() {

        var downloadLink = document.createElement('a');
        
        downloadLink.href = 'Projects/projects.html';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
}

