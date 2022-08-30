import{_ as a,o as s,c as n,e}from"./app.8c288fc0.js";const t={},l=e(`<h1 id="aws-msk-iam-auth" tabindex="-1"><a class="header-anchor" href="#aws-msk-iam-auth" aria-hidden="true">#</a> AWS MSK IAM Auth</h1><ul><li>The libraries required for IAM authentication have already been loaded.</li></ul><p>Configure aws-msk-iam-auth connection in AKHQ</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>
  <span class="token key atrule">connections</span><span class="token punctuation">:</span>
    <span class="token key atrule">docker-kafka-server</span><span class="token punctuation">:</span>
      <span class="token key atrule">properties</span><span class="token punctuation">:</span>
        <span class="token key atrule">bootstrap.servers</span><span class="token punctuation">:</span> msk<span class="token punctuation">-</span>broker<span class="token punctuation">:</span><span class="token number">9098</span>
        <span class="token key atrule">security.protocol</span><span class="token punctuation">:</span> SASL_SSL
        <span class="token key atrule">sasl.mechanism</span><span class="token punctuation">:</span> AWS_MSK_IAM
        <span class="token key atrule">sasl.jaas.config</span><span class="token punctuation">:</span> software.amazon.msk.auth.iam.IAMLoginModule required awsDebugCreds=true;
        <span class="token key atrule">sasl.client.callback.handler.class</span><span class="token punctuation">:</span> software.amazon.msk.auth.iam.IAMClientCallbackHandler
        <span class="token key atrule">ssl.truststore.location</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>JAVA_HOME<span class="token punctuation">}</span>/lib/security/cacerts
        <span class="token key atrule">ssl.truststore.password</span><span class="token punctuation">:</span> changeit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2><p>https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html https://github.com/aws/aws-msk-iam-auth/blob/main/README.md</p>`,6),c=[l];function i(o,r){return s(),n("div",null,c)}const p=a(t,[["render",i],["__file","aws-iam-auth.html.vue"]]);export{p as default};
