
class StringUtil {

	static stripAccents (string) {
	    var translate_re = /[aàáâãäcçeèéêëiìíîïnñoòóôõöuùúûüýÿÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝABCDEFGHIJKLMNOPQRSTUVWXYZ]/g;
	    var translate = 'aaaaaacceeeeeiiiiinnoooooouuuuuyyaaaaaceeeeiiiinooooouuuuyabcdefghijklmnopqrstuvwxyz';
	    return (string.replace(translate_re, (match) => {
	        return translate.substr(translate_re.source.indexOf(match)-1, 1); 
	    }));
	}
}

export default StringUtil;