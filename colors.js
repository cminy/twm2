  function bodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
  }

  function bodySetColor(color){
    document.querySelector('body').style.color = color;
  }

  function LinksSetColor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
  
  function skyGroundHandler(self){
    if (self.value === 'sky'){
      bodySetBackgroundColor('skyblue');
      self.value = 'this is sky';
      LinksSetColor('darkgray');
    } else if (self.value === 'ground'){
      bodySetBackgroundColor('#ad5e1a');
      bodySetColor('black');
      self.value = 'this is ground';
      LinksSetColor('white');
    }
  }
