var cmenu;

setcmenuData = function (v)
{
	cmenu=v;
}

getcmenuData = function ()
{
	cmenu = localStorage.getItem("cmenu");
	return cmenu;
}

//exports.setcmenuData = setcmenuData;
//exports.getcmenuData = getcmenuData;
