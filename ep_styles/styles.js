settings = require('../../src/node/utils/Settings');
var eejs = require("ep_etherpad-lite/node/eejs");

// This is the WRONG WAY TO DO THIS! It should be like this: 
//
// exports.eejsBlock_styles = function(hook_name, args, cb){
//
// However, I don't know how to get clientVars.readonly in the server context for the plugin,
// so this is the hack instead.
exports.eejsBlock_scripts = function(hook_name, args, cb){

    args.content = args.content + "<script>if(clientVars.readonly){$('head').append(\"<link href='" + settings.ep_styles.writeable_styleUrl + "' rel='stylesheet'>\");}else{$('head').append(\"<link href='" + settings.ep_styles.readOnly_styleUrl + "' rel='stylesheet'>\");}</script>";

    return cb();
}
