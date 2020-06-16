window.onload = function()
{
    var mainImage = document.getElementById("mainImage");
    var image = new Image();
    
    mainImage.appendChild(image);
    
    var thumbnails = document.getElementsByClassName("thumbnail");
    
    var currentThumbnail = thumbnails[0];
    
    image.src = currentThumbnail.getAttribute("src");
    currentThumbnail.className += " current";
    
    for (var i = 0; i < thumbnails.length; i++)
    {
        thumbnails[i].onmouseover = function()
        {
            currentThumbnail.className = currentThumbnail.className.replace("current", "");
            currentThumbnail = this;
            currentThumbnail.className += " current";
            
            image.src = this.getAttribute("src");
        };
    }
    
};
