/**
 * isParent
 * 
 * @author LangSyne
 */

function isParent( parent, element ) {

    element = element.parentNode;
    while ( parentNode != null ) {
        if ( parent == element ) {
            return true;
        }
        element = element.parentNode;
    }
    return false;
}