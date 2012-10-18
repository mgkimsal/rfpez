// Generated by CoffeeScript 1.3.3
(function() {
  var dismiss_selection, keep_bid_in_view, mouseover_select_timeout, on_mouseover_select, open_selection, star_selection, toggle_unread_selection;

  on_mouseover_select = true;

  mouseover_select_timeout = false;

  keep_bid_in_view = function(bid, scrollTo) {
    var bottom, current_bottom, current_top, top;
    on_mouseover_select = false;
    clearTimeout(mouseover_select_timeout);
    if (scrollTo === "bid") {
      bottom = bid.offset().top + bid.height();
      current_bottom = $(window).scrollTop() + $(window).height();
      top = bid.offset().top;
      current_top = $(window).scrollTop();
      if (current_bottom < bottom) {
        $('html, body').scrollTop(bottom - $(window).height());
      }
      if (current_top > top) {
        $('html, body').scrollTop(bid.offset().top);
      }
    } else if (scrollTo === "top") {
      $('html, body').scrollTop(0);
    }
    return mouseover_select_timeout = setTimeout(function() {
      return on_mouseover_select = true;
    }, 200);
  };

  Rfpez.select_bid = function(bid, scrollTo) {
    $(".bid").removeClass('selected');
    bid.addClass('selected');
    if (scrollTo) {
      return keep_bid_in_view(bid, scrollTo);
    }
  };

  Rfpez.move_bid_selection = function(direction) {
    var all_bids, new_index, new_selection, selected_bid, selected_index;
    selected_bid = $(".bid.selected:eq(0)");
    if (!selected_bid) {
      return;
    }
    all_bids = $(".bid");
    selected_index = all_bids.index(selected_bid);
    if (direction === "up") {
      if (selected_index === 0) {
        return Rfpez.select_bid(selected_bid, "top");
      }
      new_index = selected_index - 1;
    } else {
      new_index = selected_index + 1;
    }
    new_selection = $(".bid:eq(" + new_index + ")");
    if (new_selection.length > 0) {
      return Rfpez.select_bid(new_selection, "bid");
    }
  };

  star_selection = function() {
    var selected_bid;
    selected_bid = $(".bid.selected:eq(0)");
    return selected_bid.find(".star-td .btn:visible").click();
  };

  open_selection = function() {
    var selected_bid;
    selected_bid = $(".bid.selected:eq(0)");
    return selected_bid.find("a[data-toggle=collapse]").click();
  };

  dismiss_selection = function() {
    var selected_bid;
    selected_bid = $(".bid.selected:eq(0)");
    return selected_bid.find(".show-dismiss-modal, .undismiss-button").filter(":visible").click();
  };

  toggle_unread_selection = function() {
    var selected_bid;
    selected_bid = $(".bid.selected:eq(0)");
    if (selected_bid.find(".mark-as-read").is(":visible")) {
      return selected_bid.find(".mark-as-read").click();
    } else {
      return selected_bid.find(".mark-as-unread").click();
    }
  };

  $(document).bind('keydown', 'k', function() {
    return Rfpez.move_bid_selection("up");
  });

  $(document).bind('keydown', 'j', function() {
    return Rfpez.move_bid_selection("down");
  });

  $(document).bind('keydown', 's', star_selection);

  $(document).bind('keydown', 'return', open_selection);

  $(document).bind('keydown', 'o', open_selection);

  $(document).bind('keydown', 'd', dismiss_selection);

  $(document).bind('keydown', 'u', toggle_unread_selection);

  $(document).on("mouseover.selectbidmouseover", ".bid", function() {
    if ($("#current-page").val() === "bid-review" && on_mouseover_select) {
      return Rfpez.select_bid($(this), false);
    }
  });

}).call(this);
