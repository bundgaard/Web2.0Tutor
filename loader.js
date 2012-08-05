/* Loader.js */

	onmessage = function(evt)
	{

		postMessage(fib(evt));
	}
var f0 = 0, f1 = 1;
	function fib(count)
	{
		
		var output = "";
 		for(var i = 0; i < count.data; i++)
 		{
 			var tmp = f0;
 			output += " " + (f0 + f1);

 			f0 = f1;
 			f1 = tmp + f1;

		 }
		 return output;
	}
