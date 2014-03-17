/**
 * uniqStrArray
 * 
 * @author LangSyne
 */

// 两种集合
// []
// {}
// 
// 基本类型
// string
// number
// boolean
// null
// undefined


function uniqStrArray( source ) {
    var exists = {};
    var result = [];

    if ( source instanceof Array ) {
        for ( var i = 0, len = source.length; i < len; i++ ) {
            var item = source[ i ];

            if ( !exists[ item ] ) {
                result.push( item );
                exists[ item ] = true;
            }
        }
    }

    return result;
}
