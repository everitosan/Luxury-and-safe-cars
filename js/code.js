var index=0, base, alt;
var pregif;

var info=[
			{'i':["MERCEDES BENZ","C-250 TURBO","IV","GRIS","NEGRO","2013","5","$16,500"]},
			{'i':["MERCEDES BENZ","C-200 TURBO","No","NEGRO","BEIGE","2012","5","$6,000"]},
			{'i':["GRAND CHEROKEE","LIMITED 4x4","III","BLANCO","NEGRO","2011","5","$13,000"]},
			{'i':["LINCOLN NAVIGATOR","T8L","No","GRIS","NEGRO","2011","7","$10,000"]},
			{'i':["GMC YUKON","DENALI","No","GRIS","NEGRO","2012","7","$10,000"]},
			{'i':["PASSAT","SPORTLINE","No","NEGRO","BEIGE","2013","5","$5,000"]},
			{'i':["CAYENNE","NA","No","ROJO","BEIGE","2011","5","$12,000"]}

			];
function inicio()
{
	$('.element img').on('click', bigslide);	
	$('#bigdiv #close').on('click', outslide);
	pregif=new Image();
	pregif.src="http://luxuryandsafecars.com/img/pre-loader.gif";

	$('#menumovile').on('click', menmov);
}
 
function menmov()
{
	var x, y, act;
	if($('nav ul').css('display')=='none')
	{
		y=$(this).offset().top;
		x=$(this).offset().left;

		x1=$('nav ul li').css('width');

		x=x+parseInt($(this).css('width'))/2;
		x=x-(parseInt($('nav ul').css('width'))/2);
		y=y+(parseInt( $('nav ul').css('height'))+10);
		
		act={'position':'absolute',
			 'z-index':'2',
			 'top':y,
			 'left':x,
			 'display':'block'
			};

		$('nav ul').css('height','220px');
		$('nav ul').css(act);
	}
	else
	{
		$('nav ul').css('height','55px');
		$('nav ul').css('display','none');
	}
}

function bigslide()
{
	base=$(this).attr('data-base');
	alt=$(this).attr('alt');
	
	$('#bigdiv').fadeIn();	
	//$('#bigdiv img').attr('src',base+'/'+alt+index+'.png');
	$('#next').on('click', sig);
	$('#prev').on('click', previous);
	$('.btn').on('mousedown', function(){event.preventDefault();});
	cimage();
	cinfo($(this).parent().attr('data-index'));
}

function sig()
{
	index++;
	cimage()
	
}

function previous()
{
	index--;
	cimage()
}

function cimage()
{
	$('#bigdiv img').css('opacity',0);
	var imagen= new Image();
	imagen.src=base+'/'+alt+index+'.png';

	imagen.onerror = function ()
	{
		outslide();
	}
	imagen.onload=function()
	{
		$('#bigdiv img').attr('src',this.src);
		$('#bigdiv img').css('opacity',1);
	}
}

function outslide()
{
	index=0;
	$('#bigdiv').fadeOut();
	$('#next').off();
	$('#prev').off();
}
function cinfo(dinf)
{
	$($('#des tr')[1]).html('');
	console.log(info[dinf]);
	$(info[dinf].i).each(function(){
		$($('#des tr')[1]).append("<td>"+this+"</td>");
	});
}
$(document).ready(inicio);