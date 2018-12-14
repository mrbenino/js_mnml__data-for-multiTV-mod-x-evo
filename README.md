# js_mnml__data-for-multiTV-mod-x-evo
Этот код поможет конвертить JSON из страницы HTML прямиком в список на странице.

пример отработаного скрипта
_____________________________
<div>
  <a href="/event/event-1.html">
    <div><img src="assets/images/evo-logo.png" alt=""></div>
      <p>Event 1</p>
    <p><span>120</span> - <span>480</span></p>
  </a>
	<data class="/event/event-1.html">{"fieldValue":[{"event":"18-12-2018 00:00:00"}],"fieldSettings":{"autoincrement":1}}</data>
  <ul id="/event/event-1.html">
    <li>18-12-2018 00:00:00</li>
  </ul>
</div>

и пример из самого движка 
_____________________________
[[DocLister?
		&parents=`4`
		&tvPrefix=``
		&tvList=`image,price,price 4,event`
		&display=`all`
		&orderBy=`menuindex DESC`
		&tpl='@CODE:
    	<div>
      	  <a href="[+url+]">
            <div><img src="[+image+]" alt=""></div>
            <p>[+pagetitle+]</p>
			<p><span>[+price+]</span> - <span>[+price 4+]</span></p>
      	  </a>
		  <data class="[+url+]">[+event+]</data>
		  <ul id="[+url+]"></ul>
    	</div>'
	 ]]
