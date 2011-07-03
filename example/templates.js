(function($,window){ var JST = {}; JST.sample = function anonymous(jQuery,$item) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<h1>');if(typeof(title)!=='undefined' && (title)!=null){__.push($.encode((typeof(title)==='function'?(title).call($item):(title))));}__.push('</h1> <p>This is a sample template</p>');}return __;
}; window.JST = JST; })(jQuery,window);