Loader();
DownloadCV();

function Loader() {
    window.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById("loading-overlay").style.display = "flex";
        document.getElementById("content").style.display = "none";

        setTimeout(function() {
            document.getElementById("loading-overlay").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 2000);
    });
}


function DownloadCV(){
    document.getElementById('downloadButton').addEventListener('click', function() {

        var downloadLink = document.createElement('a');
        
        downloadLink.href = '../resources/Tshepang Mashigo CV.pdf';
        downloadLink.download = 'Tshepang Mashigo CV.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
}