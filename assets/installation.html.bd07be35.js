import{_ as r,r as l,o as c,c as d,b as e,a as n,w as o,d as a,e as t}from"./app.8c288fc0.js";const h={},u=e("h1",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),a(" Installation")],-1),p=a("First you need a "),_=a("configuration files"),m=a(" in order to configure AKHQ connections to Kafka Brokers."),b=t(`<h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /tmp/application.yml:/app/application.yml <span class="token punctuation">\\</span>
    tchiotludo/akhq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=e("li",null,[a("With "),e("code",null,"-v /tmp/application.yml"),a(" must be an absolute path to configuration file")],-1),g=a("Go to "),k={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},f=a("http://localhost:8080"),x=e("h3",{id:"stand-alone",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stand-alone","aria-hidden":"true"},"#"),a(" Stand Alone")],-1),q=e("li",null,"Install Java 11",-1),y=a("Download the latest jar on "),w={href:"https://github.com/tchiotludo/akhq/releases",target:"_blank",rel:"noopener noreferrer"},C=a("release page"),K=a("Create an "),A=a("configuration files"),B=e("li",null,[a("Launch the application with "),e("code",null,"java -Dmicronaut.config.files=/path/to/application.yml -jar akhq.jar")],-1),I=a("Go to "),L={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},j=a("http://localhost:8080"),H=t(`<h3 id="running-in-kubernetes-using-a-helm-chart" tabindex="-1"><a class="header-anchor" href="#running-in-kubernetes-using-a-helm-chart" aria-hidden="true">#</a> Running in Kubernetes (using a Helm Chart)</h3><h3 id="using-helm-repository" tabindex="-1"><a class="header-anchor" href="#using-helm-repository" aria-hidden="true">#</a> Using Helm repository</h3><ul><li>Add the AKHQ helm charts repository:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helm repo <span class="token function">add</span> akhq https://akhq.io/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Install or upgrade</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helm upgrade <span class="token parameter variable">--install</span> akhq akhq/akhq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h4><ul><li>Chart version &gt;=0.1.1 requires Kubernetes version &gt;=1.14</li><li>Chart version 0.1.0 works on previous Kubernetes versions</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helm <span class="token function">install</span> akhq akhq/akhq <span class="token parameter variable">--version</span> <span class="token number">0.1</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="using-git" tabindex="-1"><a class="header-anchor" href="#using-git" aria-hidden="true">#</a> Using git</h3><ul><li>Clone the repository:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/tchiotludo/akhq <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> akhq/helm/akhq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),N=a("Update helm values located in "),R=e("a",{href:"helm/akhq/values.yaml"},"values.yaml",-1),V=e("code",null,"configuration",-1),D=a(" values will contains all related configuration that you can find in "),E={href:"https://github.com/tchiotludo/akhq/blob/dev/application.example.yml",target:"_blank",rel:"noopener noreferrer"},S=a("application.example.yml"),U=a(" and will be store in a "),G=e("code",null,"ConfigMap",-1),Q=e("code",null,"secrets",-1),F=a(" values will contains all sensitive configurations (with credentials) that you can find in "),J={href:"https://github.com/tchiotludo/akhq/blob/dev/application.example.yml",target:"_blank",rel:"noopener noreferrer"},M=a("application.example.yml"),T=a(" and will be store in "),W=e("code",null,"Secret",-1),z=e("li",null,"Both values will be merged at startup",-1),O=e("li",null,"Apply the chart:",-1),P=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helm <span class="token function">install</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>akhq-release-name  <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1);function X(Y,Z){const i=l("RouterLink"),s=l("ExternalLinkIcon");return c(),d("div",null,[u,e("p",null,[p,n(i,{to:"/docs/configuration/"},{default:o(()=>[_]),_:1}),m]),b,e("ul",null,[v,e("li",null,[g,e("a",k,[f,n(s)])])]),x,e("ul",null,[q,e("li",null,[y,e("a",w,[C,n(s)])]),e("li",null,[K,n(i,{to:"/docs/configuration/"},{default:o(()=>[A]),_:1})]),B,e("li",null,[I,e("a",L,[j,n(s)])])]),H,e("ul",null,[e("li",null,[N,R,e("ul",null,[e("li",null,[V,D,e("a",E,[S,n(s)]),U,G]),e("li",null,[Q,F,e("a",J,[M,n(s)]),T,W]),z])]),O]),P])}const ee=r(h,[["render",X],["__file","installation.html.vue"]]);export{ee as default};
