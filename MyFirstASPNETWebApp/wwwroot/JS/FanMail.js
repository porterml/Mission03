






$("#btnSend").click(function () {
    var finalPercent = (($('#numAss').val() * .55) + ($('#numQuiz').val() * .10) + ($('#numIntex').val() * .1) + ($("#numGroup").val() * .05) + ($('#numExam').val() * .20))
    var letterGrade
    if (finalPercent >= 94) {
        alert('Final Grade: A ' + finalPercent)
    } else if (finalPercent < 94 && finalPercent >= 90) {
        alert('Final Grade: A- ' + finalPercent)
    } else if (finalPercent < 90 && finalPercent >= 87) {
        alert('Final Grade: B+ ' + finalPercent)
    } else if (finalPercent < 87 && finalPercent >= 84) {
        alert('Final Grade: B ' + finalPercent)
    } else if (finalPercent < 84 && finalPercent >= 80) {
        alert('Final Grade: B- ' + finalPercent)
    } else if (finalPercent < 80 && finalPercent >= 77) {
        alert('Final Grade: C+ ' + finalPercent)
    } else if (finalPercent < 77 && finalPercent >= 74) {
        alert('Final Grade: C ' + finalPercent)
    } else if (finalPercent < 74 && finalPercent >= 70) {
        alert('Final Grade: C- ' + finalPercent)
    } else if (finalPercent < 70 && finalPercent >= 67) {
        alert('Final Grade: D+ ' + finalPercent)
    } else if (finalPercent < 67 && finalPercent >= 64) {
        alert('Final Grade: D ' + finalPercent)
    } else if (finalPercent < 64 && finalPercent >= 64) {
        alert('Final Grade: D- ' + finalPercent)
    } else if (finalPercent < 60) {
        alert('Final Grade: E ' + finalPercent)
    }



 })

