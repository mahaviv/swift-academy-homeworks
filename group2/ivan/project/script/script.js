
(function () {
//===============================================================================//
//shrinking navbar start
	$(function () {
		$('#header_nav').data('size', 'big');
	});

	$(window).scroll(function () {
		if ($(document).scrollTop() > 0) {
			if ($('#header_nav').data('size') == 'big') {
				$('#header_nav').data('size', 'small');
				$('#header_nav').stop().animate({
					minHeight: '2.14em',
					padding: '0'
				}, 800);
			}
		} else {
			if ($('#header_nav').data('size') == 'small') {
				$('#header_nav').data('size', 'big');
				$('#header_nav').stop().animate({
					minHeight: '6.14em',
					padding: '1.5em 0'
				}, 800);
			}
		}
	});
//shrinking navbar end
//===============================================================================//	
//navbar navigation start
	$('.leftNavbar a').click(function (e) {
		e.preventDefault();
		$('.leftNavbar a').removeClass('active');
		$(this).addClass('active');
		var target = $(this).attr('data-target');
		$('body > div').hide();
		$('#' + target).show();
	});
//navbar navigation end	
//===============================================================================//
// accordion and filter start
	$('#accordion1 a').click(function (e) {
		e.preventDefault();
		$('#accordion1 a').removeClass('current');
		$(this).addClass('current');
		list($(this).attr("data-filter"));
	});
	
	$('#productsFilter').change(function (e) {
		list($('#accordion1 a.current').attr("data-filter"), $(this).val());
	});
// accordion and filter end	
//===============================================================================//	
// item alone start	
	$("#products").on("click", "img", function () {
		var url = $(this).attr("src");
		$("#products").empty();
		for (var i in itemsRoom) {
			var item = itemsRoom[i];
			if (url == item.picture)
				item.alone();
		}
	});
	//item  alone end
})();
//================================================================================//
// accordion and filter helper function start
function list(group, sort) {
	if (typeof sort !== 'undefined')
		itemsRoom = sortBy(itemsRoom, sort);
	$("#products").empty();
	for (var i in itemsRoom) {
		var item = itemsRoom[i];
		if ("all" === group || item.group === group || item.kind === group)
			item.toHtml();
	};
}
// accordion and filter helper function end
//=================================================================================//
// Item start
function Item(pic, name, price, group, kind, desc) {
	this.picture = pic;
	this.name = name;
	this.price = price;
	this.group = group;
	this.kind = kind;
	this.description = desc;
	this.toHtml = function () {
		$("#products").append('<div class="col-sm-4 col-lg-4 col-md-4"><div class="panel"><div class="panel-heading panel-primary"><h3>' + this.name + '<h3></div><div class="panel-body"><a href="#"><img src="' + this.picture + '" class="img-responsive center-block inList" alt="Image"></a></div><div class="panel-footer panel-primary"><span class="price">' + this.price + '$</span></div></div></div>');
	};
	this.alone = function () {
		$("#products").append('<div class="row"><div class="col-sm-6 col-lg-6 col-md-6"><div class="panel"><div class="panel-body"><img src="' + this.picture + '" class="img-responsive center-block image-alone" alt="Image"></div></div></div><div class="col-sm-6 col-lg-6 col-md-6"><div class="panel"><div class="panel-heading panel-primary"><h3>' + this.name + '</h3></div><div class="panel-body body-alone"><p>' + this.group + ' glass /<span> type: ' + this.kind + '</span></p><p class="lead">Description:</p><p>' + this.description + '</p></div><div class="panel-footer panel-primary"><span class="price">' + this.price + '$</span></div></div></div></div>');
	}
}
//Item end
//=======================================================================================//
// filter helper function start
function sortBy(itemsList, rule) {
	var compare;
	switch (rule) {
	case 'name_asc':
		compare = function (i1, i2) {
			return i1.name.localeCompare(i2.name);
		};
		break;
	case 'name_desc':
		compare = function (i1, i2) {
			return i2.name.localeCompare(i1.name);
		};
		break;
	case 'price_asc':
		compare = function (i1, i2) {
			return i1.price - i2.price;
		};
		break;
	case 'price_desc':
		compare = function (i1, i2) {
			return i2.price - i1.price;
		};
		break;
	default:
		throw new Error("Unrecognized sorting option: " + rule);
	}

	return itemsList.sort(compare);
}
// filter helper function end
//===================================================================================//
