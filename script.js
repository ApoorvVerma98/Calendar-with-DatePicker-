$(document).ready(function () {
  // initilz the clndr
  renderCalendar();

  // hndle mnths nd yrs selection chnge
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

  // hndle bttn clck fr dte inpt
  $('#dateButton').click(function () {
    var inputDate = $('#dateInput').val();
    var cell = findCalendarCell(inputDate);
    if (cell) {
      toggleCellColor(cell);
    }
  });

  // rndr the clndr bsd on selected mnths nd yrs
  function renderCalendar() {
    var month = parseInt($('#month').val());
    var year = parseInt($('#year').val());
    var daysInMonth = new Date(year, month, 0).getDate();
    var firstDayOfWeek = new Date(year, month - 1, 1).getDay();
    var calendar = $('#calendar');
    calendar.empty();

    // add the dys of the week
    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    for (var i = 0; i < daysOfWeek.length; i++) {
      calendar.append('<div class="dayOfWeek">' + daysOfWeek[i] + '</div>');
    }

    // add empty cells for prvs mnths dys
    for (var i = 0; i < firstDayOfWeek; i++) {
      calendar.append('<div></div>');
    }

    // add cells for crrnt mnths dys
    for (var day = 1; day <= daysInMonth; day++) {
      var cell = $('<div>' + day + '</div>');
      cell.data('day', day);
      calendar.append(cell);
    }

    // attch clck evnt to cells for clr chnge
    $('.calendar div').click(function () {
      toggleCellColor($(this));
    });
  }

  // fnd the clndr cell with the spcfd dte
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

  // tggle the clr of a clndr cell
  function toggleCellColor(cell) {
    cell.toggleClass('green');
  }
});
