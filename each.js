/**
 * each
 * 
 * @author LangSyne,errorrik
 */

/*
each( 
     ["LangSyne", "erik"], 
     function ( item ) {
         alert( item + '`s here!' );
     }
);
*/


function each( source, iterator ) {
    if ( source instanceof Array ) {
        for ( var i = 0, len = source.length; i < len; i++ ) {
            iterator( source[ i ], i );
        }
    }
    else if ( typeof source == 'object' ) {
        for ( var key in source ) {
            iterator( source[ key ], key );
        }
    }
}
