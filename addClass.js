/**
 * addClass
 * 
 * @author LangSyne, errorrik
 */


function addClass(element, className) {
    var classNames = element.className.split( ' ' );
    classNames.push( className );
    element.className = classNames.join( ' ' );
}


