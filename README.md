# js_mnml__data-for-multiTV-mod-x-evo
Этот код поможет конвертить JSON из страницы HTML прямиком в список на странице.

пример отработаного скрипта
_____________________________
<pre><code>
&lt;div&gt;
  &lta; href="/event/event-1.html"&gt;
    &lt;div&gt;&lt;img src="assets/images/evo-logo.png" alt=""&gt;&lt;/div&gt;
      &lt;p&gt;Event 1&lt;/p&gt;
    &ltp;&gt;&ltspan&gt;120&lt;/span&gt; - &lt;span&gt;480&lt;/span&gt;&lt;/p&gt;
  &lt;/a&gt;
	&lt;data class="/event/event-1.html"&gt;{"fieldValue":[{"event":"18-12-2018 00:00:00"}],"fieldSettings":{"autoincrement":1}}&lt;/data&gt;
  &lt;ul id="/event/event-1.html"&gt;
    &lt;li&gt;18-12-2018 00:00:00&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</pre><c/ode>
и пример из самого движка 
_____________________________
<pre><code>
[[DocLister?
		&parents=`4`
		&tvPrefix=``
		&tvList=`image,price,price 4,event`
		&display=`all`
		&orderBy=`menuindex DESC`
		&tpl='@CODE:
    	&lt;div&gt;
      	  &lta; href="[+url+]"&gt;
            &lt;div&gt;&lt;img src="[+image+]" alt=""&gt;&lt;/div&gt;
            &lt;p&gt;[+pagetitle+]&lt;/p&gt;
			&lt;p&gt;&ltspan&gt;[+price+]&lt;/span&gt; - &lt;span&gt;[+price 4+]&lt;/span&gt;&lt;/p&gt;
      	  &lt;/a&gt;
		  &lt;data class="[+url+]"&gt;[+event+]&lt;/data&gt;
		  &lt;ul id="[+url+]"&gt;&lt;/ul&gt;
    	&lt;/div&gt;'
	 ]]
</pre></code>
