$(document).ready(function () {
  // initialize the clndr
  renderCalendar();

  // hndle mnths nd yrs selction chnge
  $('#month, #year').change(function () {
    renderCalendar();
  });

  // hndle dte inpt nd colr chnge
  $('#dateInput').keypress(function (e) {
    if (e.keyCode === 13) {
      var inputDate = $(this).val();
      var cell = findCalendarCell(inputDate);
      if (cell) {
        toggleCellColor(cell);
      }
    }
  });

  // hndle btn click for date input
  $('#dateButton').click(function () {
    var inputDate = $('#dateInput').val();
    var cell = findCalendarCell(inputDate);
    if (cell) {
      toggleCellColor(cell);
    }
  });

  // rnder the calndr basd on selctd mnths nd yrs
  function renderCalendar() {
    var month = parseInt($('#month').val());
    var year = parseInt($('#year').val());
    var daysInMonth = new Date(year, month, 0).getDate();
    var firstDayOfWeek = new Date(year, month - 1, 1).getDay();
    var calendar = $('#calendar');
    calendar.empty();

    // add empty cells for prevs mnths dys
    for (var i = 0; i < firstDayOfWeek; i++) {
      calendar.append('<div></div>');
    }

    // add cells for crrnt mnths dys
    for (var day = 1; day <= daysInMonth; day++) {
      var cell = $('<div>' + day + '</div>');
      cell.data('day', day);
      calendar.append(cell);
    }

    // attch clck event to cells for colr chnge
    $('.calendar div').click(function () {
      toggleCellColor($(this));
    });
  }

  // fnd the calndr cell with the specifd dte
  function findCalendarCell(date) {
    var day = parseInt(date);
    var cells = $('.calendar div');
    for (var i = 0; i < cells.length; i++) {
      var cell = $(cells[i]);
      if (cell.data('day') === day) {
        return cell;
      }
    }
    return null;
  }

  // toggle the colr of a calndr cell
  function toggleCellColor(cell) {
    cell.toggleClass('green');
  }
});
