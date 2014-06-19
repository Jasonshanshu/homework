/**
 * clone
 * 
 * @author LangSyne,errorrik
 */


// var a = [ 1, 2, 3 ];
// showA( clone( a ) );
// ....
// showA( a );
// [ [1, [2,3,4, [5,6,7]]], [2, 3] ]
// { a: {}, b: [] }

function clone( source ) {
    if ( source == null ) {
        return source;
    }

    if ( source instanceof Array ) {
        var arr = [];
        for ( var i = 0, len = source.length; i < len; i++ ) {
            arr[i] = clone( source[i] );
        }
        return arr;
    }
    else if ( typeof source == 'object' ) {
        var obj = {};
        for ( var i in source ) {
            obj[i] = clone( source[i] );
        }
        return obj;
    }
    else {
        return source;
    }
}



