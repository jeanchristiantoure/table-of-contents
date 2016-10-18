// Find the heading elements
var headings = document.querySelectorAll('h2, h3, h4, h5, h6');
console.log(headings)


// Create an ordered list
var tocList = document.createElement('ol');
console.log(tocList);

// Loop through the headings

for(var i = 0; i < headings.length; i++) {
    var heading = headings[i];
    var heading2 = (heading.localName == "h2");
    
    
    //console.log(heading);
    //console.log(heading.textContent);
    
    var li = document.createElement('li');
    var a = document.createElement('a');
    
    a.textContent = heading.textContent;
    a.href = "#" + heading.id;
    a.rel = 'internal';
    
    li.appendChild(a);
    
    if (heading2) {
        var h3TocList = document.createElement('ol');
        
        tocList.appendChild(li);
        tocList.appendChild(h3TocList);
        
    }
    else {
        h3TocList.appendChild(li);
    
    }

}
//console.log(tocList)
// Build the `a` and `li` elements


// Find the Table of Contents placeholder element
var toc = document.querySelector('#table-of-contents');
console.log(toc);


// Add the `tocList` to the `toc` placeholder element
toc.appendChild(tocList);

// Add a “Table of Contents” heading
var tocHeading = document.createElement('h2');
tocHeading.textContent = 'Table of Contents';
console.log(tocHeading);

toc.insertBefore(tocHeading, tocList);

// Make it collapsible
tocHeading.addEventListener('click', function(){
    console.log('Heading clicked!');
    tocList.classList.toggle('collapsed');
    console.log(tocList);
}, false);
    


// Celebrate!


// Additional improvements