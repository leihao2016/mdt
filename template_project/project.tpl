{extends file="common/layout/layout.tpl"}

{block name="content"}

    {widget name="index/widget/banner/banner.tpl"}

    <div class="floor"><button id="click">点我试一试</button></div>

    {require name="index/index.css"}
    {require name="index/index.js"}

{/block}

