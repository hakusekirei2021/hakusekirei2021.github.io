(function () {
  'use strict';
  const userNameInput = document.getElementById('user-name');
  const assessmentButton = document.getElementById('assessment')
  const resultDivided = document.getElementById('result-area');
  const tweetDivided = document.getElementById('tweet-area');

  function removeAllChildren(element){
   while(element.firstChild){
     element.removeChild(element.firstChild)
   } 
  }


  

  assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if(userName.length === 0){
      return
    }

    removeAllChildren(resultDivided);

    
   

    const header = document.createElement('h3');
    header.innerText ='診断結果';
    resultDivided.appendChild(header);
    
    
    const paragraph = document.createElement('p');
    const result =assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

 
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = "https://twitter.com/intent/tweet?button_hashtag=あなたを癒すペットは？&ref_src=twsrc%5Etfw";
    anchor.setAttribute('href',hrefValue);
    anchor.className ="twitter-hashtag-button";
    anchor.innerText = "Tweet '#あなたを癒すペットは？";

    tweetDivided.appendChild(anchor);
    twttr.widgets.load();
    
    
  };

  const answers = [
    '{userName}を癒すペットは犬です。犬は{userName}を癒すでしょう。',
    '{userName}を癒すペットは猫です。猫は{userName}を癒すでしょう。',
    '{userName}を癒すペットはハムスターです。ハムスターは{userName}を癒すでしょう。',
    '{userName}を癒すペットは金魚です。金魚は{userName}を癒すでしょう。',
    '{userName}を癒すペットはメダカです。メダカは{userName}を癒し、繁殖がうまくいけばお金も稼げるでしょう。',
    '{userName}を癒すペットはカメです。カメは{userName}を癒すでしょう。',
    '{userName}を癒すペットは小さな爬虫類です。小さな爬虫類は{userName}を癒すでしょう。',
    '{userName}を癒すペットは熱帯魚です。熱帯魚は{userName}を癒すでしょう。',
    '{userName}を癒すペットは小鳥です。小鳥は{userName}を癒すでしょう。',
    '{userName}を癒すペットは小さなおさるさんです。ちいさなおさるさんは{userName}を癒すでしょう。',
    '{userName}を癒すペットはリスです。リスは{userName}を癒すでしょう。',
    '{userName}を癒すペットはうさぎです。うさぎは{userName}を癒すでしょう。',
    '{userName}を癒すペットは昆虫です。昆虫は{userName}を癒すでしょう。',
      ];

  function assessment(userName){
    let sumOfcharCode = 0;
    for(let i = 0; i < userName.length; i++){
      sumOfcharCode = sumOfcharCode +userName.charCodeAt(i)
      
    }
      let index = sumOfcharCode % answers.length;
      let result = answers[index];
     
      result = result.replace(/{userName}/g,userName);

      return result;
      
  }

  
  

})();