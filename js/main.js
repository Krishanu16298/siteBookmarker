document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    var siteName = document.getElementById('siteName').value; 
    var siteUrl = document.getElementById('siteUrl').value;
    
    var bookMark = {
        name:siteName,
        url:siteUrl
    }
    
    
    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        bookmarks.push(bookMark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    
    e.preventDefault();
}