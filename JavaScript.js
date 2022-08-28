function SetCardColor(color) {
    var alist = document.querySelectorAll('p');
    for(var i=0; i<alist.length; i++)
        alist[i].style.color = color;
        
}

function Dark_Mode(self) {
    if(self.value == 'night')
        {
            document.querySelector('body').style.backgroundColor='black';
            document.querySelector('body').style.color='white';
            document.querySelector('h1').style.color='black';
            SetCardColor('white');
            self.value = 'day';
        }
    else if(self.value == 'day')
        {
            document.querySelector('body').style.backgroundColor='white';
            document.querySelector('body').style.color='black';
            SetCardColor('black');
            self.value = 'night';
        }
}