let daySelect = document.getElementById('dayOfBirth');
let monthSelect = document.getElementById('monthOfBirth');
let yearSelect = document.getElementById('yearOfBirth');

let selectedDay = 23;

let months = ['Января', 'Февраля', 'Марта','Апреля', 'Мая',
'Июня', 'Июля', 'Августа', 'Сентября', 'Октября',
'Ноября', 'Декабря'];

function SetMonthsSelect() 
{
    for (let i = 0; i < months.length; i++) {
        let option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = months[8];
}

function SetYearsSelect() 
{
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 101; i++) {
        let option = document.createElement('option');
        option.textContent = currentYear - i;
        yearSelect.appendChild(option);
    }
    yearSelect.value = 1993;
}

function SetDaysSelect(_month, _year) 
{
    while(daySelect.firstChild)
    {
        daySelect.removeChild(daySelect.firstChild);
    }

    let daysAmount = daysCount(_year, _month);

    for (let i = 1; i <= daysAmount; i++) {
        let option = document.createElement('option');
        option.textContent = i;
        daySelect.appendChild(option);
    }

    daySelect.value = selectedDay;
}

function daysCount (_year, _month) 
{
    return new Date(_year, _month + 1, 0).getDate();
}

SetMonthsSelect();
SetYearsSelect();
SetDaysSelect(months.indexOf(monthSelect.value), yearSelect.value);

yearSelect.onchange = function() 
{
    SetDaysSelect(months.indexOf(monthSelect.value), yearSelect.value);
}

monthSelect.onchange = function() 
{
    SetDaysSelect(months.indexOf(monthSelect.value), yearSelect.value);
}

daySelect.onchange = function()
{
    selectedDay = daySelect.value;
}