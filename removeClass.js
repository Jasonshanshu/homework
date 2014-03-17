/**
 * removeClass
 * 
 * @author LangSyne
 */


// "header header-hover header-hover header-big"

function removeClass(element, className) {
    var classNames = element.className.split( ' ' );
    
    var index = classNames.length;
    while ( index-- ) {
        if ( className == classNames[ index ] ) {
            classNames.splice( index, 1 );
        }
    }

    element.className = classNames.join( ' ' );
}